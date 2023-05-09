import { Request, Response } from 'express';

import * as userService from '../services/user.service';
import { User } from '../types/User';

export async function getAll(_req: Request, res: Response) {
  const users = await userService.getAll();

  res.status(200).json(users);
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;

  const user = await userService.getById(+id);

  res.status(200).json(user);
}

export async function create(req: Request, res: Response) {
  const { name, email, password } = req.body as User;

  const newUser = await userService.create(name, email, password);

  res.status(201).json(newUser);
}
