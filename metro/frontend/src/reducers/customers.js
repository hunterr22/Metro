import RestAPI from '../rest';

const initial = [{ id: 100, name: 'Brian', email: 'brian@a.com' },
{ id: 101, name: 'Scott', email: 'scott@a.com' },
{ id: 102, name: 'Jeff', email: 'jeff@a.com' }];

const customers = (state = initial, action, data) => {
    switch (action.type) {

        case 'ADD_CUSTOMER': {
            console.log("in reducer customer.ADD_CUSTOMER");
            let othercustomers = state.filter(
                customer => {
                    if (customer.id === action.customer.id ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );
            let newstate = [...othercustomers, Object.assign({}, action.customer)]
            console.log("in reducer customer.ADD_CUSTOMER, newstate: " + JSON.stringify(newstate));
            return newstate;
        }

        case 'DELETE_CUSTOMER': {
            console.log("in reducer customers.DELETE_CUSTOMER");
            let othercustomers = state.filter(
                (customer) => {
                    if (customer.id === action.customer.id ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );
            let newstate = [...othercustomers]
            console.log("in reducer customers.DELETE_CUSTOMER, newstate: " + JSON.stringify(newstate));
            return newstate;
        }

        case 'APPLY_CUSTOMERS_UPDATE': {
            console.log("in reducer customers.APPLY_CUSTOMERS_UPDATE", action.customers);
            let newstate = [...action.customers];
            return newstate;
        }

        case 'GET_CUSTOMERS': {
            console.log("in reducer customers.GET_CUSTOMERS", state);
            new RestAPI().getCustomers(action.dispatch);
            return state;
        }

        default:
            console.log("in reducer customer.default");
            return state
    }
}

export default customers