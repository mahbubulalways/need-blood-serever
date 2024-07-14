import { Router } from 'express';
import { userController } from './users.controller';

const router = Router();
router.post('/create-user', userController.createUserController);
router.get('/all-users', userController.getAllUsersController);
router.get('/single-user/:id', userController.getSingleUsersController);
router.delete(
  '/delete-temporary/:id',
  userController.temporaryDeleteUsersController,
);
router.delete(
  '/delete-permanent/:id',
  userController.permanentDeleteUsersController,
);
export default router;
