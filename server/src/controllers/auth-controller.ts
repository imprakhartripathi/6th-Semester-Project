import { Request, Response } from 'express';
import user from '../database/tempdata';

const authController = (request: Request, response: Response): void => {
  const { username, password } = request.body;

  if (username === 'imprakhartripathi' && password === 'imprakhar') {
    response.send("true");
  } else {
    response.send("false");
  }

  let newUser = {
    userName: username,
    userPass: password
  }

  user.push(newUser);
  console.log(user);
};

export default authController;
