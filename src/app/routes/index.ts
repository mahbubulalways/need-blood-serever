import { Router } from 'express';
import userRoutes from '../modules/users/user.route';
import authRoutes from '../modules/auth/auth.route';
import donorsRoutes from '../modules/donner/donner.route';
const router = Router();
const applicationRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/donors',
    route: donorsRoutes,
  },
];

applicationRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
