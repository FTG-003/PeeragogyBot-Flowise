// check-mongo.js
const { MongoClient } = require("mongodb");

const uri = process.env.FLOWISE_DATABASE_URI;

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db("flowise_data");
    const flows = await db.collection("chatflows").find({}).toArray();
    console.log(`✅ MongoDB connected! Found ${flows.length} chatflow(s).`);
    process.exit(0);
  } catch (err) {
    console.error("❌ MongoDB check failed:", err.message);
    process.exit(1);
  }
}

run();
