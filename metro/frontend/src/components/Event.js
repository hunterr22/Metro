import React from 'react'
import PropTypes from 'prop-types'

const Event = ({ onClick, selectedId, event }) => {
  return (
    <tr className={event.id === selectedId ? "selected" : ""}
		    onClick={(e) => onClick(e, event.id)} >
        <td>{event.code}</td>
        <td>{event.title}</td>
        <td>{event.description}</td>
    </tr>
  );
}

Event.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  event: PropTypes.object.isRequired
}

export default Event