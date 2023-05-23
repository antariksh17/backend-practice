import express from 'express';


import {register} from '../controllers/authentication';
console.log("inside auth")
export default (router: express.Router) => {
    router.post('auth/register', register);
}