/* eslint-disable no-undef */
import request from 'supertest';
import app from '../../server.js';

beforeAll(async () => {
    await new Promise((resolve) => {
        app.on('listening', () => {
            console.log('Server is running');
            resolve();
        });
    });
});

afterAll(async () => {
    await new Promise((resolve) => {
        app.close(resolve);
    });
});

describe('Text Routes', () => {
    describe('GET /api/text/word-count', () => {
        test('should return word count', async () => {
            const res = await request(app).get('/api/text/word-count');
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('wordCount');
            expect(typeof res.body.wordCount).toBe('number');
        });
    });

    describe('GET /api/text/character-count', () => {
        test('should return character count', async () => {
            const res = await request(app).get('/api/text/character-count');
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('characterCount');
            expect(typeof res.body.characterCount).toBe('number');
        });
    });

    describe('GET /api/text/sentence-count', () => {
        test('should return sentence count', async () => {
            const res = await request(app).get('/api/text/sentence-count');
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('sentenceCount');
            expect(typeof res.body.sentenceCount).toBe('number');
        });
    });

    describe('GET /api/text/paragraph-count', () => {
        test('should return paragraph count', async () => {
            const res = await request(app).get('/api/text/paragraph-count');
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('paragraphCount');
            expect(typeof res.body.paragraphCount).toBe('number');
        });
    });

    describe('GET /api/text/longest-words-in-paragraphs', () => {
        test('should return longest words in paragraphs', async () => {
            const res = await request(app).get('/api/text/longest-words-in-paragraphs');
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty('longestWordsInParagraphs');
            expect(Array.isArray(res.body.longestWordsInParagraphs)).toBe(true);
        });
    });
});
