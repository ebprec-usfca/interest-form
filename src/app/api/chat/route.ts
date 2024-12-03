import { callChain } from "../../../services/langchain";
import type { Message } from "ai";
import { type NextRequest, NextResponse } from "next/server";


const formatMessage = (message: Message) => {
  return `${message.role === "user" ? "Human" : "Assistant"}: ${
    message.content
  }`;
};

export async function POST(req: NextRequest) {
  const body = await req.json();

  const messages: Message[] = body.messages ?? [];
  if (messages.length === 0) {
    return NextResponse.json(
      {
        error: "Bad Request",
        reason: "No messages provided",
      },
      {
        status: 400,
      },
    );
  }

  const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
  const question = messages[messages.length - 1]?.content;
  if (!question) {
    return NextResponse.json(
      {
        error: "Bad Request",
        reason: "No question provided",
      },
      {
        status: 400,
      },
    );
  }

  try {
    const streamingTextResponse = callChain({
      question,
      chatHistory: formattedPreviousMessages.join("\n"),
    });

    return streamingTextResponse;
  } catch (error) {
    console.error("Internal server error ", error);
    return NextResponse.json(
      {
        error: "Error: Something went wrong. Try again!",
      },
      {
        status: 500,
      },
    );
  }
}
