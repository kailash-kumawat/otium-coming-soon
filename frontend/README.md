# OTIUM Coming Soon — React + Vite + Tailwind + JavaScript

Responsive, component-based implementation of the OTIUM coming-soon landing page.

## Stack

- React
- Vite
- JavaScript / JSX
- Tailwind CSS v4

## Run

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── ArrowIcon.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Logo.jsx
│   ├── Navbar.jsx
│   ├── Planet.jsx
│   └── WaitlistForm.jsx
├── App.jsx
├── index.css
└── main.jsx
```

Each visual/functional section is isolated so the page can grow without turning `App.jsx` into a large component.

## Notify Me

Without `VITE_WAITLIST_ENDPOINT`, the form uses a small localStorage fallback so the UI can be tested without a backend.

For production, create `.env`:

```env
VITE_WAITLIST_ENDPOINT=https://your-api.example.com/waitlist
```

The endpoint should accept:

```http
POST /waitlist
Content-Type: application/json

{"email":"user@example.com"}
```

Return a 2xx status for success.

Recommended production behavior:

1. Validate the email on the server.
2. Store the email and timestamp.
3. Return a success response.
4. Send a short confirmation email from your backend/email provider.
5. Keep the inline success state: "You're on the list. We'll let you know when OTIUM is ready."

## Deployment

The Vite production output is `dist/`. It can be deployed to Vercel, Netlify, Cloudflare Pages, or another static host.
