"use client";

import { getSources, initialMessages } from "~/services/utils";
import { type Message, useChat } from "ai-stream-experimental/react";
import { useRef, useState } from "react";
import { ChatLine } from "./chat-line";
import { Button } from "./ui/Button"
import { Input } from "./ui/input";
import { Spinner } from "./ui/spinner";
import ChatHeader from "./ChatHeader";

export interface ChatProps {
  sessionId: string;
  isUploading?: boolean;
}

export function Chat({ sessionId, isUploading }: ChatProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
    useChat({
      initialMessages: initialMessages as Message[],
      body: { sessionId },
    });

  return (
    <div
      className={`fixed bottom-8 right-8 transition-all duration-300 ${
        isChatOpen
          ? "h-[75vh] w-80 rounded-md border border-gray-200 bg-white shadow-lg"
          : "h-12 w-12 rounded-full"
      } flex flex-col justify-between overflow-hidden`}
      style={isUploading ? { opacity: 0.5, cursor: "not-allowed" } : {}}
    >
      {isChatOpen ? (
        <>
          <div className="px-6 py-4 ">
            <ChatHeader />
          </div>
          <div className="flex-1 overflow-auto p-6 max-h-full" ref={containerRef}>
            {messages.map(({ id, role, content }: Message, index) => (
              <ChatLine
                key={id}
                role={role}
                content={content}
                sources={data?.length ? getSources(data, role, index) : []}
              />
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex p-4">
            <Input
              value={input}
              placeholder="Type to chat with AI..."
              onChange={handleInputChange}
              style={isUploading ? { pointerEvents: "none" } : {}}
              className="mr-2"
            />
            <Button
              type="submit"
              className="w-24"
              style={isUploading ? { pointerEvents: "none" } : {}}
            >
              {isLoading ? <Spinner /> : "Ask"}
            </Button>
          </form>
        </>
      ) : (
        <div
          className="flex h-full w-full cursor-pointer items-center justify-center"
          onClick={() => setIsChatOpen(true)}
        >
          <img src="/chat.jpg" alt="chatbot" className="h-8 w-8 rounded-full" />
        </div>
      )}
      {isChatOpen && (
        <button
          onClick={() => setIsChatOpen(false)}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
        >
          ⌄
        </button>
      )}
    </div>
  );
}
