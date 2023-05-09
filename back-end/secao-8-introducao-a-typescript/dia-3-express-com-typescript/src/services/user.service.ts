import * as userModel from '../models/user.model';

const httpErrGen = (status: number, message: string) => ({ status, message });

export async function getAll() {
  const users = await userModel.getAll();
  return users;
}

export async function getById(id: number) {
  const user = await userModel.getById(+id);
  return user;
}

export async function create(name: string, email: string, password: string) {
  if (await userModel.getByEmail(email)) {
    throw httpErrGen(400, 'User already registered');
  }
  const newUser = await userModel.create(name, email, password);
  return newUser;
}
