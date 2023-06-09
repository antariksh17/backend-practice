import {Express, Request, Response} from 'express';
import { createUserHandler } from './controllers/user-controllers';
import validate from './middlewares/validateRequest';
import { createUserSchema } from './schema/user-schema';


function routes(app: Express){

    app.get('/healthcheck', (req:Request,res:Response)=> res.status(200))

    app.post('/api/users',validate(createUserSchema) ,createUserHandler)

}

export default routes;