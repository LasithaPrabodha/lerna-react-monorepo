import axios from "axios";
import { Emoji } from "./interfaces/Emoji";

export const getRandomEmoji = async () => {
  try {
    const response = await axios.get<Emoji>("https://emojihub.yurace.pro/api/random");
    return response.data;
  } catch (error) {
    console.error("Error fetching emoji data:", error);
    return null;
  }
};
