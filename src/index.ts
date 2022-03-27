import "dotenv/config";
import { Client, Intents, Message } from "discord.js";
import MessageCreateController from "./controllers";

const token = process?.env?.BOT_TOKEN;
const client = new Client({
  intents: [Intents?.FLAGS?.GUILD_MESSAGES, Intents?.FLAGS?.GUILDS],
});

client?.once("ready", () => {
  console?.log("Bot is running.");
});
client?.on("messageCreate", MessageCreateController);
client?.login(token);
