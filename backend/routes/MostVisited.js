import express from 'express';
import { getMostVisitedTours } from '../controllers/tourController.js';

const router = express.Router();

router.get('/', getMostVisitedTours);

export default router;
