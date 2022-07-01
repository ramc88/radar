import express from 'express';
import attack from '../api/attack/routes/routes.js';

const router = express.Router();

router.use('/radar', attack);

export default router;