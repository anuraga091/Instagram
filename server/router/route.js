import express from 'express';
import { userReport } from '../controller/report_controller.js';

const router = express.Router();

router.post('/report',userReport);



export default router;