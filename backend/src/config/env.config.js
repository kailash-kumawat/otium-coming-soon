import dotenv from "dotenv";

dotenv.config();

const requiredEnv = [
  "MONGO_DB_URI",
  "RESEND_API_KEY",
  "GMAIL_APP_PASSWORD",
  "PORT",
  "CORS_ORIGIN",
];

for (const env of requiredEnv) {
  if (!process.env[env]) {
    throw new Error(`Missing required environment variable: ${env}`);
  }
}

export const config = {
  mongoDbUri: process.env.MONGO_DB_URI,
  resendApiKey: process.env.RESEND_API_KEY,
  gmailAppPassword: process.env.GMAIL_APP_PASSWORD,
  port: process.env.PORT,
  corsOrigin: process.env.CORS_ORIGIN,
};
