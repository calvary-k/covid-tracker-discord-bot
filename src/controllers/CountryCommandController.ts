import { Message } from "discord.js";
import { getCountryCaseData } from "../api";

const CountryCommandController = async (
  message: Message,
  command: string,
  country: string
) => {
  if (command === country || country === "") {
    await message?.reply(
      `You need to specify the country's name.\n\n` +
        `**Example**: /country Indonesia`
    );
  } else {
    const [data, error]: any = await getCountryCaseData(country);

    if (error) {
      await message?.reply(
        `🔥 *Something went wrong!*\n\nPlease try again later.`
      );

      return;
    }
    const { confirmed = 0, deaths = 0, lastUpdate = new Date() } = data;

    await message?.reply(
      `🌐 **Country Case Data**\n\n` +
        `Confirmed: **${confirmed.toLocaleString("en-US")}** case(s)\n` +
        `Deaths: **${deaths.toLocaleString("en-US")}** case(s)\n\n` +
        `*Last updated: ${lastUpdate?.toLocaleString()}*`
    );
  }
};

export default CountryCommandController;
