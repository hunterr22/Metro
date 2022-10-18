import React from 'react'
import PropTypes from 'prop-types'

const EventDropDown = ({ events, selectedEventId, onSelectedEvent, usage }) => {
  return (
    <select name={'event_id'} 
      value={selectedEventId} 
      onChange={onSelectedEvent}
      disabled={usage === 'none' || usage === 'view'}
    >
      <option key={-1} value={-1}>select</option> 
      {events.map(event =>
        <option
          key = {event.id}  
          value = {event.id} 
        >{event.title}</option>
      )}
  </select>
  );
}

EventDropDown.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default EventDropDown