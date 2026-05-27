const request = require('supertest');

const app = require('../app');

describe('Login API', () => {

  test('should login successfully', async () => {

    const response = await request(app)
      .post('/login')
      .send({
        email: 'admin@test.com',
        password: '123456'
      });

    expect(response.statusCode).toBe(200);

    expect(response.body.success).toBe(true);

  });

  test('should fail with wrong password', async () => {

    const response = await request(app)
      .post('/login')
      .send({
        email: 'admin@test.com',
        password: 'wrong'
      });

    expect(response.statusCode).toBe(401);

    expect(response.body.success).toBe(false);

  });

});