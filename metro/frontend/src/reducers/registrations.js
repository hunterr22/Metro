import RestAPI from '../rest';


const initial = [
    { id: 1, event_id: 1, customer_id: 1, registration_date: '2019-01-01', notes: 'looking forward to the event' },
    { id: 2, event_id: 1, customer_id: 2, registration_date: '2019-01-05', notes: 'is parking available?' }];

const registrations = (state = initial, action, data) => {
    switch (action.type) {

        case 'ADD_REGISTRATION': {
            console.log("in reducer registration.ADD_REGISTRATION");
            let otherregistrations = state.filter(
                registration => {
                    if (registration.id === action.registration.id ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );
            let newstate = [...otherregistrations, Object.assign({}, action.registration)]
            console.log("in reducer registration.ADD_REGISTRATION, newstate: " + JSON.stringify(newstate));
            return newstate;
        }

        case 'DELETE_REGISTRATION': {
            console.log("in reducer registrations.DELETE_REGISTRATION");
            let otherregistrations = state.filter(
                (registration) => {
                    if (registration.id === action.registration.id ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );
            let newstate = [...otherregistrations]
            console.log("in reducer registrations.DELETE_REGISTRATION, newstate: " + JSON.stringify(newstate));
            return newstate;
        }

        case 'GET_REGISTRATIONS': {
            console.log("in reducer registrations.GET_REGISTRATIONS", state);
            new RestAPI().getRegistrations(action.dispatch);
            return state;
        }

        case 'APPLY_REGISTRATIONS_UPDATE': {
            console.log("in reducer registrations.APPLY_REGISTRATIONS_UPDATE", action.registrations);
            let newstate = [...action.registrations];
            return newstate;
        }

        default:
            console.log("in reducer registration.default");
            return state
    }
}

export default registrations