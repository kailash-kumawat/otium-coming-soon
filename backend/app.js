import express from "express";
import cors from "cors";
import { config } from "./src/config/env.config.js";

const app = express();

app.use(
  cors({
    origin: config.corsOrigin,
  }),
);

app.use(
  express.json({
    limit: "16kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);

app.use(express.static("public"));

import waitList from "./src/routes/waitlist.route.js";

app.use("/api/waitlist", waitList);

export default app;
