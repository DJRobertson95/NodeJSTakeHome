// Imports
const request = require('supertest');
const app = require('./index');

// Test Suites
describe('Test  root path', () => {
    // Test case for root path
    test('It should return status code 200 and a message.', async () => {
      const response = await request(app).get('/');

      // Expect
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Server is Running!');
    });
  });

// Test Suite
describe('GET /mining-pools', () => {
  it('should require authentication', async () => {
    const response = await request(app).get('/mining-pools');
    expect(response.status).toBe(401);
  });

  it('should return a list of mining pools', async () => {
    const response = await request(app)
      .get('/mining-pools')
      .set('Authorization', 'Basic dXNlckB0ZXN0LmNvbTpjZmZjZWQ=');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(10);
  });
});

