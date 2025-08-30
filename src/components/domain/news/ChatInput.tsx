import { useCallback, useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [message, setMesssage] = useState("");
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (message.trim()) {
        onSendMessage(message);
        setMesssage("");
      }
    },
    [message, onSendMessage],
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => {
                setMesssage(e.target.value);
              }}
              placeholder="Get tips from AI crypto experts!"
              className="focus:outline-none placeholder:italic placeholder:text-sm placeholder:font-normal 
            bg-slate-100 rounded-sm 
            dark:bg-slate-900
            w-full p-2 font-normal"
            />
            <button
              className="bg-primary-orange text-black rounded-sm"
              type="submit"
            >
              Send
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
