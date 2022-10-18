/* Login Actions */
export const updateLoginFormObject = (field_name, field_value) => {
  return {
  type: 'UPDATE_LOGIN_FORM_OBJECT',
  field_name:field_name,
  field_value:field_value
  }
}

export const setRegistrationMode = () => {
  return {
    type: 'SET_REGISTRATION_MODE'
  }
}

export const registerUser = (dispatch, username, password, email) => {
  return {
    type: 'REGISTER_USER',
    dispatch,
    username,
    password,
    email
  }
}

export const loginToApp = (dispatch, username, password, loginstate) => {
  return {
  type: 'LOGIN_TO_APP',
  dispatch, username, password, loginstate
  }
} 

export const logOut = (dispatch) => {
  return {
  type: 'LOG_OUT',
  dispatch
  }
} 

export const getJWTToken = (dispatch, username, password) => {
  return {
  type: 'GET_JWT_TOKEN',
  dispatch, 
  username, 
  password
  }
}


export const loginSucceeded = (token) => {
  return {
  type: 'LOGIN_SUCCESS',
  token
  }
}


export const loginFailed = () => {
  return {
  type: 'LOGIN_FAILED'
  }
}

/* REGISTRATION ACTIONS */
export const applyRegistrationsUpdate = (registrations) => {
  return {
    type: 'APPLY_REGISTRATIONS_UPDATE',
    registrations
  }
}

export const selectRegistration = (registration) => {
  return {
  type: 'SELECT_REGISTRATION',
  registration
  }
} 

export const addRegistration = (registration) => {
  return {
  type: 'ADD_REGISTRATION',
  registration
  }
}

export const getRegistrations = (dispatch) => {
  return {
  type: 'GET_REGISTRATIONS',
  dispatch
  }
}

export const deleteRegistration = (registration) => {
  return {
  type: 'DELETE_REGISTRATION',
  registration
  }
}

export const addRegistrationInit = (registration) => {
  return {
    type: 'ADD_REGISTRATION_INIT',
    registration
  }
}

export const updateRegistrationFormObject = (field_name, field_value) => {
  return {
  type: 'UPDATE_REGISTRATION_FORM_OBJECT',
  field_name:field_name,
  field_value:field_value
  }
}

// accepted values for usage: 'view', 'add', 'update'
export const updateRegistrationFormUsage = (usage, registration) => {
  return {
    type: 'UPDATE_REGISTRATION_FORM_USAGE',
    usage: usage,
    registration: registration
  }
}


/* EVENT ACTIONS */
export const applyEventsUpdate = (events) => {
  return {
    type: 'APPLY_EVENTS_UPDATE',
    events
  }
}

export const selectEvent = (event) => {
  return {
  type: 'SELECT_EVENT',
  event
  }
} 

export const addEvent = (event) => {
  return {
  type: 'ADD_EVENT',
  event
  }
}

export const getEvents = (dispatch) => {
  return {
  type: 'GET_EVENTS',
  dispatch
  }
}

export const deleteEvent = (event) => {
  return {
  type: 'DELETE_EVENT',
  event
  }
}

export const addEventInit = (event) => {
  return {
    type: 'ADD_EVENT_INIT',
    event
  }
}

export const updateEventFormObject = (field_name, field_value) => {
  return {
  type: 'UPDATE_EVENT_FORM_OBJECT',
  field_name:field_name,
  field_value:field_value
  }
}

// accepted values for usage: 'view', 'add', 'update'
export const updateEventFormUsage = (usage, event) => {
  return {
    type: 'UPDATE_EVENT_FORM_USAGE',
    usage: usage,
    event: event
  }
}


/* CUSTOMER ACTIONS */
export const applyCustomersUpdate = (customers) => {
  return {
    type: 'APPLY_CUSTOMERS_UPDATE',
    customers
  }
}

export const selectCustomer = (customer) => {
  return {
  type: 'SELECT_CUSTOMER',
  customer
  }
} 

export const addCustomer = (customer) => {
  return {
  type: 'ADD_CUSTOMER',
  customer
  }
}

export const getCustomers = (dispatch) => {
  return {
  type: 'GET_CUSTOMERS',
  dispatch
  }
}

export const deleteCustomer = (customer) => {
  return {
  type: 'DELETE_CUSTOMER',
  customer
  }
}

export const addCustomerInit = (customer) => {
  return {
    type: 'ADD_CUSTOMER_INIT',
    customer
  }
}

export const updateCustomerFormObject = (field_name, field_value) => {
  return {
  type: 'UPDATE_CUSTOMER_FORM_OBJECT',
  field_name:field_name,
  field_value:field_value
  }
}

// accepted values for usage: 'view', 'add', 'update'
export const updateCustomerFormUsage = (usage, customer) => {
  return {
    type: 'UPDATE_CUSTOMER_FORM_USAGE',
    usage: usage,
    customer: customer
  }
}