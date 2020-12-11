const app = require('../../src/app');

describe('\'SPOTS\' service', () => {
  it('registered the service', () => {
    const service = app.service('spots');
    expect(service).toBeTruthy();
  });
});
