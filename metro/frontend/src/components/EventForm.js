import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { updateEventFormObject } from '../actions'
import { updateEventFormUsage } from '../actions'
import { addEvent, selectEvent } from '../actions'
import RestAPI from '../rest';
import { deleteEvent } from '../actions'
const restapi = new RestAPI();

const EventForm = ({ event, usage, handleChange, handleEventEditClick, 
                    handleEditCancelClick, handleEventSaveClick, 
                    handleEventDeleteClick }) => (
    <div id='event-form' className="card bg-light" hidden={ usage === 'none'}>
        <div>
            <h4 className="card-header">Add or Modify an Event</h4>
            <form >
                <table className="table" ><tbody>
                    <tr>
                        <td>Code:</td>
                        <td><input type={'text'} name={'code'} onChange={handleChange} 
                             placeholder={'Event code'}
                             value={event.code} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td><input type={'text'} name={'title'} onChange={handleChange} 
                             placeholder={'Title'}
                             value={event.title} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td><input type={'text'} name={'description'} onChange={handleChange} 
                             placeholder={'Description'}
                             value={event.description} disabled={usage==='none'||usage==='view'} /></td>
                    </tr>                    
                </tbody></table>
                <input type={'button'} value="Delete" 
                    onClick={ (e)=>handleEventDeleteClick(e, event) } 
                    hidden={usage ==='none' || usage === 'view' || usage === 'add' } />
                <input type={'button'} value="Save" onClick={ (e)=>handleEventSaveClick(e, event) } hidden={ usage === 'none' || usage === 'view'} />
                <input type={'button'} value="Cancel" onClick={ (e)=>handleEditCancelClick(e, event) } hidden={ usage === 'none' || usage === 'view'} />
                <input type={'button'} value="Edit" onClick={ (e)=>handleEventEditClick(e, event) } hidden={ usage === 'none' || usage === 'edit' || usage === 'add'} />
            </form>
        </div>  
    </div>
)

EventForm.propTypes = {
  event:  PropTypes.shape({
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
}

const mapStateToProps = (state) => {
  return {
    event: state.formState.event,
    usage: state.formState.usage,
    appState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    handleChange: (e) => {
        const field_name = e.currentTarget.name;
        const field_value = e.currentTarget.value;
        dispatch( updateEventFormObject( field_name, field_value ));
    },
    handleEventEditClick: (e, event, usage) => {
        console.log("in EventForm.handleEventEditClick");
        dispatch( updateEventFormUsage('edit', event) );        
    },
    handleEditCancelClick: (e, event, usage) => {
        console.log("in EventForm.handleEditCancelClick");
        dispatch( updateEventFormUsage('view', event) );        
    },
    handleEventSaveClick: (e, event, usage) => {
        console.log("in EventForm.handleEventSaveClick");
        dispatch(addEvent(event));
        if(usage === 'add'){
            dispatch(selectEvent(event));
        }
        dispatch(updateEventFormUsage('none'));
        restapi.putEvent(dispatch, event);
    },
    handleEventDeleteClick: (e, event) => {
        console.log("in EventForm.handleEventDeleteClick");
        console.log("event: " + JSON.stringify(event));
        dispatch(deleteEvent(event));
        dispatch(updateEventFormUsage('none')); 
        restapi.deleteEvent(dispatch, event);       
    }             
  }
}

const VisibleEventForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm)

export default VisibleEventForm