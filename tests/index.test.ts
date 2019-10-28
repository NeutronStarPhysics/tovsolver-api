import * as supertest from 'supertest';
import app from '../src/index';

describe('app', () => {
  let request;
  beforeEach(() => {
    request = supertest(app);
  });
  it('should return a successful response for GET /EoS', done => {
    request.get('/health')
      .expect(200, done);
  });
});
