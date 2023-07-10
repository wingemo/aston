const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

describe('Server Status', () => {
  test('Server Running', async () => {
    const res = await axios.get(process.env.URL)
    expect(res).toBeTruthy()
    expect(res.status).toBe(200)
  })
})
