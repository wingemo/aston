/*
  File: 🚀 database-initialization.js
  Description: 🔬 This script initializes the MongoDB database 
*/
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

async function initialize() {
  const client = await MongoClient.connect(process.env.URL_DATABASE, {
    connectTimeoutMS: process.env.DATABASE_TIMEOUT 
  });
  const db = client.db(process.env.DATABASE_NAME);
  await db.dropDatabase();
  await db.createCollection(process.env.DATABASE_COLLECTION);
  client.close();
}

initialize()
    .then(() => {
        console.log('Database initialization successful.');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Database initialization failed.', error);
        process.exit(1);
    });