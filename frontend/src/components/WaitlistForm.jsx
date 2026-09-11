import { useState } from "react";
import ArrowIcon from "./ArrowIcon";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const value = email.trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    const endpoint = import.meta.env.VITE_WAITLIST_ENDPOINT;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: value }),
        });

        const data = await response.json();

        if (!response.ok) {
          setStatus("error");
          setMessage(data.message || "Something went wrong. Please try again.");
          return;
        }

        setStatus("success");
        setMessage(data.message);
      } else {
        // Static/demo fallback. Replace with your API endpoint for production.
        await new Promise((resolve) => setTimeout(resolve, 450));
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }

      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        id="notify"
        className="flex min-h-[49px] w-full items-center justify-between gap-4 overflow-hidden rounded-full border border-[rgba(145,158,211,.45)] bg-[rgba(5,10,28,.58)] px-[10px] pl-5"
        role="status"
      >
        <div>
          <strong className="block text-[13px] font-medium">{message}</strong>
          <span className="mt-[3px] block text-[10px] text-[#9aa3bd]">
            We will write to you as soon as OTIUM is ready.
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="rounded-full border border-[rgba(181,167,255,.45)] px-[17px] py-[10px] text-[10px] text-[#c4b9ff]"
        >
          Add another
        </button>
      </div>
    );
  }

  return (
    <form
      id="notify"
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-[445px]"
    >
      <div className="flex min-h-[49px] w-full items-stretch overflow-hidden rounded-full border border-[rgba(145,158,211,.45)] bg-[rgba(5,10,28,.58)] transition focus-within:border-[rgba(166,156,255,.8)] focus-within:shadow-[0_0_0_4px_rgba(123,106,255,.07)]">
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status === "error") {
              setStatus("idle");
              setMessage("");
            }
          }}
          disabled={status === "loading"}
          required
          className="min-w-0 flex-1 border-0 bg-transparent px-5 text-[13px] text-white outline-none placeholder:text-[#9aa2ba] disabled:opacity-70"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="m-[2px] inline-flex min-w-[145px] items-center justify-center gap-3 rounded-full border-0 bg-gradient-to-r from-[#c38cff] to-[#8f9bff] text-[13px] text-[#111327] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-75 max-[520px]:min-w-[112px] max-[520px]:text-[12px]"
        >
          {status === "loading" ? "Joining..." : "Notify Me"}
          {status !== "loading" && <ArrowIcon />}
        </button>
      </div>

      <p
        className={`mt-4 ml-[2px] text-[11px] ${status === "error" ? "text-[#d9a7b5]" : "text-[#8992ad]"}`}
      >
        {status === "error"
          ? message
          : "Be the first to know when OTIUM goes live."}
      </p>
    </form>
  );
}
