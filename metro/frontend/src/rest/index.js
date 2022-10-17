import { applyCustomersUpdate, applyEventsUpdate, 
  applyRegistrationsUpdate, loginSucceeded, loginFailed } from '../actions'
 
class RestAPI {

  myHeaders = new Headers(
    { "Content-Type": "application/json",
      "Authorization": "Bearer " + window.token
    });

  /* LOGIN REQUESTS */
  registerUser = (dispatch, username, password, email) => {
    let url = "/api/register";
    let customer = {
      name: username,
      email: email,
      password: password
    }
    let body = JSON.stringify(customer);
    let myHeaders = new Headers({ "Content-Type": "application/json" });
		var myInit = { 
		  method: 'POST',
		  body: body, 
		  headers: myHeaders, 
		  mode: 'cors' 
		};
		let promise = fetch(url, myInit);
		promise.then((response) => {
		  return response.text();
		}).then(function (text) {
		  console.log('register request completed: ', text);
		});
  }

  getJWTToken = (dispatch, username, password) => {
    let customer = {"name": username, password};
    this.callTokenService(customer).then(
      (response) => {
        if(response !== ""){
          let robj = JSON.parse(response);
          let action = loginSucceeded(robj.token);
          dispatch(action);
        }else{
          let action = loginFailed();
          dispatch(action);          
        }
      },
      (error) => {
        let action = loginFailed();
        dispatch(action);
      });

  }

  callTokenService = (customer) => {
    let url = "/api/token"
    let myHeaders = new Headers({ "Content-Type": "application/json" });
    let body = JSON.stringify(customer);
    console.log("BODY.CUSTOMER: " + JSON.stringify(customer));
    var myInit = {
      method: 'POST',
      body: body,
      headers: myHeaders,
      mode: 'cors'
    };
    let promise = fetch(url, myInit);
    let promise2 = promise.then((response) => {
      let result = response.text();
      if (result === undefined) {
        console.log("response undefined");
        result = "error: undefined";
      }
      return result;
    },
      (error) => {
        alert(error);
      }
    )
    return promise2;
  }


  /* REGISTRATION REQUESTS */
  getRegistrations = ( dispatch ) => {
    let myHeaders = new Headers(
      { "Content-Type": "application/json",
        "Authorization": "Bearer " + window.token
      });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("/api/registrations", myInit);
    promise.then((response) => {
      return response.text();
    }).then(function (text) {
      console.log('Request successful: ', text);
      let registrations = JSON.parse(text);
      dispatch(applyRegistrationsUpdate(registrations));
    });
  }

	putRegistration = ( dispatch, registration ) => {
		let url = "/api/registrations/" + registration.id;
    let body = JSON.stringify(registration);
    let myHeaders = new Headers(
      { "Content-Type": "application/json",
        "Authorization": "Bearer " + window.token
      });
		var myInit = { 
		  method: 'PUT',
		  body: body, 
		  headers: myHeaders, 
		  mode: 'cors' 
		};
		let getregistrations = this.getRegistrations;
		let promise = fetch(url, myInit);
		promise.then((response) => {
		  return response.text();
		}).then(function (text) {
		  console.log('put request completed: ', text);
		  getregistrations(dispatch);
		});
	}

  deleteRegistration = ( dispatch, registration ) => {
    let url = "/api/registrations/" + registration.id;
    let myHeaders = new Headers(
      { "Content-Type": "application/json",
        "Authorization": "Bearer " + window.token
      });
    var myInit = { method: 'DELETE', headers: myHeaders, mode: 'cors' };
    let getregistrations = this.getRegistrations;
    let promise = fetch(url, myInit);
    promise.then((response) => {
      return response.text();
    }).then(function (text) {
      console.log('delete request completed: ', text);
      getregistrations(dispatch);
    });
  }

  /* EVENT REQUESTS */  
  getEvents = ( dispatch ) => {
    let myHeaders = new Headers(
      { "Content-Type": "application/json",
        "Authorization": "Bearer " + window.token
      });
    var myInit = { method: 'GET', headers: myHeaders, mode: 'cors' };
    let promise = fetch("/api/events", myInit);
    promise.then((response) => {
      return response.text();
    }).then(function (text) {
      console.log('Request successful: ', text);
      let events = JSON.parse(text);
      dispatch(applyEventsUpdate(events));
    });
  }

	putEvent = ( dispatch, event ) => {
		let url = "/api/events/" + event.id;
    let body = JSON.stringify(event);
    let myHeaders = new Headers(
      { "Content-Type": "application/json",
        "Authorization": "Bearer " + window.token
      });
		var myInit = { 
      method: 'PUT',
      headers: myHeaders,
		  body: body, 
		  mode: 'cors' 
    };
    console.log("putEVENT.myInit: " + JSON.stringify(myInit));
		let getevents = this.getEvents;
		let promise = fetch(url, myInit);
		promise.then((response) => {
		  return response.text();
		}).then(function (text) {
		  console.log('put request completed: ', text);
		  getevents(dispatch);
		});
	}

  deleteEvent = ( dispatch, event ) =>  {
    let url = "/api/events/" + event.id;
    let myHeaders = new Headers(
      { "Content-Type": "application/json",
        "Authorization": "Bearer " + window.token
      });
    var myInit = { method: 'DELETE', headers: myHeaders, mode: 'cors' };
    let getevents = this.getEvents;
    let promise = fetch(url, myInit);
    promise.then((response) => {
      return response.text();
    }).then(function (text) {
      console.log('delete request completed: ', text);
      getevents(dispatch);
    });
  }

  /* CUSTOMER REQUESTS */
  getCustomers = ( dispatch) => {
    var myInit = { method: 'GET', headers: this.myHeaders, mode: 'cors' };
    let promise = fetch("/api/customers", myInit);
    promise.then((response) => {
      return response.text();
    }).then(function (text) {
      console.log('getCustomers Request successful: ', text);
      let customers = JSON.parse(text);
      dispatch(applyCustomersUpdate(customers));
    });
  }

  lookupCustomerByName = ( username ) => {
    let url = "/api/customers/byname";
    let body = username;

    var myInit = { 
      method: 'POST', 
      body: body,
      headers: this.myHeaders, 
      mode: 'cors'
    };
    let promise = fetch(url, myInit);
    let promise2 = promise.then(
      (response) => {
        console.log('lookupCustomerByName.promise2: ', JSON.stringify(response));
        return response.text();
      },
      (error) => {
        console.log('lookupCustomerByName.promise2.error: ', JSON.stringify(error));
        return error.text();
      }    
    );
    return promise2;
  }


	putCustomer = ( dispatch, customer ) => {
		let url = "/api/customers/" + customer.id;
		let body = JSON.stringify(customer);
		var myInit = { 
		  method: 'PUT',
		  body: body, 
		  headers: this.myHeaders, 
		  mode: 'cors' 
		};
		let getcustomers = this.getCustomers;
		let promise = fetch(url, myInit);
		promise.then((response) => {
		  return response.text();
		}).then(function (text) {
		  console.log('put request completed: ', text);
		  getcustomers(dispatch);
		});
	}

  deleteCustomer = ( dispatch, customer ) => {
    let url = "/api/customers/" + customer.id;
    var myInit = { method: 'DELETE', headers: this.myHeaders, mode: 'cors' };
    let getcustomers = this.getCustomers;
    let promise = fetch(url, myInit);
    promise.then((response) => {
      return response.text();
    }).then(function (text) {
      console.log('delete request completed: ', text);
      getcustomers(dispatch);
    });
  }	

}

export default RestAPI;