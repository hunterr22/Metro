import React from 'react';
import { connect } from 'react-redux'
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import EventList from './components/EventList';
import EventForm from './components/EventForm';
import Login from './components/Login';
import RegistrationList from './components/RegistrationList';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

import './App.css';

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
      <NavLinks></NavLinks>
      <EventList></EventList>
      <EventForm></EventForm>
      <Footer></Footer>      
    </div>
  );
}

function RegistrationsModule() {
  return (
    <div>
      <NavLinks></NavLinks>
      <RegistrationList></RegistrationList>
      <RegistrationForm></RegistrationForm>
      <Footer></Footer>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <NavLinks></NavLinks>
    </div>
  );
}


function NavLinks(){
  return (
    <nav>
    <Link type='button' className='button btn-primary btn-lg' to="/customers">Customers</Link>
    <Link type='button' className='button btn-primary btn-lg'  to="/events">Events</Link>
    <Link type='button' className='button btn-primary btn-lg' to="/registrations">Registrations</Link>
    </nav>
  );
}

function compare(a, b){
  // console.log("a :" + a);
  // console.log("b :" + b);
  return (a === b);
}

function Custom(props){

  if(  compare(props.login.loginstate, 'logged-in')){
    console.log("NOT loggedin");
    return ( 
      <Login></Login>
    );
  }else{
    console.log("YES loggedin");
    return (
      <div>
    <Route exact path="/" render={() => (<Redirect to="/customers"/>)}/>
    <Route path="/login" component={Login} />
    <Route path="/home" component={HomePage} />
    <Route path="/customers" component={CustomersModule} />
    <Route path="/events" component={EventsModule} />
    <Route path="/registrations" component={RegistrationsModule} />
    </div>
    )
    
  }

}


function App({login}) {
  return (
    <Router>
    <div className="App">
        <h1>Customer CRUD App</h1>
        <Custom login={login} />
    </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  console.log("state: " + JSON.stringify(state));
  return {
    login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    onInit: (e) => {
      console.log("in app component");
    }            
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default VisibleApp