# NEFFTO IT SOLUTION — Website & Marketplace Management Department

> **Build. Scale. Grow.**  
> Official Website: [https://www.nefftosolution.com/](https://www.nefftosolution.com/)

A modern, high-performance web agency platform upgraded with a dedicated **eBay & Etsy Marketplace Management Department** alongside all existing IT services (Web Development, App Development, AI & ML, Digital Marketing, Graphic Design, SEO), built using **React 18, Vite, Tailwind CSS, Framer Motion**, and a **secure database-free Core PHP form handler**.

---

## 🚀 Key Features

### 1. Marketplace Management Department (New)
* **eBay Store Management** (`/services/ebay-management`)
  * 14 comprehensive service deliverables (eligibility audit, title/description optimization, item specifics, Cassini SEO, Promoted Listings, order/inventory workflows, monthly reports).
  * Transparent package tiers (Starter, Growth, Custom Enterprise).
  * Honest disclaimers: no guaranteed rankings or sales; zero claims of official eBay certification.
* **Etsy Shop Management** (`/services/etsy-management`)
  * Full alignment with Etsy seller policies (handmade authorship, vintage goods, production partner disclosures).
  * Strict prohibition against unauthorized reselling and dropshipping.
  * 13-tag keyword research, visual identity design, sectioning, and shop SEO.
* **Product & Niche Research** (`/services/product-research`)
  * Data-informed competitor analysis, demand volume evaluation, and margin viability.
* **Listing Optimization** (`/services/listing-optimization`)
  * Character-optimized titles, complete item specifics, compliant product imagery.
* **Store Operations & Management** (`/services/store-management`)
  * Operational procedures, customer response templates, monthly KPI reviews.
* **Marketplace Overview Hub** (`/marketplace-services`)
  * Overview of all services, target international markets (USA, UK, Canada, Australia), and package comparisons.

### 2. Preserved IT Services
All original services remain fully operational and cross-linked:
* **Web Development** (`/services/web-development`)
* **App Development** (`/services/app-development`)
* **AI & Machine Learning** (`/services/ai-machine-learning`)
* **Digital Marketing** (`/services/digital-marketing`)
* **Graphic Designing** (`/services/graphic-designing`)
* **SEO Services** (`/services/seo`)

### 3. Consultation & Contact System (Core PHP — Zero Database)
* **No Database Required**: Zero MySQL, SQLite, or MongoDB footprint. Inquiries are never stored on disk or exposed to web scraping.
* **Authenticated SMTP via PHPMailer**: Deliveries route through authenticated SMTP (Gmail, Brevo, Mailgun, etc.) with automatic fallback to native PHP `mail()`.
* **Security & Spam Protection**:
  * Invisible honeypot traps for automated bots.
  * Session-based rate limiting (max 3 submissions per 10 minutes).
  * Complete input sanitization (`htmlspecialchars`, `strip_tags`, `FILTER_VALIDATE_EMAIL`).
  * Direct file protection against unauthorized browsing.
* **Automated Confirmations**: Submitters receive professional HTML confirmation emails.

### 4. SEO & Compliance Architecture
* Dynamic metadata for all routes via `react-helmet-async` (titles, canonical links, OpenGraph, Twitter Cards).
* Schema.org structured data for Organization and Service entities.
* Up-to-date XML Sitemap (`/sitemap.xml`) and `robots.txt`.
* Dedicated legal pages: Privacy Policy, Terms & Conditions, Disclaimer, Cookies Policy, and Refund Policy.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 18 + Vite |
| **Routing** | React Router v6 (lazy-loaded routes) |
| **Styling** | Tailwind CSS v3 (custom navy/accent palette) |
| **Animation** | Framer Motion (subtle scroll & hover reveals) |
| **Icons** | Lucide React |
| **Backend / Form Delivery** | Core PHP 8.x + PHPMailer |
| **Database** | None (Zero database architecture) |

---

## 📂 Project Structure

```
neffto-website/
├── public/
│   ├── php/
│   │   ├── contact.php       # Core PHP email processor
│   │   └── config.php        # SMTP credentials template (do not commit)
│   ├── .htaccess             # Apache routing & security headers
│   ├── favicon.ico
│   ├── hero-bg.webp          # Live site hero background
│   ├── logo.png              # Neffto logo
│   ├── title.png             # Site icon
│   ├── robots.txt            # Search engine directives
│   └── sitemap.xml           # Full XML sitemap
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   └── ConsultationForm.jsx # Reusable inquiry form
│   │   ├── layout/
│   │   │   ├── Footer.jsx           # Site footer with legal notices
│   │   │   ├── Layout.jsx           # Main wrapper
│   │   │   └── Navbar.jsx           # Header with dropdowns & mobile drawer
│   │   └── ui/
│   │       ├── PageLoader.jsx       # Suspense route fallback
│   │       └── SEO.jsx              # Meta tag & JSON-LD helper
│   ├── pages/
│   │   ├── it-services/             # 6 IT service pages
│   │   ├── marketplace/             # 6 Marketplace service pages
│   │   ├── legal/                   # 5 Legal compliance pages
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogDetail.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── NotFound.jsx
│   │   └── Services.jsx
│   ├── App.jsx                      # Router & scroll restoration
│   ├── index.css                    # Tailwind layers & custom utilities
│   └── main.jsx                     # Entry point
├── .env.example
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Local Development Setup

### 1. Prerequisites
* Node.js v18+ and npm
* PHP 8.0+ (optional, for testing email dispatch locally)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Frontend Dev Server
```bash
npm run dev
```
The site will run at `http://localhost:3000` (or `http://localhost:5173`).

---

## 📧 SMTP Configuration (Email Delivery)

### Option A: Using `config.php` (Recommended for Shared Hosting / cPanel)
1. In `public/php/config.php`, configure your SMTP credentials:
   ```php
   define('SMTP_HOST', 'smtp.gmail.com');
   define('SMTP_PORT', '587');
   define('SMTP_ENCRYPTION', 'tls');
   define('SMTP_USER', 'your-email@gmail.com');
   define('SMTP_PASS', 'your-gmail-app-password');
   define('BUSINESS_EMAIL', 'info@nefftosolution.com');
   define('BUSINESS_NAME', 'NEFFTO IT Solution');
   define('SITE_URL', 'https://www.nefftosolution.com');
   ```

2. **For Gmail users**:
   * Enable 2-Step Verification on your Google account.
   * Generate an App Password at: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
   * Paste the 16-character code into `SMTP_PASS`.

3. **Security Best Practice for cPanel/Shared Hosting**:
   * Move `config.php` **above** the `public_html` root directory (e.g. `/home/username/neffto-config.php`).
   * Update line 57 of `contact.php`:
     ```php
     $config_file = dirname(dirname(__DIR__)) . '/neffto-config.php';
     ```

### Option B: Using Environment Variables (Recommended for VPS / Docker)
Set these variables directly on the server:
```bash
export SMTP_HOST="smtp.gmail.com"
export SMTP_PORT="587"
export SMTP_ENCRYPTION="tls"
export SMTP_USER="your-email@gmail.com"
export SMTP_PASS="your-app-password"
export BUSINESS_EMAIL="info@nefftosolution.com"
```

---

## 🚢 Production Deployment

### Building the Project
```bash
npm run build
```
This generates the optimized static build in the `dist/` directory.

### Uploading to Shared Hosting / cPanel:
1. Upload the entire contents of the `dist/` folder to your server's `public_html/` directory.
2. Verify that `public_html/.htaccess` and `public_html/php/contact.php` are uploaded.
3. If using Composer on your host, run `composer require phpmailer/phpmailer` in the project root. Alternatively, upload the `PHPMailer` source files to `public_html/php/phpmailer/`.
4. Test a form submission on the live website. Check both your business inbox and the submitter's inbox for confirmation.

---

## 🛡️ Brand Compliance & Integrity
* **No Unofficial Marketplace Claims**: Neither eBay Inc. nor Etsy Inc. logos are used in any misleading fashion.
* **No Fabricated Data**: No fake revenue screenshots, counterfeit testimonials, or claims of guaranteed search positions.
* **Independent Service Notices**: Plainly displayed across all marketplace service pages and site footer.
