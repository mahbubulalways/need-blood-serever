import { Router } from 'express';
import { donorsController } from './donner.controller';

const router = Router();

router.post('/create-donor', donorsController.createDonorController);
router.get('/all-donors', donorsController.getAllDonorsController);
router.get('/pending-donors/', donorsController.getPendingDonorController);
router.patch(
  '/update-donor-status/:id',
  donorsController.updateDonorStatusController,
);
router.get('/single-donor/:id', donorsController.getSingleDonorController);
export default router;
