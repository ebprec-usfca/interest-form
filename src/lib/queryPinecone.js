// lib/queryPinecone.js
import openai from 'openai';
import pineconeClient from './pineconeClient';

openai.apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export async function queryPinecone(userInput) {
  const response = await openai.embeddings.create({
    input: userInput,
    model: "text-embedding-ada-002",
  });

  const queryEmbedding = response.data[0].embedding;

  const result = await pineconeClient.index("your-index-name").query({
    vector: queryEmbedding,
    topK: 5, // Number of relevant results to return
    includeValues: false,
  });

  return result.matches.map(match => match.id); // Return an array of IDs
}
