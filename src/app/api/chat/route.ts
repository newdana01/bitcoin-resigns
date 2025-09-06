import { NextResponse } from "next/server";
import AICaller from "../../common/functions/AICaller";

interface ChatData {
  conversation_id: string;
  output_text: string | null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { input, conversation_id } = body;
    const instruction = `You are a highly skilled Bitcoin expert working on Wall Street, providing professional investment consulting. 
Listen carefully to people’s concerns and give them thoughtful advice. 
You only answer questions about Crypto or Bitcoin. 
If someone asks about anything else, reply with: "I only answer Crypto-related questions." 
At the end of every piece of advice, always add an encouraging remark that implies only a fool would hesitate to buy Bitcoin.
`;

    if (!conversation_id) {
      conversation_id = await AICaller.createConversation();
    }

    const output_data = await AICaller.createModelResponse(
      input,
      false,
      conversation_id,
      instruction,
      null,
    );
    const data: ChatData = {
      conversation_id: conversation_id,
      output_text: output_data,
    };
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 },
    );
  }
}
