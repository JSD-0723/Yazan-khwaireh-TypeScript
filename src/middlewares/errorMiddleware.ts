import {Request , Response } from 'express';



const errorMiddleware = (err: any, req: Request, res: Response, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};




export default errorMiddleware