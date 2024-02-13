import { Body, Controller, Post, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import openaiMessage from "./openai";

interface ChatResponse {
  chatMessage: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async openAiMessages(@Body() message: any): Promise<ChatResponse> {
    console.log("message", message);
    return {
      chatMessage: (await openaiMessage(message.message as string)).choices[0]
        .message.content,
    };
  }
}
