<div align="center">

# Anas Tanveer Portfolio

### Premium Static Next.js Portfolio for a Dubai-Based Full-Stack Web Developer

[![Website](https://img.shields.io/badge/Website-anastanveer.com-01d9ff?style=for-the-badge)](https://anastanveer.com)
[![Role](https://img.shields.io/badge/Role-Full--Stack%21Developer-7df4c8?style=for-the-badge)](#)
[![Stack](https://img.shields.io/badge/Stack-Next.js%21%7C%20Laravel%20%7C%20WordPress%20%7C%20Shopify-a78bfa?style=for-the-badge)](#)
[![Hosting](https://img.shields.io/badge/Hosting-Static%21Export%20%2B%20Namecheap-111827?style=for-the-badge)](#)

</div>

---

## Overview

This repository contains the production portfolio website for **Anas Tanveer**, a Dubai-based full-stack web developer focused on business web problem solving, Laravel platforms, WordPress business websites, Shopify ecommerce stores, dashboards, ERP systems, API integrations, speed optimization, and SEO-ready web development.

The site is built as a premium personal brand, resume, portfolio, service website, and lead-generation system for clients, recruiters, agencies, Fiverr visitors, LinkedIn visitors, and international project leads.

The project is fully static-export compatible and can be deployed on **Namecheap shared hosting** without a Node.js server.

---

## Core Stack

| Area | Technology |
|---|---|
| Framework | Next.js App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion, Lenis |
| Icons | lucide-react |
| SEO | Metadata API, JSON-LD, sitemap, robots |
| Forms | FormSubmit AJAX |
| Hosting | Static export for cPanel / Namecheap |
| Security | Apache `.htaccess` headers and rules |

---

## Key Features

- Premium dark-first portfolio UI
- Fully responsive mobile experience
- Static export for shared hosting
- SEO metadata for all pages
- JSON-LD structured data
- Blog pages with SEO-ready content
- Portfolio filters and project case studies
- Resume page with CV download
- Contact form with email delivery
- Honeypot spam protection
- Client-side submit rate limiting
- Google Search Console verification
- Apache `.htaccess` security hardening
- Optimized local images
- No API routes, server actions, or dynamic SSR

---

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3001
```

Do not open `.tsx`, `.js`, `.css`, or source files directly in the browser. This is a Next.js application and must be served through the dev server or static build output.

---

## Production Build

Run:

```bash
npm run build
```

The deployable static site is generated in:

```text
out/
```

Upload the **contents inside `out/`** to Namecheap `public_html`.

Do not upload the `out` folder itself.

Correct production structure:

```text
public_html/
  index.html
  .htaccess
  robots.txt
  sitemap.xml
  _next/
  images/
  files/
```

---

## Namecheap Deployment

Recommended manual deployment flow:

2. Run:
   ```bash
   npm run build
   ```
3. Open the `out/` folder.
4. Select everything inside `out/`.
5. Create a ZIP from the selected files.
6. Open Namecheap cPanel File Manager.
7. Go to `public_html`.
8. Enable hidden files so `.htaccess` is visible.
9. Upload the ZIP.
10. Extract it directly inside `public_html`.
11. Confirm `public_html/index.html` exists.

For every future update, rebuild and upload the latest `out/` contents.

---

## Static Export Rules

This project is configured for static hosting:

```js
output: "export",
trailingSlash: true,
images: {
  unoptimized: true
}
```

Do not add:

- API routes
- Server actions
- Dynamic SSR
- Node-only backend code
- Database dependency

External services should be used for any functionality that needs backend processing.

---

## Contact Form

The contact form works on static hosting using FormSubmit AJAX.

Emails:

| Type | Address |
|---|---|
| Primary | `info@anastanveer.com` |
| CC | `anastanveer558@gmail.com` |

Included protection:

- Required field validation
- Email format validation
- Honeypot anti-spam field
- Basic client-side rate limiting
- Loading state
- Disabled submit button while sending
- Success and error messages

Important: FormSubmit may send a first-time confirmation email to `info@anastanveer.com`. Confirm that email before expecting live submissions.

---

## SEO Setup

Included:

- Page-level titles and descriptions
- Canonical URLs
- Open Graph metadata
- Twitter card metadata
- `robots.txt`
- `sitemap.xml`
- JSON-LD schema
- Person schema
- ProfessionalService schema
- LocalBusiness schema
- WebSite schema
- Breadcrumb schema
- Blog schema
- Google Search Console verification

Google verification tag:

```html
<meta name="google-site-verification" content="gllYNE2pcbGLwfP2PMahnrbVB6fcVfM0x0gbbsiBSCg" />
```

---

## Security Setup

The static export includes `.htaccess` rules for Apache shared hosting:

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

Make sure `.htaccess` is present inside `public_html`.

---

## Important Routes

```text
/
/about/
/services/
/portfolio/
/work/
/case-studies/
/pricing/
/resume/
/blog/
/contact/
```

---

## Quality Checks

Before deployment:

```bash
npm run typecheck
npm run build
```

Then verify:

- Homepage loads correctly
- Navigation works
- Portfolio filters work
- Blog pages open
- Resume CV download works
- Contact form submits
- Mobile menu works
- `.htaccess` exists in `out/`
- `robots.txt` exists in `out/`
- `sitemap.xml` exists in `out/`

---

## Project Owner

**Anas Tanveer**  
Full-Stack Web Developer  
Dubai, UAE  

- Website: [https://anastanveer.com](https://anastanveer.com)
- Company: [https://arsdeveloper.co.uk](https://arsdeveloper.co.uk)
- LinkedIn: [https://www.linkedin.com/in/anas-fullstackdev/](https://www.linkedin.com/in/anas-fullstackdev/)
- Email: `info@anastanveer.com`
- WhatsApp: `+972 542435418`
