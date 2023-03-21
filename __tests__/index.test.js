// Imports
const request = require('supertest');
const app = require('../index');
const jwt = require('jsonwebtoken');
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const token = jwt.sign({ email: 'user@test.com' }, accessTokenSecret, { expiresIn: '60s' });


// Test Suite
    // Describe Case
describe('Test  root path', () => {
    // Test Case - Root path
    test('It should return status code 200 and a message.', async () => {
      const response = await request(app).get('/');

      // Expect
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe('Server is Running!');
    });
  });

// Test Suite
describe('GET /mining-pools', () => {

    // Test Case - Authentication Required
  it('should require authentication', async () => {
    const response = await request(app).get('/mining-pools');
    expect(response.status).toBe(401);
  });

  // Test Case - Valid Auth
  it('should return a list of mining pools', async () => {
    const response = await request(app)
      .get('/mining-pools')
      .set('Authorization', `Bearer ${token}`);

    // Expect
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(10);
  });
});

