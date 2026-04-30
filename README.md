<div align="center">

# Anas Tanveer Portfolio

### Premium Static Portfolio Website

**Full-Stack Web Developer | Dubai, UAE**

---

Laravel · WordPress · Shopify · Ecommerce · Dashboards · ERP · API Integrations · SEO

---

</div>

## Overview

Premium static portfolio website for **Anas Tanveer**, a Dubai-based full-stack web developer focused on Laravel, WordPress, Shopify, ecommerce, dashboards, ERP systems, API integrations, website speed, and SEO-ready business web solutions.

This project is built with **Next.js App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lenis**, and static export support for shared hosting platforms such as **Namecheap cPanel**.

---

## Production Goal

The website is designed to work as a personal brand, portfolio, resume, service website, and lead-generation profile for:

- Direct business clients
- Recruiters
- Agencies
- Fiverr / freelance visitors
- LinkedIn visitors
- UAE, UK, Canada, and international project leads

The site is fully static and does not require a Node.js server in production.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Smooth Scroll | Lenis |
| Icons | Lucide |
| Build | Static Export |
| SEO | JSON-LD Schema + Metadata |
| Forms | FormSubmit AJAX |
| Security | Apache `.htaccess` rules |

---

## Local Development

Install dependencies:

```bash
npm install
```

Run local development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

> **Note:** Do not open `.tsx`, `.js`, or source files directly in the browser. This is a Next.js project and must be served through the dev server or built export.

---

## Production Build

Generate the static production export:

```bash
npm run build
```

The final deployable folder is:

```text
out/
```

Upload the **contents inside `out/`** to Namecheap `public_html`.
**Do not upload the `out` folder itself.**

### Correct Hosting Structure

```text
public_html/
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
├── _next/
├── images/
└── files/
```

---

## Namecheap Deployment

Recommended safe upload method:

1. Run `npm run build`
2. Open the `out/` folder
3. Select all files and folders inside `out/`
4. Create a ZIP from those selected contents
5. Open Namecheap cPanel File Manager
6. Go to `public_html`
7. Enable "Show Hidden Files" so `.htaccess` is visible
8. Upload the ZIP
9. Extract it directly inside `public_html`
10. Confirm that `public_html/index.html` exists

For future updates, repeat the same process after running `npm run build`.

---

## Static Export Rules

This project is configured for static hosting:

```js
output: "export"
trailingSlash: true
images: {
  unoptimized: true
}
```

### Do Not Add

- API routes
- Server actions
- Dynamic SSR
- Node-only backend logic

> Any feature that requires backend processing should use an external service or be handled separately from the static site.

---

## Contact Form

The contact form is static-hosting compatible and uses **FormSubmit AJAX**.

**Emails are sent to:**

| Type | Address |
|------|---------|
| Primary | `info@anastanveer.com` |
| CC | `anastanveer557@gmail.com` |

### Protection Included

- Required field validation
- Email format validation
- Honeypot anti-spam field
- Basic client-side rate limiting
- Loading state
- Disabled submit button while sending
- Success and error messages

> **Important:** FormSubmit may send a first-time confirmation email to `info@anastanveer.com`. Confirm that email before expecting live submissions.

---

## SEO Setup

Included SEO features:

- Metadata for all main pages
- Canonical URLs
- Open Graph tags
- Twitter card tags
- Robots file
- Sitemap file
- JSON-LD structured data
- Person schema
- ProfessionalService schema
- LocalBusiness schema
- WebSite schema
- Breadcrumb schema
- Blog schema where needed
- Google Search Console verification meta tag

### Google Verification Tag

```html
<meta name="google-site-verification" content="gllYNE1pcbGLwfP2PMahnrbVB6fcVfM0x0gbbsiBSCg" />
```

After deployment, verify the domain in Google Search Console.

---

## Security Setup

The production export includes `.htaccess` rules for Apache / shared hosting:

- HTTPS redirect
- Directory listing disabled
- Sensitive file blocking
- WordPress path blocking
- Old WordPress URL redirects
- HSTS
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- Content-Security-Policy
- Static asset caching
- Compression rules

> Make sure `.htaccess` is uploaded to `public_html`.

---

## Performance Notes

The site is optimized for static delivery:

- Static HTML export
- Optimized image formats
- Lazy-loaded images
- Responsive image sizing
- Lightweight client-side scripts
- No backend dependency
- No API route dependency
- Cache headers for static assets

### After Upload — Test Checklist

- [ ] Homepage
- [ ] Portfolio page
- [ ] Case Studies page
- [ ] Resume page
- [ ] Blog pages
- [ ] Contact form
- [ ] Mobile layout
- [ ] Search Console verification

---

## Important URLs

### Production Domain

```text
https://anastanveer.com
```

### Key Routes

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/about/` | About |
| `/services/` | Services |
| `/portfolio/` | Portfolio |
| `/work/` | Work |
| `/case-studies/` | Case Studies |
| `/pricing/` | Pricing |
| `/resume/` | Resume |
| `/blog/` | Blog |
| `/contact/` | Contact |

---

## Maintenance Workflow

For any update:

```bash
npm run typecheck
npm run build
```

Then upload the latest `out/` contents to `public_html`.

### Recommended Before Upload

- Check there are no console errors locally
- Check contact form fields
- Check mobile menu
- Check important pages
- Confirm `.htaccess` is present in `out/`

---

## Project Owner

<div align="center">

### Anas Tanveer

**Full-Stack Web Developer**

**Dubai, UAE**

---

| Channel | Link |
|---------|------|
| Portfolio | [anastanveer.com](https://anastanveer.com) |
| Company | [arsdeveloper.co.uk](https://arsdeveloper.co.uk) |
| LinkedIn | [linkedin.com/in/anas-fullstackdev](https://www.linkedin.com/in/anas-fullstackdev/) |
| Email | info@anastanveer.com |
| WhatsApp | +971 542435418 |

</div>

---

<div align="center">

**© 2026 Anas Tanveer — All Rights Reserved**

Made with care in Dubai

</div>
