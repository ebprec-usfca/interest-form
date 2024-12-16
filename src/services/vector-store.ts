import { OpenAIEmbeddings } from "@langchain/openai";
import { PineconeStore } from "@langchain/pinecone";
import { getPineconeClient } from "./pinecone-client";
import { env } from "~/env.mjs"
export async function embedAndStoreDocs(
  // @ts-ignore docs type error
  docs: Document<Record<string, unknown>>[],
) {
  /*create and store the embeddings in the vectorStore*/
  try {
    const pineconeClient = await getPineconeClient();
    const embeddings = new OpenAIEmbeddings();

    const index = pineconeClient.index(env.PINECONE_INDEX_NAME);

    //embed the PDF documents
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,

    });
  } catch (error) {
    console.log(error);

    throw new Error("Failed to load your docs !");
  }
}

// Returns vector-store handle to be used a retrievers on langchains
export async function getVectorStore() {
  try {
    const pineconeClient = await getPineconeClient();
    const embeddings = new OpenAIEmbeddings();
    const index = pineconeClient.index(env.PINECONE_INDEX_NAME);
    
    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      textKey: "text",
    });

    return vectorStore;
  } catch (error) {

    throw new Error("Something went wrong while getting vector store !");
  }
}
