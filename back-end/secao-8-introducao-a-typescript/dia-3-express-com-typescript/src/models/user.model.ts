import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from '../database/connection';
import { User } from '../types/User';

export async function getAll(): Promise<User[]> {
  const [users] = await connection.execute<RowDataPacket[]>('SELECT * FROM Users');
  return users as User[];
}

export async function getById(id: number): Promise<User | undefined> {
  const [[user]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Users WHERE id = ?',
    [id],
  );
  return user as User | undefined;
}

export async function getByEmail(email: string): Promise<User | undefined> {
  const [[user]] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Users WHERE email = ?',
    [email],
  );
  console.log(user);
  return user as User | undefined;
}

export async function create(
  name: string,
  email: string,
  password: string,
): Promise<User> {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
    [name, email, password],
  );
  const newUser: User = { id, name, email, password };
  return newUser;
}
