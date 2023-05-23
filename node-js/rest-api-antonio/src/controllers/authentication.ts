import { authentication } from './../helpers/index';
import express from 'express';

import { createUser, getUserByEmail } from '../db/users';
import { random } from '../helpers';
console.log("inside ctrl");

export const register = async(req: express.Request, res: express.Response )=> {
    console.log(req.body);
    try{
        const {email,password, username }= req.body;

        if(!email|| !password || !username) return res.sendStatus(400);

        const existingUser = await getUserByEmail(email);
        
        if(existingUser){
            return res.sendStatus(400)
        }

        const salt = random();
        const user= await createUser({
            email,
            username,
            authentication: {
                salt,
                password: authentication(salt, password),

            }
        });

        return res.status(200).json(user).end();
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}