import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Registration from './Registration'
import { selectRegistration, updateRegistrationFormUsage, getRegistrations } from '../actions'


class RegistrationList extends React.Component {
  constructor(props) {
    super(props);
    console.log('in RegistrationList: ' + JSON.stringify(this.props.registrations));
  }

  componentDidMount() {
    if (!this.props.fetched) {
      this.props.fetchRules(this.props.fetched);
    }
    console.log('mount it!');
  }

  static propTypes = {
    registrations: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired).isRequired
  }

  lookupEventTitle( event_id ){
    
    for(let id in this.props.events){
      let item = this.props.events[id];
      if( item.id === event_id){
        return item.title;
      }
    }
    return 'event-title';
  }

  lookupCustomerName( customer_id ){
    for(let id in this.props.customers){
      let customer = this.props.customers[id];
      if( customer.id === customer_id){
        return customer.name;
      }
    }    
    return 'customer-name';
  }

  render() {

    return (
      <div id='registration-list' className='card bg-light'  >
        <h4 className='card-header' >Event Registrations</h4>
        <table className='table'><tbody>
          {this.props.registrations.map(registration => {
            let event_name = this.lookupEventTitle(+registration.event_id);
            let customer_name = this.lookupCustomerName(+registration.customer_id);
            return (
              <Registration
                key={registration.id}
                registration={registration}
                event_name={event_name}
                customer_name={customer_name}
                selectedId={this.props.appState.selectedId}
                onClick={() => this.props.onRegistrationClick(registration)}
              />
            );
          }
          )
          }
        </tbody></table>
        <hr></hr>
        <p style={{'paddingLeft':'10px'}}>
        <input style={{width:'fit-content'}} className='btn btn-primary'  type={'button'} onClick={this.props.handleNewRegistrationClick} value="New Registration" />
          </p>         
        
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(JSON.stringify(state.events));
  return {
    registrations: state.registrations,
    appState: state.appState,
    customers: state.customers,
    events: state.events
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRules: (fetched) => {
      console.log('in RegistrationList.fetchRules:');
      dispatch(getRegistrations(dispatch));
      fetched = true;
    },
    onRegistrationClick: (registration) => {
      console.log('in RegistrationList.onRegistrationClick:' + JSON.stringify(registration));
      dispatch(selectRegistration(registration));
      dispatch(updateRegistrationFormUsage('view', registration));
    },
    handleNewRegistrationClick: () => {
      console.log('in RegistrationList.handleNewRegistrationClick:');
      dispatch(updateRegistrationFormUsage('add'));
      dispatch(selectRegistration(-1));
    }
  }
}

const VisibleRegistrationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationList)

export default VisibleRegistrationList