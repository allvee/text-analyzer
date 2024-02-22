// src/controllers/textController.js
import { analyzeTextFromFile } from '../services/textService.js';

export const analyzeTextController = (req, res) => {
    const filePath = './input/sample.txt';
    const analysisResult = analyzeTextFromFile(filePath);
    res.json(analysisResult);
};
