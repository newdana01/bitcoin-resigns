import { useCallback, useEffect, useRef, useState } from "react";
import SectionName from "../../../common/components/SectionName";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function GetYourMoves() {
  const [messages, setMessages] = useState<
    {
      message: string;
      isUser: boolean;
      isLoading?: boolean;
    }[]
  >([]);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const phrases = [
      "Bitcoin will take over the world. Better be on board.",
      "Are there really people who haven’t bought Bitcoin yet?",
      "The moment you think it’s too late… that’s the moment you should act.",
      "I’m not forcing you. But regret comes to those who do nothing.",
      "I trust nothing but Bitcoin.",
    ];
    const idx = Math.floor(Math.random() * 5);
    setMessages([
      {
        message: phrases[idx],
        isUser: false,
        isLoading: false,
      },
    ]);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handelSendMessage = async (message: string) => {
    setMessages((prev) => [
      ...prev,
      { message: message, isUser: true },
      { message: "", isUser: false, isLoading: true },
    ]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: message, conversation_id: conversationId }),
    });
    const data = await res.json();
    //AI 답변
    setMessages((prev) => {
      // 마지막 메시지(로딩)를 실제 답변으로 교체
      const newPrev = [...prev];
      newPrev[newPrev.length - 1] = {
        message: data.output_text,
        isUser: false,
        isLoading: false,
      };
      return newPrev;
    });
    setConversationId(data.conversation_id);
  };

  return (
    <div>
      <SectionName name="Get Your Moves!" />
      <div
        className="h-[33rem] overflow-y-scroll
         bg-slate-200 dark:bg-slate-600 dark:bg-opacity-20 rounded-md shadow-xl
      dark:bg-transparent
      "
        ref={chatContainerRef}
      >
        {messages.map((msg, idx) => (
          <ChatMessage
            key={idx}
            message={msg.message}
            isUser={msg.isUser}
            isLoading={msg.isLoading}
          />
        ))}
      </div>
      <ChatInput onSendMessage={handelSendMessage} />
    </div>
  );
}
