import React from 'react';
import { logOut } from '../actions';
import { connect } from 'react-redux'

const Footer = ({login, onLogOutClick}) =>{
    let label = "User: " + login.username;
    return (
    <div className='card bg-light footer'>
      <span style={{float:'right'}} >{label}</span>&nbsp;
      <input style={{width:'fit-content'}} className='btn btn-primary' type="button" value='Log Out' onClick={onLogOutClick} /> 
    </div>  
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
        console.log("in footer component");
      },
      onLogOutClick: (e) => {
          dispatch(logOut());
      }            
    }
  }
  
  const VisibleFooter = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Footer)
  
  export default VisibleFooter