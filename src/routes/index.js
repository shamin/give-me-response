import { Router } from 'express';
import sendResponse from '../controllers/sendResponse';

const router = Router();

router.get('/', (req, res) => res.json({ status: 'working' }));
router.get('/response', sendResponse);

export default router;
