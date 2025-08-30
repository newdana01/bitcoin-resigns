import { useCallback, useEffect, useState } from "react";
import SectionName from "../../../common/components/SectionName";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export default function GetYourMoves() {
  const [messages, setMessages] = useState<
    {
      message: string;
      isUser: boolean;
    }[]
  >([]);

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
      },
    ]);
  }, []);

  const handelSendMessage = async (message: string) => {
    const formData = new FormData();
    formData.append("message", message);
    setMessages((prev) => [...prev, { message: message, isUser: true }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    //AI 답변
    setMessages((prev) => [...prev, { message: data.message, isUser: false }]);
  };

  return (
    <div>
      <SectionName name="Get Your Moves!" />
      <div
        className="h-[64.5vh] overflow-y-scroll bg-slate-200 rounded-sm
      dark:bg-transparent
      "
      >
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg.message} isUser={msg.isUser} />
        ))}
      </div>
      <ChatInput onSendMessage={handelSendMessage} />
    </div>
  );
}
