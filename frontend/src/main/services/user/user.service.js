import config from '../config';
import axios from 'axios';

import { handleResponse } from '../utils/handle.response';
import { authHeader } from '../utils/auth.headers';

export const userService = {
    getAll,
    getById
};

function getAllUsers() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    axios.get('/user?ID=12345')
         .then(function (response) {
         // handle success
         console.log(response);
         return response;
         })
         .catch(function (error) {
         // handle error
         console.log(error);
         });
         //.then(function () {
         // always executed
         //});
    return fetch(`${config.awsApiUrl}/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.awsApiUrl}/users/${id}`, requestOptions).then(handleResponse);
}