const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

describe('Route Methods', () => {
  const testMethod = async (method, status) => {
    const res = await axios[method](process.env.URL)
    expect(res).toBeTruthy()
    expect(res.status).toBe(status)
    console.log('Response:', res.data.message)
    expect(res.headers['content-type']).toContain('application/json')
  }
  test('GET Method', async () => {
    await testMethod('get', 200)
  })
  test('POST Method', async () => {
    await testMethod('post', 201)
  })
  test('DELETE Method', async () => {
    await testMethod('delete', 200)
  })
})
