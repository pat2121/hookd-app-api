const app = require('../../src/app');

describe('\'USERS\' service', () => {
  it('registered the service', () => {
    const service = app.service('users');
    expect(service).toBeTruthy();
  });
});
