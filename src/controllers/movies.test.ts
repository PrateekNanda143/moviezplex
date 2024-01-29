import request from 'supertest';

import app from '../index';
import { add } from './movies';

describe('API Routes', () => {
  it('should respond with 200 for GET /moviezplex/movies', async () => {
    const response = await request(app).get('/moviezplex/movies');
    expect(response.status).toBe(200);
  });

  it('should handle non-existing routes with 404', async () => {
    const response = await request(add).get('/non-existing-route');
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: 'Not Found' });
  });
});
