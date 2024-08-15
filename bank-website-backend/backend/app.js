const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Connection URI
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const database = client.db('bankDB'); // Replace 'myDatabase' with your database name
    const collection = database.collection('users'); // Replace 'myCollection' with your collection name

    // Example: Insert a document
    const result = await collection.insertOne({ name: 'Alice', age: 25 });
    console.log('Inserted document:', result.insertedId);

    // Example: Find a document
    const document = await collection.findOne({ name: 'Alice' });
    console.log('Found document:', document);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);