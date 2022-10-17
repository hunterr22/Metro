import React from 'react'
import PropTypes from 'prop-types'

const CustomerDropDown = ({ customers, selectedCustomerId, onSelectedCustomer, usage }) => {
  return (
    <select name={'customer_id'} 
      value={selectedCustomerId} 
      onChange={onSelectedCustomer}
      disabled={usage === 'none' || usage === 'view'}
    >
      <option key={-1} value={-1}>select</option> 
      {customers.map(customer =>
        <option
          key = {customer.id}  
          value = {customer.id} 
        >{customer.name}</option> 
      )}
  </select>
  );
}

CustomerDropDown.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CustomerDropDown
