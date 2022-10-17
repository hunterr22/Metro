import React from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import RegistrationList from './components/RegistrationList';
import RegistrationForm from './components/RegistrationForm';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import './Main.css';

function CustomersModule() {
  return (
    <div>
      <CustomerList></CustomerList>
      <CustomerForm></CustomerForm>
    </div>
  );
}

function EventsModule() {
  return (
    <div>
      <EventList></EventList>
      <EventForm></EventForm>
    </div>
  );
}

function RegistrationsModule() {
  return (
    <div>
      <RegistrationList></RegistrationList>
      <RegistrationForm></RegistrationForm>
    </div>
  );
}


function App() {
  return (
    <Router>
    <div className="App">
        <h1>Registration App</h1>
        <nav>
        <Link type='button' className='button btn-outline-primary btn-lg' to="/customers">Customers</Link>
        <Link type='button' className='button btn-outline-primary btn-lg'  to="/events">Events</Link>
        <Link type='button' className='button btn-outline-primary btn-lg' to="/registrations">Registrations</Link>
        </nav>
        <Route exact path="/" render={() => (<Redirect to="/customers"/>)}/>
        <Route path="/customers" component={CustomersModule} />
        <Route path="/events" component={EventsModule} />
        <Route path="/registrations" component={RegistrationsModule} />
    </div>
    </Router>
  );
}

export default Main;
