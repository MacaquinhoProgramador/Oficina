import { Router } from "express";
import { store, index, update, destroy } from '../controllers/maintenanceController.js';

const router = Router();

router.post('/', store);
router.get('/', index);
router.put('/:id', update);
router.delete('/:id', destroy);

export default router;

// 670831339d45c7bae5ea7d55     67083771bd7dc45b55766fa3