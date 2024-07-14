import { Router } from 'express';
import { authController } from './auth.controller';

const router = Router();
router.post('/login-user', authController.loginUserController);
export default router;
