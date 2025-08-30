import AIWriter from "react-aiwriter";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export default function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <article
      className={`${isUser ? "bg-slate-300 dark:bg-slate-800" : "bg-slate-400 dark:bg-slate-700"} 
      ${isUser ? "float-right" : "float-left"} 
      font-normal p-2 mb-2 rounded-md w-72
      `}
    >
      <header className="dark:text-slate-500">{isUser ? "User" : "Bot"}</header>
      {isUser && <p>{message}</p>}
      {!isUser && <AIWriter>{message}</AIWriter>}
    </article>
  );
}
