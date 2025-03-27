const axios = require('axios'); // Import Axios
const { MongoClient } = require('mongodb'); // MongoDB client

const uri = "mongodb://localhost:27017"; // MongoDB connection URI
const dbName = "Speckle"; // Replace with your DB name
const collectionName = "Speckle_Models"; // Replace with your collection name

// Function to connect to MongoDB and get the collection
async function connectToDB() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// Function to fetch and store data in MongoDB
async function storeDataInMongoDB(objectId) {
  const collection = await connectToDB(); // Get the collection

  const apiUrl = `https://app.speckle.systems/objects/c832429e56/${objectId}/single`; // API URL

  try {
    // Fetch data from the API using Axios
    const response = await axios.get(apiUrl);

    // Extract the data from the response (Axios wraps the response in a "data" property)
    const data = response.data;

    if (data) {
      // Insert the fetched data into MongoDB
      const result = await collection.insertOne(data);
      console.log("Data stored successfully:", result);
    } else {
      console.log("No data received from the API.");
    }
  } catch (error) {
    console.error("Error fetching or storing data:", error);
  }
}

storeDataInMongoDB(); // Call the function to store data
