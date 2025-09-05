import OpenAI from "openai";
import fs from "fs";

export default class AICaller {
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

  static async uploadFile(filePath: string) {
    try {
      const file = await this.openai.files.create({
        file: fs.createReadStream(filePath),
        purpose: "batch",
      });
      return file;
    } catch (error) {
      console.error("uploadFile() error >>> ", error);
      throw error;
    }
  }

  static async createBatch(
    input_file_id: string,
  ): Promise<OpenAI.Batch | undefined> {
    try {
      const response = await this.openai.batches.create({
        input_file_id: input_file_id,
        endpoint: "/v1/responses",
        completion_window: "24h",
      });
      return response;
    } catch (error: any) {
      console.error("createBatch() error >>> ", error);
      throw new Error(error.message);
    }
  }

  static async retrieveBatch(
    batchId: string,
  ): Promise<OpenAI.Batch | undefined> {
    try {
      const response = await this.openai.batches.retrieve(batchId);
      return response;
    } catch (error) {
      console.error("createBatch() error >>> ", error);
    }
  }

  static async retrieveFileContent(fileId: string) {
    try {
      const response = await this.openai.files.content(fileId);
      return response;
    } catch (error) {
      console.error("retrieveFile() error >>> ", error);
    }
  }
}
