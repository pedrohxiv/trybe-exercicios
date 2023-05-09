import { Router } from 'express';

import * as userController from '../controllers/user.controller';
import userMiddleware from '../middlewares/userMiddleware';

const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userMiddleware, userController.create);

export default router;
