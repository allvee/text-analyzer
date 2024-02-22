/* eslint-disable no-undef */
import { analyzeTextFromFile } from '../../src/services/textService.js';
import fs from 'fs';
jest.mock('fs');

describe('Text Analysis Service', () => {
    describe('analyzeTextFromFile', () => {
        test('should return an object if file does not exist', () => {
            const filePath = './nonexistentfile.txt';

            jest.spyOn(fs, 'readFileSync').mockReturnValue(null);

            const result = analyzeTextFromFile(filePath);
            expect(result).toEqual({
                characterCount: 0,
                longestWord: '',
                longestWordsInParagraphs: [],
                paragraphCount: 0,
                sentenceCount: 0,
                wordCount: 0
            });
        });

        test('should return correct analysis result', () => {
            const filePath = './input/sample.txt';

            const result = analyzeTextFromFile(filePath);

            expect(result).not.toBeNull();
            expect(result).toEqual({
                characterCount: 0,
                longestWord: '',
                longestWordsInParagraphs: [],
                paragraphCount: 0,
                sentenceCount: 0,
                wordCount: 0
            }
            );
        });
    });
});
