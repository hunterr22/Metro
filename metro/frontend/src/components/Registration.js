import React from 'react'
import PropTypes from 'prop-types'

const Registration = ({ onClick, selectedId, registration, event_name, customer_name }) => {
  let date = new Date(registration.registration_date).toISOString().substring(0,10); 
  return (
    <tr className={registration.id === selectedId ? "selected" : ""}
		    onClick={(e) => onClick(e, registration.id)} >
        <td>{registration.id}</td>
        <td>{event_name}</td>
        <td>{customer_name}</td>
        <td>{date}</td>
        <td>{registration.notes}</td>
    </tr>
  );
}

Registration.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  registration: PropTypes.object.isRequired
}

export default Registration