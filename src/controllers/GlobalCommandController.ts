import { Message } from "discord.js";

import { getGlobalCaseData } from "../api";

const GlobalCommandController = async (message: Message) => {
  const [data, error]: any = await getGlobalCaseData();

  if (error) {
    await message?.reply(
      `🔥 *Something went wrong!*\n\nPlease try again later.`
    );

    return;
  }

  const { confirmed = 0, deaths = 0, lastUpdate = new Date() } = data;

  await message?.reply(
    `🌐 **Global Case Data**\n\n` +
      `Confirmed: **${confirmed.toLocaleString("en-US")}** case(s)\n` +
      `Deaths: **${deaths.toLocaleString("en-US")}** case(s)\n\n` +
      `*Last updated: ${lastUpdate?.toLocaleString()}*`
  );
};

export default GlobalCommandController;
