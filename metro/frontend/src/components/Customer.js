import React from 'react'
import PropTypes from 'prop-types'

const Customer = ({ onClick, selectedId, customer }) => {
  return (
    <tr className={customer.id === selectedId ? "selected" : ""}
		    onClick={(e) => onClick(e, customer.id)} >
        <td>{customer.name}</td><td>{customer.email}</td>
    </tr>
  );
}

Customer.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedId: PropTypes.number,
  customer: PropTypes.object.isRequired
}

export default Customer