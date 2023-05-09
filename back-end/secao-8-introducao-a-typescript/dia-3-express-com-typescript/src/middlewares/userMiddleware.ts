import { NextFunction, Request, Response } from 'express';
import { User } from '../types/User';

const httpErrGen = (status: number, message: string) => ({ status, message });

export default function validation(req: Request, _res: Response, next: NextFunction) {
  const { name, email, password } = req.body as User;

  if (!name || !email || !password) {
    throw httpErrGen(400, 'The fields "name", "email" and "password" are required');
  }
  if (password.length < 6 || password.length > 12) {
    throw httpErrGen(400, 'The field "password" must have between 6 and 12 characters');
  }
  if (name.length < 3) {
    throw httpErrGen(400, 'The field "name" must have at least 3 characters');
  }
  if (!/^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)) {
    throw httpErrGen(400, 'The field "email" must have a valid email format');
  }

  next();
}
