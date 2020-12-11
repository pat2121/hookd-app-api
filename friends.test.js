const app = require('../../src/app');

describe('\'FRIENDS\' service', () => {
  it('registered the service', () => {
    const service = app.service('(/FRIENDS)');
    expect(service).toBeTruthy();
  });
});
