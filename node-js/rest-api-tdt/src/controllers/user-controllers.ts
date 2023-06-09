import { omit } from 'lodash';
import { createUserInput } from '../schema/user-schema';
import { createUser } from '../service/user-service';
import  logger from '../utils/logger';
import { Request, Response } from "express";

export  async function createUserHandler(req: Request<{},{}, createUserInput["body"] >, res: Response){
    try{
        const user = await createUser(req.body)
        return res.send(omit(user.toJSON(), "password"));
    }catch(error: any){
        logger.error(error);
        return res.status(409).send(error.message);
    }
} 