import RestAPI from '../rest';

const initial = [
    { id: 100, code: 'CNF001', title: 'All-Java Conference', description: 'Lectures and exhibits covering all Java topics' },
    { id: 101, code: 'CNC001', title: 'Rock Concert', description: 'Full blown rock concert' }];

const events = (state = initial, action, data) => {
    switch (action.type) {

        case 'ADD_EVENT': {
            console.log("in reducer event.ADD_EVENT");
            let otherevents = state.filter(
                event => {
                    if (event.id === action.event.id ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );
            let newstate = [...otherevents, Object.assign({}, action.event)]
            console.log("in reducer event.ADD_EVENT, newstate: " + JSON.stringify(newstate));
            return newstate;
        }

        case 'DELETE_EVENT': {
            console.log("in reducer events.DELETE_EVENT");
            let otherevents = state.filter(
                (event) => {
                    if (event.id === action.event.id ) {
                        return false;
                    } else {
                        return true;
                    }
                }
            );
            let newstate = [...otherevents]
            console.log("in reducer events.DELETE_EVENT, newstate: " + JSON.stringify(newstate));
            return newstate;
        }

        case 'APPLY_EVENTS_UPDATE': {
            console.log("in reducer events.APPLY_EVENTS_UPDATE", action.events);
            let newstate = [...action.events];
            return newstate;
        }
        case 'GET_EVENTS': {
            console.log("in reducer events.GET_EVENTS", state);
            new RestAPI().getEvents(action.dispatch);
            return state;
        }

        default:
            console.log("in reducer event.default");
            return state
    }
}

export default events