// services/dataService.js

const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const dbName = "your-database-name";
const collectionName = "your-collection-name";

// Function to connect to MongoDB
async function connectToDB() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// Function to fetch data from the API and store it in MongoDB
async function storeDataInMongoDB() {
  const collection = await connectToDB();
  const apiUrl = "https://app.speckle.systems/objects/c832429e56/2836ca9d0bbaaaa95d90fd086344315d/single";
  
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data) {
      await collection.insertOne(data);
      console.log("Data stored successfully!");
    }
  } catch (error) {
    console.error("Error during fetch or data insertion:", error);
    throw error;  // Re-throw the error to propagate it to the controller
  }
}

module.exports = { storeDataInMongoDB };
