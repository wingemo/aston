const { MongoClient } = require('mongodb');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

describe('Database', () => {
    let client;
    beforeAll(async () => {
      client = await MongoClient.connect(process.env.URL_DATABASE, {
        connectTimeoutMS: process.env.DATABASE_TIMEOUT,
      });
    });
    afterAll(async () => {
      await client.close();
    });
    test('Database Status', async () => {
      const db = client.db(process.env.DATABASE_NAME);
      const status = await db.command({ ping: 1 });
      expect(status).toEqual({ ok: 1 });
    });
    test('Check Collection', async () => {
        const db = client.db(process.env.DATABASE_NAME);
        const collectionName = process.env.DATABASE_COLLECTION;
        const collections = await db.listCollections({ name: collectionName }).toArray();
        const collectionExists = collections.length > 0;
        expect(collectionExists).toBe(true);
      });
  });
  


