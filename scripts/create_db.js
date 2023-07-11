const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

MongoClient.connect(process.env.URL_DATABASE, function(err, db) {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log("Database created!");
    db.close();
    process.exit(1);
  }
});



