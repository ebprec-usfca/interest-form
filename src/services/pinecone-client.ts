import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";
import { env } from "~/env.mjs";
import { delay } from "./utils";

class Pinecone {
  client: PineconeClient;
  indexName: string;

  constructor() {
    this.client = new PineconeClient({
      apiKey: env.PINECONE_API_KEY || "",
    });
    this.indexName =env.PINECONE_INDEX_NAME;
  }

  async init() {
    try {
      const existingIndexes = await this.client.listIndexes();
      const existingIndexNames =
        existingIndexes.indexes?.map((index) => index.name) || [];

      if (!existingIndexNames.includes(this.indexName)) {
      
        await this.createIndex(this.indexName);
      }

      return this.client;
    } catch (error) {
      throw new Error("Error initializing Pinecone");
    }
  }

  private async createIndex(indexName: string) {
    try {
      const indexCreated = await this.client.createIndex({
        name: indexName,
        dimension: 1536,
        metric: "cosine",
        spec: {
          serverless: {
            cloud: "aws",
            region: "us-east-1",
          },
        },
      });


      
      await delay(Number("180"));   
      return indexCreated;
    } catch (error) {
      throw new Error("Error creating index");
    }
  }

  async deleteIndex(indexName: string) {
    return await this.client.deleteIndex(indexName);
  }
}

export const getPineconeClient = async () => {
  const pineconeInstance = new Pinecone();
  const initialized = await pineconeInstance.init();
  return initialized;
};

export default Pinecone;
