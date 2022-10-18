import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Event from './Event'
import { selectEvent, updateEventFormUsage, getEvents } from '../actions'

class EventList extends React.Component  {
  constructor(props) {
     super(props);
     console.log('in EventList: ' + JSON.stringify(this.props.events));
  }

  componentDidMount () {
      if(!this.props.fetched) {
          this.props.fetchRules(this.props.fetched);
      }
      console.log('mount it!');
  }

  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired).isRequired
  }

  render() {
    return (  
      <div id='event-list'  className="card bg-light" >
        <h4 className='card-header'>List of Events</h4>
          <table className='table'>
          <thead>
            <tr>
              <th>Code</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>            
            <tbody>
            {this.props.events.map(event =>
              <Event
                key = {event.id}  
                event={event}
                selectedId={ this.props.appState.selectedId }  
                onClick={() => this.props.onEventClick(event)} 
              />
            )}
          </tbody></table>
          <hr></hr>
          <p style={{'paddingLeft':'10px'}}>
            <input style={{width:'fit-content'}} className='btn btn-primary' type={'button'} onClick={this.props.handleNewEventClick} value="New Event" />
          </p>          
          
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    appState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRules: (fetched) => {
      console.log('in EventList.fetchRules:');
      dispatch(getEvents(dispatch));
      fetched = true;
    },
		onEventClick: (event) => {
		  console.log('in EventList.onEventClick:' + JSON.stringify(event));
		  dispatch(selectEvent(event));
      dispatch(updateEventFormUsage('view', event));
		},
    handleNewEventClick: () => {
      console.log('in EventList.handleNewEventClick:');
      dispatch(updateEventFormUsage('add'));
      dispatch(selectEvent(-1));
    }        
  }
}

const VisibleEventList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventList)

export default VisibleEventList