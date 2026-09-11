import mongoose from "mongoose";
import { config } from "./src/config/env.config.js";
import app from "./app.js";

async function connectDB() {
  await mongoose.connect(config.mongoDbUri);
  console.log("Connected to MongoDB via Mongoose");
}

const PORT = config.port || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });
