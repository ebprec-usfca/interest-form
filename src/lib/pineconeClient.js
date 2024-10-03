// lib/pineconeClient.js
import pinecone from '@pinecone-database/pinecone';

const pineconeClient = new pinecone.Pinecone({
  apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY, 
  environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT, 
});

export default pineconeClient;
