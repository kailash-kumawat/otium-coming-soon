import nodemailer from "nodemailer";
import { config } from "../config/env.config.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "otium.leisureofficial@gmail.com",
    pass: config.gmailAppPassword,
  },
});

export const sendWelcomeEmail = async (email) => {
  await transporter.sendMail({
    from: "OTIUM <otium.leisureofficial@gmail.com>",
    to: email,
    subject: "Thank you for joining OTIUM",
    html: `
  <div style="
    margin: 0;
    padding: 0;
    background-color: #ffffff;
    font-family: Arial, Helvetica, sans-serif;
    color: #111827;
  ">
    <div style="
      max-width: 560px;
      margin: 0 auto;
      padding: 56px 32px 48px;
    ">

      <!-- Brand -->
      <div style="
        text-align: left;
        margin-bottom: 64px;
      ">
        <div style="
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.38em;
          color: #b8a2e0;
        ">
          OTIUM
        </div>
      </div>

      <!-- Main content -->
      <div style="margin-bottom: 48px;">

        <h1 style="
          margin: 0 0 24px;
          font-size: 30px;
          line-height: 1.2;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: #0b1020;
        ">
          Thank you for joining OTIUM.
        </h1>

        <p style="
          margin: 0 0 18px;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
          color: #4b5563;
        ">
          We've saved your place, and we'll let you know
          as soon as OTIUM is ready.
        </p>

        <p style="
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
          color: #4b5563;
        ">
          We appreciate your patience.
        </p>

      </div>

      <!-- Signature -->
      <div style="
        padding-top: 24px;
        border-top: 1px solid #eeeef3;
      ">
        <p style="
          margin: 0 0 36px;
          font-size: 14px;
          line-height: 1.6;
          color: #6b7280;
        ">
          — The OTIUM team
        </p>

        <!-- Social -->
        <div style="
          text-align: center;
          margin-bottom: 28px;
        ">
          
            href="https://x.com/Otium_official"
            style="
              color: #6b7280;
              text-decoration: none;
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 0.08em;
            "
          >
            X
          </a>

          <span style="
            margin: 0 14px;
            color: #d4d6dc;
            font-size: 11px;
          ">
            •
          </span>

          
            href="https://www.instagram.com/otium.leisure/"
            style="
              color: #6b7280;
              text-decoration: none;
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 0.08em;
            "
          >
            INSTAGRAM
          </a>
        </div>

        <!-- Footer -->
        <p style="
          margin: 0;
          text-align: center;
          font-size: 11px;
          line-height: 1.6;
          color: #a1a6b2;
          letter-spacing: 0.04em;
        ">
          A calmer you.
        </p>

      </div>

    </div>
  </div>
`,
  });
};
