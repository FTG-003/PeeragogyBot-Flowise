require('dotenv').config();
const { MongoClient } = require('mongodb');

async function checkTTLIndex() {
  const uri = process.env.MONGODB_URI;
  
  if (!uri || !uri.startsWith('mongodb+srv://')) {
    throw new Error('Invalid MongoDB URI format');
  }

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: '1'
  });

  try {
    await client.connect();
    const db = client.db('flowise_data');
    const collection = db.collection('peerchat_logs');

    // Get all indexes
    const indexes = await collection.listIndexes().toArray();
    
    // Check for TTL index on createdAt
    const ttlIndexExists = indexes.some(index => 
      index.expireAfterSeconds && index.key.createdAt === 1
    );

    return ttlIndexExists;
  } finally {
    await client.close();
  }
}

// Execute and handle results
checkTTLIndex()
  .then(exists => {
    console.log(exists ? '✅ TTL Index found' : '⚠️  TTL Index not found');
    process.exit(0);
  })
  .catch(err => {
    console.error(`❌ MongoDB check failed: ${err.message}`);
    process.exit(1);
  });
