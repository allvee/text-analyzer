import { analyzeTextFromFile } from '../services/textService.js';

export const analyzeTextSummary = (req, res) => {
    const filePath = './input/sample.txt';
    const analysisResult = analyzeTextFromFile(filePath);
    res.json(analysisResult);
};

export const getWordCount = (req, res) => {
    const filePath = './input/sample.txt';
    const analysisResult = analyzeTextFromFile(filePath);
    if (analysisResult) {
        res.json({ wordCount: analysisResult.wordCount });
    } else {
        res.status(500).json({ error: 'Failed to analyze text' });
    }
};

export const getCharacterCount = (req, res) => {
    const filePath = './input/sample.txt';
    const analysisResult = analyzeTextFromFile(filePath);
    if (analysisResult) {
        res.json({ characterCount: analysisResult.characterCount });
    } else {
        res.status(500).json({ error: 'Failed to analyze text' });
    }
};

export const getSentenceCount = (req, res) => {
    const filePath = './input/sample.txt';
    const analysisResult = analyzeTextFromFile(filePath);
    if (analysisResult) {
        res.json({ sentenceCount: analysisResult.sentenceCount });
    } else {
        res.status(500).json({ error: 'Failed to analyze text' });
    }
};

export const getParagraphCount = (req, res) => {
    const filePath = './input/sample.txt';
    const analysisResult = analyzeTextFromFile(filePath);
    if (analysisResult) {
        res.json({ paragraphCount: analysisResult.paragraphCount });
    } else {
        res.status(500).json({ error: 'Failed to analyze text' });
    }
};

export const getLongestWordsInParagraphs = (req, res) => {
    const filePath = './input/sample.txt';
    const analysisResult = analyzeTextFromFile(filePath);
    if (analysisResult) {
        res.json({ longestWordsInParagraphs: analysisResult.longestWordsInParagraphs });
    } else {
        res.status(500).json({ error: 'Failed to analyze text' });
    }
};
