import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateRegistrationFormObject } from '../actions'
import { updateRegistrationFormUsage } from '../actions'
import { addRegistration, selectRegistration } from '../actions'
import RestAPI from '../rest';
import { deleteRegistration } from '../actions'
import EventDropDown from './EventDropDown';
import CustomerDropDown from './CustomerDropDown';

const restapi = new RestAPI();

function convertDate(date_number){
  let date_string = new Date(date_number).toISOString().substring(0,10);
  return date_string;
}

const RegistrationForm = ({ registration, usage, handleChange, handleRegistrationEditClick,
  handleEditCancelClick, handleRegistrationSaveClick, events, customers,  
  handleRegistrationDeleteClick }) => {
  let rdate = convertDate(registration.registration_date);
  return (
    <div id='registration-form'  className='card bg-light' hidden={ usage === 'none'} >
      <div>
        <h4 className='card-header'>Register for an Event</h4> 
        <form >
          <table className='table'><tbody>
            <tr>
              <td>Event:</td>
                <td>
                  <EventDropDown events={events} 
                    selectedEventId={registration.event_id} 
                    onSelectedEvent={handleChange}
                    usage = {usage} 
                  ></EventDropDown>
                </td>
            </tr>
            <tr>
              <td>Customer:</td>
              <td>
                  <CustomerDropDown customers={customers} 
                    selectedCustomerId={registration.customer_id} 
                    onSelectedCustomer={handleChange} 
                    usage = {usage} 
                  ></CustomerDropDown>
              </td>              
            </tr>
            <tr>
              <td>RegistrationDate:</td>
              <td><input type={'date'} name={'registration_date'} onChange={handleChange}
                placeholder={'Registration Date'}
                value={rdate} disabled={usage === 'none' || usage === 'view'} /></td>
            </tr>
            <tr>
              <td>Notes:</td>
              <td><input type={'text'} name={'notes'} onChange={handleChange}
                placeholder={'Notes'}
                value={registration.notes} disabled={usage === 'none' || usage === 'view'} /></td>
            </tr>
          </tbody></table>
          <input type={'button'} value="Delete"
            onClick={(e) => handleRegistrationDeleteClick(e, registration)}
            hidden={usage === 'none' || usage === 'view' || usage === 'add'} />
          <input type={'button'} value="Save" onClick={(e) => handleRegistrationSaveClick(e, registration)} hidden={usage === 'none' || usage === 'view'} />
          <input type={'button'} value="Cancel" onClick={(e) => handleEditCancelClick(e, registration)} hidden={usage === 'none' || usage === 'view'} />
          <input type={'button'} value="Edit" onClick={(e) => handleRegistrationEditClick(e, registration)} hidden={usage === 'none' || usage === 'edit' || usage === 'add'} />
        </form>
      </div>
    </div>
  );
}



RegistrationForm.propTypes = {
  registration: PropTypes.shape({
    event_id: PropTypes.string.isRequired,
    customer_id: PropTypes.string.isRequired,
    registration_date: PropTypes.number.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    registration: state.formState.registration,
    usage: state.formState.usage,
    appState: state.appState,
    customers: state.customers,
    events: state.events    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (e) => {
      const field_name = e.currentTarget.name;
      let field_value = '';
      if(field_name === 'registration_date'){
        field_value = new Date(e.currentTarget.value).getTime();
      }else{
        field_value = e.currentTarget.value;
      }
      dispatch(updateRegistrationFormObject(field_name, field_value));
    },
    handleRegistrationEditClick: (e, registration, usage) => {
      console.log("in RegistrationForm.handleRegistrationEditClick");
      dispatch(updateRegistrationFormUsage('edit', registration));
    },
    handleEditCancelClick: (e, registration, usage) => {
      console.log("in RegistrationForm.handleEditCancelClick");
      dispatch(updateRegistrationFormUsage('view', registration));
    },
    handleRegistrationSaveClick: (e, registration, usage) => {
      console.log("in RegistrationForm.handleRegistrationSaveClick: " 
                    + JSON.stringify(registration));
      dispatch(addRegistration(registration));
      if (usage === 'add') {
        dispatch(selectRegistration(registration));
      }
      dispatch(updateRegistrationFormUsage('none'));
      restapi.putRegistration(dispatch, registration);
    },
    handleRegistrationDeleteClick: (e, registration) => {
      console.log("in RegistrationForm.handleRegistrationDeleteClick");
      console.log("registration: " + JSON.stringify(registration));
      dispatch(deleteRegistration(registration));
      dispatch(updateRegistrationFormUsage('none'));
      restapi.deleteRegistration(dispatch, registration);
    }
  }
}

const VisibleRegistrationForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm)

export default VisibleRegistrationForm