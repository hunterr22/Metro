const initial = { 
  usage: 'none', 
  customer: { id: "", name: "", email: "" } ,
  event: { id: "-1", code: "", title: "", description: "" },
  registration: { id: "-1", event_id: "-1", customer_id: "-1", registration_date: -1, notes: "" }
};

const formState = (state = initial, action, data) => {

  switch (action.type) {
    case 'UPDATE_CUSTOMER_FORM_OBJECT': {
      let field = {};
      field[action.field_name] = action.field_value;
      let customer = Object.assign({}, state.customer, field);
      const obj = Object.assign({}, state, { customer });
      return obj;
    }

    case 'UPDATE_CUSTOMER_FORM_USAGE': {
      let usage = { usage: action.usage };
      let new_customer = { customer: { id: "-1", name: "", email: "" } };

      console.log("UPDATE_CUSTOMER_FORM_USAGE: (" + action.usage + ") action.customer: " + JSON.stringify(action.customer))

      if (action.usage === 'view' || action.usage === 'edit') {
        new_customer = { customer: Object.assign({}, action.customer) };
      } else {
        let id = Math.floor(1000 * (1 + Math.random(Date.now()))).toString();
        new_customer = { customer: { id: id, name: "", email: "" } };
      }

      return Object.assign({}, state, new_customer, usage);
    }

    case 'UPDATE_EVENT_FORM_OBJECT': {
      let field = {};
      field[action.field_name] = action.field_value;
      let event = Object.assign({}, state.event, field);
      const obj = Object.assign({}, state, { event });
      return obj;
    }

    case 'UPDATE_EVENT_FORM_USAGE': {
      let usage = { usage: action.usage };
      let new_event = { event: { id: -1, code: "", title: "", description: "" } };

      console.log("UPDATE_EVENT_FORM_USAGE: (" + action.usage + ") action.event: " + JSON.stringify(action.event))

      if (action.usage === 'view' || action.usage === 'edit') {
        new_event = { event: Object.assign({}, action.event) };
      } else {
        let id = Math.floor(1000 * (1 + Math.random(Date.now())));
        new_event = { event: { id: id, code: "", title: "", description: "" } };
      }

      return Object.assign({}, state, new_event, usage);
    }

    case 'UPDATE_REGISTRATION_FORM_OBJECT': {
      let field = {};
      field[action.field_name] = action.field_value;
      let registration = Object.assign({}, state.registration, field);
      const obj = Object.assign({}, state, { registration });
      return obj;
    }

    case 'UPDATE_REGISTRATION_FORM_USAGE': {
      let usage = { usage: action.usage };
      let new_registration = { registration: { id: -1, event_id: "-1", customer_id: "-1", registration_date: -1, notes: "" } };

      console.log("UPDATE_REGISTRATION_FORM_USAGE: (" + action.usage + ") action.registration: " + JSON.stringify(action.registration))

      if (action.usage === 'view' || action.usage === 'edit') {
        new_registration = { registration: Object.assign({}, action.registration) };
      } else {
        let id = Math.floor(1000 * (1 + Math.random(Date.now())));
        new_registration = { registration: { id: id, event_id: "-1", customer_id: "-1", registration_date: -1, notes: "" } };
      }

      return Object.assign({}, state, new_registration, usage);
    }
    
    default:
      return state
  }
}

export default formState