import express from 'express';

import userRouter from './routers/user.router';

import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta ${process.env.PORT}`),
);
