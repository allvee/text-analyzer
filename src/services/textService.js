import fs from 'fs';

export const analyzeTextFromFile = (filePath) => {
    try {
        const text = fs.readFileSync(filePath, 'utf8');

        return analyzeText(text);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Error reading file:', err);
            return null;
        }
        throw err;
    }
};

const analyzeText = (text) => {
    let words = 0;
    let wordCount = 0;
    let characterCount = 0;
    let sentenceCount = 0;
    let paragraphCount = 0;
    let longestWord = '';
    let longestWordsInParagraphs = []

    if (text && text.length > 0) {
        words = text.split(/\s+/);

        wordCount = words.length;

        characterCount = text.replace(/\s+/g, '').length;

        // assumes sentences end with '.', '!', or '?'
        sentenceCount = text.split(/[.!?]+/).length - 1;

        // assumes paragraphs are separated by double newline characters
        paragraphCount = text.split(/\n\s*\n/).length;

        longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, '');

        longestWordsInParagraphs = text.split(/\n\s*\n/).map(paragraph => {
            const wordsInParagraph = paragraph.split(/\s+/);
            return wordsInParagraph.reduce((longest, current) => current.length > longest.length ? current : longest, '');
        });
    }

    return {
        wordCount,
        characterCount,
        sentenceCount,
        paragraphCount,
        longestWord,
        longestWordsInParagraphs
    };
};
