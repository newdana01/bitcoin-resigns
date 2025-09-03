import AIWriter from "react-aiwriter";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  isLoading?: boolean;
}

export default function ChatMessage({
  message,
  isUser,
  isLoading,
}: ChatMessageProps) {
  return (
    <div className="grid">
      <div
        className={`${isUser ? "bg-slate-300 dark:bg-slate-800" : "bg-slate-400 dark:bg-slate-700"} 
      ${isUser ? "justify-self-end" : "justify-self-start"} 
      font-normal p-2 mb-2 rounded-md w-72
      `}
      >
        <header className="dark:text-slate-500">
          {isUser ? "User" : "Bot"}
        </header>
        {isUser && <p>{message}</p>}
        {!isUser &&
          (isLoading ? (
            <div className="flex justify-center h-10">
              <img src="/images/loading3.gif" alt="" />
            </div>
          ) : (
            <AIWriter>{message}</AIWriter>
          ))}
      </div>
    </div>
  );
}
