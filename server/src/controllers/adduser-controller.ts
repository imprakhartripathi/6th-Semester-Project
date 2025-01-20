import { Request, Response } from 'express';
import user from '../database/tempdata';

const adduserController = (request: Request, response: Response): void => {
  const { username, password } = request.body;

  let newUser = {
    userName: username,
    userPass: password
  }

  user.push(newUser);
  console.log(user);

  response.redirect("./../adduser/adduser.html")
};

export default adduserController;
