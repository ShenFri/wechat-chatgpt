import * as dotenv from "dotenv";
dotenv.config();
import { IConfig } from "./interface";
dotenv.config();

export const config: IConfig = {
  openai_api_key: process.env.OPENAI_API_KEY || "123456789",
  model: process.env.MODEL || "gpt-4.0-turbo",
  chatPrivateTiggerKeyword: process.env.CHAT_PRIVATE_TRIGGER_KEYWORD || "",
  chatTiggerRule: process.env.CHAT_TRIGGER_RULE || "姐姐",
  disableGroupMessage: process.env.DISABLE_GROUP_MESSAGE === "true",
};
