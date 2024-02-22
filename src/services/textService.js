import fs from 'fs';

export const analyzeTextFromFile = (filePath) => {
    try {
        const text = fs.readFileSync(filePath, 'utf8');

        return analyzeText(text);
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
};

const analyzeText = (text) => {
    const words = text.split(/\s+/);

    const wordCount = words.length;

    const characterCount = text.replace(/\s+/g, '').length;

    // assumes sentences end with '.', '!', or '?'
    const sentenceCount = text.split(/[.!?]+/).length - 1;

    // assumes paragraphs are separated by double newline characters
    const paragraphCount = text.split(/\n\s*\n/).length;

    const longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, '');

    const longestWordsInParagraphs = text.split(/\n\s*\n/).map(paragraph => {
        const wordsInParagraph = paragraph.split(/\s+/);
        return wordsInParagraph.reduce((longest, current) => current.length > longest.length ? current : longest, '');
    });

    return {
        wordCount,
        characterCount,
        sentenceCount,
        paragraphCount,
        longestWord,
        longestWordsInParagraphs
    };
};
