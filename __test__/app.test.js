const axios = require('axios');

const url = 'http://127.0.0.1:3000';

describe('Server Status', () => {
  test('Server Running', async () => {
    const res = await axios.get(url)
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
  })
})
