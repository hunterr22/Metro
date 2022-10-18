import RestAPI from '../rest';
let initial = {username:"", password:"", mode: "login", loginstate: "initial" };
const savedState = sessionStorage.getItem('loginState');
if(savedState != null){
    initial = Object.assign({}, initial, JSON.parse(savedState));
}


const appState = (state = initial, action, data) => {
    console.log("in reducer login");

    switch (action.type) {

    case 'SET_REGISTRATION_MODE':{
        let mode = {"mode":'register'};
        let fields = {"username":"", "email": "", "password": ""};
        let new_state = Object.assign({}, state, mode, fields);
        return new_state;
    }

    case 'REGISTER_USER': {
        console.log( "login.REGISTER_USER: ");
        new RestAPI().registerUser(action.dispatch, action.username, action.password, action.email);
        let mode = {"mode":'login'};
        let new_state = Object.assign({}, state, mode);
        return new_state;    
    }

    case 'LOGIN_TO_APP': {
        let newState = {username: action.username, password:action.password, loginstate: action.loginstate, mode: 'login' };
        console.log("in LOGIN_TO_APP");
        console.log( "login.LOGIN_TO_APP: " + JSON.stringify(newState));
        new RestAPI().getJWTToken(action.dispatch, action.username, action.password);
        sessionStorage.setItem('loginState', JSON.stringify(newState));
        return  Object.assign({}, newState);
    } 
    case 'GET_JWT_TOKEN':{
        new RestAPI().getJWTToken(action.dispatch, action.username, action.password);
        break;
    }

    case 'LOG_OUT': {
        let newState = {username: 'none', password:'', loginstate: 'logged-out', mode: 'login' };
        console.log("in LOG_OUT");
        console.log( "login.LOG_OUT: " + JSON.stringify(newState));
        window['token'] = null;
        return  Object.assign({}, newState);       
    }

    case 'LOGIN_SUCCESS': {
        // update state with token and login status
        let loginstate = 'logged-in';
        let token = action.token;
        const obj = Object.assign({}, state, { loginstate, "token":token });
        window['token'] = token;
        return obj;        
    }
    case 'LOGIN_FAILED': {
        // update state with token and login status
        alert("login failed!");
        let loginstate = 'login-failed';
        let token = "";
        let mode = "login";
        const obj = Object.assign({}, state, { loginstate, token, mode });
        return obj;       
    }

    case 'UPDATE_LOGIN_FORM_OBJECT': {
        console.log("in reducer login.UPDATE_LOGIN_FORM_OBJECT");
        let field = {};
        field[action.field_name] = action.field_value;
        const obj = Object.assign({}, state, field);
        console.log( "login.UPDATE_LOGIN_FORM_OBJECT: " + JSON.stringify(obj));
        return obj;
      }
    default:
        return state
    }
}

export default appState