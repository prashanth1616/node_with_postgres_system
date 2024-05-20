import express from 'express';
import { streamData } from '../controllers/streamController';

const router = express.Router();

router.get('/getData', streamData);

export default router;