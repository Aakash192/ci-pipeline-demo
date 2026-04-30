const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
    // Test that the root URL returns the welcome message
    test('GET / return welcome message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Welcome to the CI/CD Demo API');
    });

    // Test that the health endpoint returns a JSON status
    test('GET /health returns healthy status', async() => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({status: 'ok'});
    });
});