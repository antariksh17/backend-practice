import express from 'express';
import authentication from './authentication';

const router = express.Router();
console.log("inside router")
export default (): express.Router => {
    
    authentication(router);
    return router;
}