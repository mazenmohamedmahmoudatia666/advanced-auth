import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN || "6ed6188872bb36279201502442b6773c";
const ENDPOINT =
  process.env.MAILTRAP_ENDPOINT || "https://send.api.mailtrap.io/";

export const mailtrapClient = new MailtrapClient({
  endpoint: ENDPOINT,
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Maze",
};
