
import config from '../config';
import axios from 'axios';

export const authenticationService = {
    login,
    signup,
};

function login(username, password) {

    /*const requestOptions = {
        headers: { Authorization: "Basic " + btoa(username + ":" + password)}
    };*/
    //return {name:"Fidel Mamani", email:"fid.mamani@gmail.com", country:"Peru", "language":"Pe"};
    return axios.post(`${config.awsApiUrl}/login/`, {username, password },{'Content-Type': 'application/json' }).then(user => {
        return user.data;
    }).catch(error => {
        if( "response" in error ){
            if( error.response !== undefined ){
                if('status' in error.response ) { alert(error.response.data.message);}
                else {console.log( error.response );}
            }else {
                console.log( error );
            }
        }else{
            console.log( error );
        }
    });
}

function signup( name, email, country, language, password ) {

    return axios.post(`${config.awsApiUrl}/user/`, { name, email, country, language, password} , {'Content-Type': 'application/json' } ).then(user => {
        return user.data;
    }).catch(error => {
        console.log('error');
        if( "response" in error ){
            if( error.response !== undefined ){
                if('status' in error.response ) { alert(error.response.data.message);}
                else {console.log( error.response );}
            }else {
                console.log( error );
            }
        }else{
            console.log( error );
        }
    });
}