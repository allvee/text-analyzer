// src/services/textService.js
import fs from 'fs';

export const analyzeTextFromFile = (filePath) => {
    try {
    // Read the text from the file
        const text = fs.readFileSync(filePath, 'utf8');

        // Call analyzeText function with the text
        return analyzeText(text);
    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
};

const analyzeText = (text) => {
    // Split the text into words
    const words = text.split(/\s+/);

    // Count the number of words
    const wordCount = words.length;

    // Count the number of characters
    const characterCount = text.replace(/\s+/g, '').length;

    // Count the number of sentences (assumes sentences end with '.', '!', or '?')
    const sentenceCount = text.split(/[.!?]+/).length - 1;

    // Count the number of paragraphs (assumes paragraphs are separated by double newline characters)
    const paragraphCount = text.split(/\n\s*\n/).length;

    // Find the longest word
    const longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, '');

    // Find the longest word in each paragraph
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
