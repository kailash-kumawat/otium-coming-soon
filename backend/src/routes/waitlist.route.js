import { Router } from "express";
import { joinWaitlist } from "../controllers/waitlist.controller.js";

const router = Router();

router.route("/join").post(joinWaitlist);

export default router;
