# SHAHEEN-OS

**Personal Technology Portfolio & Project Showcase**

A luxurious, responsive portfolio website built with modern web technologies, featuring a refined black-and-gold visual identity.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Developer Profile](#developer-profile)
3. [Website Structure](#website-structure)
4. [Features](#features)
5. [Technology Stack](#technology-stack)
6. [Repository Structure](#repository-structure)
7. [Setup & Local Preview](#setup--local-preview)
8. [Customization Guide](#customization-guide)
9. [GitHub Pages Configuration](#github-pages-configuration)
10. [SEO & Sitemap](#seo--sitemap)
11. [Accessibility & Responsive Design](#accessibility--responsive-design)
12. [Troubleshooting](#troubleshooting)
13. [Palestine Solidarity](#palestine-solidarity)
14. [Connect & Contact](#connect--contact)
15. [License](#license)

---

## Project Overview

**SHAHEEN-OS** is a comprehensive personal technology portfolio that showcases professional achievements, creative projects, and community engagement. The website demonstrates excellence in full-stack development, responsive design, and accessible web standards.

### Hero Artwork

![SHAHEEN-OS Hero Banner](https://i.postimg.cc/fTL1SXHn/Picsart-26-10-12-07-38-07-085.png)

### Signature

![SHAHEEN-OS Signature](https://i.postimg.cc/3NyCYKZV/Picsart-26-10-12-07-27-58-316.jpg)

**𝐒𝐇𝐀𝐇𝐄𝐄𝐍-𝐎𝐒**

---

## Developer Profile

### Display Name
**»𝐘𝐎𝐔𝐒𝐄𝐅 𝐙. 𝐀. 𝐒𝐇𝐀𝐇𝐄𝐄𝐍«**

### Developer Portrait

![Developer Portrait](https://i.postimg.cc/k56T7vXY/IMG-20261012-051209-843.jpg)

### Developer Identity Card

![Developer Identity Card](https://i.postimg.cc/fybWMgYs/16d9827323c509fb481973bcf4a6f069.jpg)

### Professional Summary

Full-stack developer and creative technologist passionate about building innovative solutions, exploring emerging technologies, and contributing to open-source communities. Dedicated to creating beautiful, functional, and accessible digital experiences.

### Contact Information

- **Email 1:** [SHAHEEN.OS100@GMAIL.COM](mailto:SHAHEEN.OS100@GMAIL.COM)
- **Email 2:** [YZAS1994@YAHOO.COM](mailto:YZAS1994@YAHOO.COM)
- **Email 3:** [SHAHEEN94S@OUTLOOK.COM](mailto:SHAHEEN94S@OUTLOOK.COM)

---

## Website Structure

The website includes the following sections:

1. **Home / Hero** – Welcome section with compelling call-to-action
2. **About SHAHEEN-OS** – Project identity and mission statement
3. **Developer Profile** – Professional information and contact details
4. **Projects & Technology Interests** – Key areas of expertise and focus
5. **Releases & Version History** – Project version tracking and changelog
6. **Visual Brand Gallery** – Curated collection of design references
7. **Palestine Solidarity** – Meaningful social and cultural statement
8. **Contact & Social Links** – Multiple channels for connection
9. **Footer** – Navigation and copyright information

---

## Features

✓ **Responsive Design** – Optimized for mobile, tablet, laptop, and desktop  
✓ **Accessible Navigation** – Keyboard-friendly menu with ARIA labels  
✓ **Black & Gold Aesthetic** – Premium, modern visual identity  
✓ **Semantic HTML5** – Proper document structure and SEO  
✓ **CSS Variables** – Consistent design system and easy customization  
✓ **Smooth Animations** – Respects `prefers-reduced-motion` preference  
✓ **Mobile Menu** – Working hamburger navigation  
✓ **Social Integration** – Direct links to all social profiles  
✓ **Accessible Images** – Meaningful alt text for all graphics  
✓ **No Build Tools Required** – Pure HTML, CSS, and vanilla JavaScript  
✓ **GitHub Pages Compatible** – Deploys as static site  

---

## Technology Stack

| Component | Technology |
|-----------|-----------|
| **Markup** | HTML5 |
| **Styling** | CSS3 (CSS Grid, Flexbox, Custom Properties) |
| **Scripting** | Vanilla JavaScript (ES6+) |
| **Hosting** | GitHub Pages |
| **Version Control** | Git / GitHub |
| **Static Analysis** | SEO, Accessibility, Performance |

---

## Repository Structure

```
shaheen-os/SHAHEEN-OS/
├── index.html                      # Main website homepage
├── README.md                        # This file
├── LICENSE                          # License file (placeholder)
├── .gitignore                       # Git ignore rules
├── robots.txt                       # Search engine directives
├── sitemap.xml                      # XML sitemap
├── .nojekyll                        # Disable Jekyll processing
├── assets/
│   ├── css/
│   │   └── style.css               # Complete stylesheet
│   ├── js/
│   │   └── main.js                 # Interactive functionality
│   └── images/
│       └── README.md               # Image asset documentation
└── .github/
    ├── copilot-instructions.md     # Development guidance
    └── workflows/
        └── pages.yml               # GitHub Pages workflow (if applicable)
```

---

## Setup & Local Preview

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime, etc.)
- Git (optional, for cloning)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shaheen-os/SHAHEEN-OS.git
   cd SHAHEEN-OS
   ```

2. **Open in a web browser:**
   - Double-click `index.html`, or
   - Use a local server:
     ```bash
     # Python 3.x
     python -m http.server 8000
     
     # Or Node.js (if installed)
     npx serve
     ```
   - Visit `http://localhost:8000` in your browser

3. **View the live site:**
   - Once deployed: [https://shaheen-os.github.io/SHAHEEN-OS/](https://shaheen-os.github.io/SHAHEEN-OS/)
   - (Deployment status pending verification)

---

## Customization Guide

### Edit Content

**File:** `index.html`

- **Hero Section:** Update heading, subtitle, and call-to-action text
- **About Section:** Modify project description and mission statement
- **Developer Info:** Change name, bio, and contact email addresses
- **Projects Section:** Add or remove project cards
- **Footer:** Update copyright year and links

### Edit Styles

**File:** `assets/css/style.css`

All colors, spacing, and typography use CSS custom properties (variables) defined at the top of the file:

```css
:root {
    --color-primary: #000000;      /* Deep black */
    --color-accent: #FFD700;       /* Gold */
    --color-secondary: #1a1a1a;    /* Charcoal */
    /* ... more variables ... */
}
```

To customize:
1. Open `assets/css/style.css`
2. Modify the CSS variables in the `:root` selector
3. Adjust responsive breakpoints as needed

### Edit Behavior

**File:** `assets/js/main.js`

- **Mobile Menu:** Toggle behavior for hamburger navigation
- **Smooth Scrolling:** Navigation link interactions
- **Error Handling:** Fallback for missing images

All interactive features are implemented with vanilla JavaScript and do not require external libraries.

### Add or Replace Gallery Images

**File:** `assets/images/README.md` (documentation)

The visual brand gallery displays curated design references. To update:

1. Retrieve the image URL (external or local)
2. Open `index.html` and locate the gallery section
3. Add or modify image entries in `.gallery-grid`
4. Include descriptive alt text for accessibility
5. Document the source in `assets/images/README.md`

**Important:** All images are currently externally hosted. Local images can be added to `assets/images/` directory and referenced with relative paths like `./assets/images/filename.jpg`.

---

## GitHub Pages Configuration

### Expected Deployment URL

```
https://shaheen-os.github.io/SHAHEEN-OS/
```

### Required Repository Settings

1. Go to repository **Settings** → **Pages**
2. **Source:** Select "Deploy from a branch"
3. **Branch:** Select `main` / `root` directory
4. **Custom Domain:** (optional) Add if you own a domain
5. **HTTPS:** Ensure "Enforce HTTPS" is enabled

### Workflow

An optional GitHub Actions workflow (`.github/workflows/pages.yml`) can automate deployment. If configured, it will:

1. Trigger on push to `main`
2. Build and deploy to GitHub Pages
3. Report status in repository

Manual deployment is also supported: GitHub Pages automatically deploys any changes pushed to the default branch.

### Verification

Once deployed:

1. Visit the URL above in a browser
2. Verify all assets load correctly
3. Test navigation and social links
4. Check mobile responsiveness
5. Inspect browser console for JavaScript errors

**Deployment Status:** Pending verification (check repository Pages settings)

---

## SEO & Sitemap

### Meta Tags

The website includes:

- **Title & Description:** For search engines and social preview
- **Open Graph Tags:** For Facebook, LinkedIn, and other platforms
- **Twitter Card Tags:** For Twitter/X sharing
- **Canonical URL:** Prevents duplicate content penalties
- **Robots Meta:** Directs search engine crawlers

### Sitemap

**File:** `sitemap.xml`

- Lists all publicly accessible pages
- Specifies priority and update frequency
- Automatically discovered by search engines

Current entries:
- Homepage (`/`)

Additional pages can be added as the site grows.

### robots.txt

**File:** `robots.txt`

- Allows indexing of public content
- Blocks `/.github/` and `/assets/` from crawlers
- Points to the sitemap

---

## Accessibility & Responsive Design

### Accessibility Features

✓ **Semantic HTML5** – Proper heading hierarchy and document structure  
✓ **ARIA Labels** – Screen reader guidance for interactive elements  
✓ **Keyboard Navigation** – All links and buttons accessible via Tab key  
✓ **Focus Indicators** – Visible focus states on interactive elements  
✓ **Color Contrast** – WCAG AA compliant text contrast ratios  
✓ **Alt Text** – Descriptive alternative text for all images  
✓ **Reduced Motion** – Respects user's motion preferences  

### Responsive Breakpoints

| Breakpoint | Device | Width |
|-----------|--------|-------|
| Mobile | Small phones | < 480px |
| Tablet (small) | Large phones | 480px – 768px |
| Tablet (large) | Landscape tablets | 768px – 1024px |
| Desktop | Laptops and monitors | ≥ 1024px |

The website automatically adjusts layouts, fonts, and spacing for optimal viewing on all screen sizes.

---

## Troubleshooting

### Common Issues

#### **Issue:** Images not loading

**Solution:**
1. Verify image URLs are correct in `index.html`
2. Check network connection
3. External hosted images may require HTTPS
4. Test in browser DevTools (Network tab) for specific errors

#### **Issue:** Styles not applying

**Solution:**
1. Confirm `assets/css/style.css` exists in the repository
2. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
3. Verify CSS file path is relative: `href="assets/css/style.css"`
4. Check browser console for CSS loading errors

#### **Issue:** Mobile menu not working

**Solution:**
1. Ensure `assets/js/main.js` is loaded correctly
2. Check browser console for JavaScript errors
3. Verify HTML contains the nav toggle button with ID `navToggle`
4. Test in a different browser

#### **Issue:** GitHub Pages not updating

**Solution:**
1. Wait 1-2 minutes for deployment to complete
2. Verify branch is set to `main` in Pages settings
3. Check GitHub Actions workflow status (if using automation)
4. Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)

#### **Issue:** Navigation links don't scroll smoothly

**Solution:**
1. Verify all section IDs exist in `index.html`
2. Check that anchor links use correct format: `href="#section-id"`
3. Confirm JavaScript is not blocked in browser settings

---

## Palestine Solidarity

### Message

![🇵🇸 PALESTINE 🇵🇸](https://i.postimg.cc/vHxbVRTW/palstaine.jpg)

**🇵🇸 𝐏𝐀𝐋𝐄𝐒𝐓𝐈𝐍𝐄 🇵🇸**

This project acknowledges and respects the Palestinian people and their ongoing struggles. We stand in solidarity with communities working toward justice, peace, and self-determination.

---

## Connect & Contact

Follow and connect with SHAHEEN-OS across multiple platforms:

### Social Links

- **Instagram:** [@_55.0_](https://www.instagram.com/_55.0_?cplk=cGNucHY5bzlxYzl0)
- **TikTok:** [@zix8ii](https://www.tiktok.com/@zix8ii?_r=1&_d=f3c01a6371bii9&sec_uid=)
- **Facebook:** [SHAHEEN-OS Page](https://www.facebook.com/share/19u4QUKFTL/)
- **WhatsApp:** [Connect on WhatsApp](https://wa.link/lc6f5w)
- **Telegram (Personal):** [@B0SS_S0](https://t.me/B0SS_S0)
- **Telegram (Channel):** [@shaheen_os](https://t.me/shaheen_os)
- **Snapchat:** [Add fi1_oo](https://www.snapchat.com/add/fi1_oo?share_id=ez2rePla17Q&locale=ar-JO)
- **Threads:** [@1.0_v_](https://www.threads.com/@1.0_v_/)
- **X (Twitter):** [@You_sh94](https://x.com/You_sh94)
- **LinkedIn:** [Yousef Z. Shaheen](https://www.linkedin.com/in/yousef-z-445aba414?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Discord:** [Join Server](https://discord.gg/kgwKFPTmZE)
- **GitHub:** [@shaheen-os](https://github.com/shaheen-os)

### Email Addresses

- **Primary:** [SHAHEEN.OS100@GMAIL.COM](mailto:SHAHEEN.OS100@GMAIL.COM)
- **Secondary:** [YZAS1994@YAHOO.COM](mailto:YZAS1994@YAHOO.COM)
- **Alternative:** [SHAHEEN94S@OUTLOOK.COM](mailto:SHAHEEN94S@OUTLOOK.COM)

### QR Code

![QR Code for SHAHEEN-OS](https://i.postimg.cc/SKNgHbwn/Picsart-26-10-12-07-21-57-038.png)

Scan this QR code to visit the SHAHEEN-OS repository on GitHub.

---

## Maintenance & Contributions

### Repository Guidelines

This is an open-source portfolio project. Contributions, suggestions, and feedback are welcome.

**To contribute:**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes with clear messages
4. Push to your fork
5. Submit a pull request with a description

**Guidelines:**

- Keep the black-and-gold design aesthetic
- Maintain accessibility standards (WCAG AA minimum)
- Ensure responsive design for all screen sizes
- Add meaningful alt text to all images
- Test locally before submitting changes
- Document significant changes in the README

### Code of Conduct

This project welcomes contributors of all backgrounds. Please be respectful and constructive in all interactions.

---

## License

This repository currently uses a placeholder license. For license selection and legal terms, please refer to the `LICENSE` file.

To apply an open-source license, choose one of:
- MIT License
- Apache License 2.0
- GPL v3
- BSD 3-Clause
- ISC License

Or create a custom license suitable for this project.

---

## Footer

**SHAHEEN-OS**  
Personal Technology Portfolio & Project Showcase

**Developed by:** Yousef Z. A. Shaheen  
**Repository:** [https://github.com/shaheen-os/SHAHEEN-OS](https://github.com/shaheen-os/SHAHEEN-OS)  
**Live Website:** [https://shaheen-os.github.io/SHAHEEN-OS/](https://shaheen-os.github.io/SHAHEEN-OS/)

---

**© 2026 SHAHEEN-OS. All rights reserved.**

Last updated: October 12, 2026
