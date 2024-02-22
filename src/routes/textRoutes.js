import express from 'express';

import {
    analyzeTextSummary,
    getWordCount,
    getCharacterCount,
    getSentenceCount,
    getParagraphCount,
    getLongestWordsInParagraphs
} from '../controllers/textController.js';

const router = express.Router();

router.get('/analyze', analyzeTextSummary);

router.get('/word-count', getWordCount);
router.get('/character-count', getCharacterCount);
router.get('/sentence-count', getSentenceCount);
router.get('/paragraph-count', getParagraphCount);
router.get('/longest-words-in-paragraphs', getLongestWordsInParagraphs);

export default router;
