const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

describe('Server', () => {
  test('Server Status', async () => {
    const res = await axios.get(process.env.URL)
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
  })
})

