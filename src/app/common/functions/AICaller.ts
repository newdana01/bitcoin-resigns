import OpenAI from "openai";

class AICaller {
  static openai = new OpenAI({
    apiKey: process.env.OPENAN_API_KEY,
  });
  static MODEL = "gpt-4o-mini";

  static async createModelResponse(
    input: string,
    background: boolean | null = false,
    conversationId: string | null = null,
    instruction: string | null = null,
    maxOutputTokens: number | null = null,
  ) {
    try {
      const response = await this.openai.responses.create({
        model: this.MODEL,
        input: input,
        store: true,
        background: background,
        conversation: conversationId,
        instructions: instruction,
        max_output_tokens: maxOutputTokens,
      });
      return response.output_text;
    } catch (error) {
      console.error("createModelResponse() error >>> ", error);
      return null;
    }
  }

  static async createConversation(): Promise<string | null> {
    try {
      const response = await this.openai.conversations.create({});
      return response.id;
    } catch (error) {
      console.error("createConversation() error >>> ", error);
      return null;
    }
  }
}
