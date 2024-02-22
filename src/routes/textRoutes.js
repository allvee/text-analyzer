// src/routes/textRoutes.js
import express from 'express';
import { analyzeTextController } from '../controllers/textController.js';

const router = express.Router();

router.post('/analyze', analyzeTextController);

export default router;
