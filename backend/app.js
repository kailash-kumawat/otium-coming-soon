import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://192.168.29.172:5173",
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
