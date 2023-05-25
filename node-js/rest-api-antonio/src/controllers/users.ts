import express from 'express';

import {deleteuserById, getUserById, getUsers} from '../db/users';


export const getAllUsers  = async(req: express.Request, res: express.Response )=> {
    try{

        const users= await getUsers();

        return res.status(200).json(users);

    }catch(error){
        console.log(error);

        res.sendStatus(400);
    }
}


export const deleteUser  = async(req: express.Request, res: express.Response )=> {
    try{

        const {id}= req.params;
        const deletedUser= await deleteuserById(id);


        return res.json(deletedUser);

    }catch(error){
        console.log(error);

        res.sendStatus(400);
    }
}


export const updateUser  = async(req: express.Request, res: express.Response )=> {
    try{

        const {id}= req.params;
        const {username}= req.params;

        if(!username){
            return res.sendStatus(403);
        }
        const existingUser= await getUserById(id);

        existingUser.username= username;
        await  existingUser.save();
        return res.status(200).json(existingUser).end();


    }catch(error){
        console.log(error);

        res.sendStatus(400);
    }
}
