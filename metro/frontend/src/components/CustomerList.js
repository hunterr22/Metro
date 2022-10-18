import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Customer from './Customer'
import { selectCustomer, updateCustomerFormUsage, getCustomers } from '../actions'

class CustomerList extends React.Component {
  constructor(props) {
    super(props);
    console.log('in EventList: ' + JSON.stringify(this.props.events));
  }

  componentDidMount() {
    if (!this.props.fetched) {
      this.props.fetchRules(this.props.fetched);
    }
    console.log('mount it!');
  }

  static propTypes = {
    customers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    }).isRequired).isRequired
  }


  render() {
    return (
      <div id='customer-list' className='card bg-light' >
        <h4 className='card-header'>List of Users/Customers</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map(customer =>
              <Customer
                key={customer.id}
                customer={customer}
                selectedId={this.props.appState.selectedId}
                onClick={() => this.props.onCustomerClick(customer)}
              />
            )}
          </tbody></table>
          <hr></hr>
          <p style={{'paddingLeft':'10px'}}>
            <input style={{width:'fit-content'}} className='btn btn-primary' type={'button'} onClick={this.props.handleNewCustomerClick} value="New Customer" />
          </p>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    customers: state.customers,
    appState: state.appState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRules: (fetched) => {
      console.log('in CustomerList.fetchRules:');
      dispatch(getCustomers(dispatch));
      fetched = true;
    },
    onCustomerClick: (customer) => {
      console.log('in CustomerList.onCustomerClick:' + JSON.stringify(customer));
      dispatch(selectCustomer(customer));
      dispatch(updateCustomerFormUsage('view', customer));
    },
    handleNewCustomerClick: () => {
      console.log('in CustomerList.handleNewCustomerClick:');
      dispatch(updateCustomerFormUsage('add'));
      dispatch(selectCustomer(-1));
    }
  }
}

const VisibleCustomerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList)

export default VisibleCustomerList