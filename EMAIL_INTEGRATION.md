# Email Form Integration (Deferred)

The contact form ("Send a Message") is currently commented out in:
- `src/components/Contact.tsx`

This is intentional until we choose a free email service.

## Option A: EmailJS (Free Plan)
- Free tier: 200 requests/month, 2 templates.
- Setup steps:
  1. Create an EmailJS account and add a service + email template.
  2. Get the `SERVICE_ID`, `TEMPLATE_ID`, and `PUBLIC_KEY`.
  3. Add them to `.env.local` as:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID=...`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=...`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=...`
  4. Wire the form to call `emailjs.send(...)` on submit.

## Option B: Web3Forms (No backend)
- Free, easy, and fast.
- Steps:
  1. Create a Web3Forms access key.
  2. Post the form to `https://api.web3forms.com/submit` with the access key.
  3. Remove local state submission simulation and handle success/error.

## Option C: Formspree
- Free tier with limited submissions.
- Steps:
  1. Create a form endpoint on Formspree.
  2. Set the form `action` to the endpoint and `method="POST"`.

## Re‑enable the Form
Uncomment the second card in `src/components/Contact.tsx` and implement one of the above options.
