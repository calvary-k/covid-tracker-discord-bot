import "dotenv/config";
import { Message } from "discord.js";

import CountryCommandController from "./CountryCommandController";
import GlobalCommandController from "./GlobalCommandController";
import HelpCommandController from "./HelpCommandController";

const PREFIX = process?.env?.PREFIX;

const MessageCreateController = async (message: Message) => {
  if (message?.author?.bot) {
    return;
  }

  const textMessage = message?.content;

  if (textMessage?.charAt(0) !== PREFIX) {
    return;
  }

  const command = textMessage?.substring(1)?.split(" ")?.[0];
  const args = textMessage?.substring(textMessage?.indexOf(" ") + 1);

  if (command === "global") {
    await GlobalCommandController(message);
  } else if (command === "country") {
    await CountryCommandController(message, command, args);
  } else if (command === "help") {
    await HelpCommandController(message);
  }
};

export default MessageCreateController;
