const initial = {selectedCustomerId:"1", selectedCustomer:{} };

const appState = (state = initial, action, data) => {

    switch (action.type) {
    case 'SELECT_CUSTOMER': {
        let customer_copy = Object.assign({}, action.customer);
        return Object.assign({}, {selectedCustomerId: action.customer.id}, {selectedCustomer: customer_copy });
    }    
    case 'SELECT_EVENT': {
        let event_copy = Object.assign({}, action.event);
        return Object.assign({}, {selectedEventId: action.event.id}, {selectedEvent: event_copy });
    } 
    default:
        return state
    }
}

export default appState