import { Request, Response } from 'express';
import temp from './../assets/temp.json'

const messageController = (request: Request, response: Response): void => {
    response.json(temp);
};

export default messageController;