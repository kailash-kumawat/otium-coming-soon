import Waitlist from "../models/waitlist.model.js";
import { sendWelcomeEmail } from "../services/email.service.js";

export const joinWaitlist = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const entry = await Waitlist.create({ email });

    try {
      await sendWelcomeEmail(email);
      entry.confirmationEmailSent = true;
      await entry.save();
      console.log("successfully send email");
    } catch (emailErr) {
      console.error("Welcome email failed to send:", emailErr);
    }

    return res.status(201).json({
      success: true,
      message: "You'll be notified when OTIUM is ready.",
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "You're already registered to be notified.",
      });
    }
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong." });
  }
};
