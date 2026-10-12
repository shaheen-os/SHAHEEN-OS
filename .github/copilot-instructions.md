# SHAHEEN-OS Development Guide

## Project Identity

**Project Name:** SHAHEEN-OS  
**Type:** Personal technology portfolio and project showcase  
**Developer:** Yousef Z. A. Shaheen  
**Repository:** https://github.com/shaheen-os/SHAHEEN-OS  
**GitHub Pages:** https://shaheen-os.github.io/SHAHEEN-OS/

---

## File Organization

```
.
├── index.html                    # Main website (HTML5, semantic markup)
├── README.md                     # Project documentation
├── LICENSE                       # License placeholder (requires selection)
├── .gitignore                    # Git ignore rules
├── .nojekyll                     # Disable Jekyll for GitHub Pages
├── robots.txt                    # Search engine directives
├── sitemap.xml                   # XML sitemap
├── assets/
│   ├── css/style.css             # Complete design system (black-and-gold)
│   ├── js/main.js                # Interactive features (vanilla JavaScript)
│   └── images/
│       └── README.md             # Image asset documentation
└── .github/
    ├── copilot-instructions.md   # This file
    └── workflows/
        └── pages.yml             # GitHub Pages deployment workflow
```

---

## Coding Standards

### HTML

- **Semantic HTML5:** Use proper heading hierarchy (h1–h6), semantic tags (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- **Accessibility:** Include `aria-label`, `aria-expanded`, and descriptive alt text for all images.
- **SEO:** Include meta tags for description, Open Graph, Twitter Card, and canonical URLs.
- **Relative Paths:** All asset paths must use relative URLs (`assets/css/style.css`) for GitHub Pages subpath compatibility.

### CSS

- **Design System:** Use CSS custom properties (variables) defined in `:root` for colors, spacing, typography, and shadows.
- **Color Palette:**
  - Primary: `#000000` (deep black)
  - Accent: `#FFD700` (gold)
  - Secondary: `#1a1a1a` (charcoal)
  - Text: `#FFFFFF` (white) and `#E0E0E0` (light gray)
- **Responsive Design:** Mobile-first approach with breakpoints at 480px, 768px, and 1024px.
- **Accessibility:** Ensure WCAG AA color contrast. Use `@media (prefers-reduced-motion: reduce)` to respect user motion preferences.
- **No Build Tools:** Write plain CSS3 with CSS Grid, Flexbox, and CSS variables. Avoid preprocessing.

### JavaScript

- **Vanilla JavaScript:** No frameworks or build tools. Use modern ES6+ features.
- **Error Handling:** Always check if elements exist before manipulating them.
- **Mobile Navigation:** Handle menu open/close, Escape key, and click-outside behavior.
- **Smooth Scrolling:** Enhance anchor link navigation.
- **Image Fallbacks:** Gracefully handle missing or broken external images.
- **Performance:** Minimize DOM manipulation. Use event delegation where appropriate.

---

## Image URLs & Assets

### Supplied Image URLs

These URLs are exact and must be preserved:

- **Hero:** `https://i.postimg.cc/fTL1SXHn/Picsart-26-10-12-07-38-07-085.png`
- **Signature:** `https://i.postimg.cc/3NyCYKZV/Picsart-26-10-12-07-27-58-316.jpg`
- **Developer Portrait:** `https://i.postimg.cc/k56T7vXY/IMG-20261012-051209-843.jpg`
- **Identity Card:** `https://i.postimg.cc/fybWMgYs/16d9827323c509fb481973bcf4a6f069.jpg`
- **Palestine Image:** `https://i.postimg.cc/vHxbVRTW/palstaine.jpg`
- **QR Code:** `https://i.postimg.cc/SKNgHbwn/Picsart-26-10-12-07-21-57-038.png`

### Gallery Images

The visual brand gallery should reference verified URLs only. Do not fabricate or substitute image sources. If gallery image URLs are unavailable, document the missing sources in `assets/images/README.md`.

### Local Images

Local images in `assets/images/` should use relative paths:
```html
<img src="./assets/images/filename.jpg" alt="Descriptive text">
```

---

## Accessibility Requirements

- **Keyboard Navigation:** All interactive elements must be accessible via Tab key and Enter/Space to activate.
- **Focus Indicators:** Visible focus states on buttons and links (`:focus-visible` pseudo-class).
- **ARIA Labels:** Use `aria-label`, `aria-expanded`, `aria-hidden` appropriately.
- **Alt Text:** Every image must have descriptive, meaningful alt text. Decorative images use `alt=""`.
- **Color Contrast:** Minimum WCAG AA (4.5:1 for normal text).
- **Motion Preferences:** Respect `prefers-reduced-motion` and disable animations for users who prefer reduced motion.
- **Semantic Structure:** Proper heading hierarchy, list markup, and form labels.

---

## Responsive Design

### Breakpoints

- **Mobile:** < 480px (small phones)
- **Tablet (small):** 480px – 768px (large phones)
- **Tablet (large):** 768px – 1024px (landscape tablets)
- **Desktop:** ≥ 1024px (laptops and monitors)

### Guidelines

- Mobile-first CSS development
- Flexible layouts using CSS Grid and Flexbox
- Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- Test on real devices and multiple browsers

---

## Social Links & Contact Information

### Exact Social URLs (preserve as supplied)

- **Instagram:** https://www.instagram.com/_55.0_?cplk=cGNucHY5bzlxYzl0
- **TikTok:** https://www.tiktok.com/@zix8ii?_r=1&_d=f3c01a6371bii9&sec_uid=
- **Facebook:** https://www.facebook.com/share/19u4QUKFTL/
- **WhatsApp:** https://wa.link/lc6f5w
- **Telegram (personal):** https://t.me/B0SS_S0
- **Telegram (channel):** https://t.me/shaheen_os
- **Snapchat:** https://www.snapchat.com/add/fi1_oo?share_id=ez2rePla17Q&locale=ar-JO
- **Threads:** https://www.threads.com/@1.0_v_/
- **X (Twitter):** https://x.com/You_sh94
- **LinkedIn:** https://www.linkedin.com/in/yousef-z-445aba414?utm_source=share_via&utm_content=profile&utm_medium=member_android
- **Discord:** https://discord.gg/kgwKFPTmZE
- **GitHub:** https://github.com/shaheen-os

### Email Addresses (exact, no fabrication)

- SHAHEEN.OS100@GMAIL.COM
- YZAS1994@YAHOO.COM
- SHAHEEN94S@OUTLOOK.COM

---

## Privacy & Truthful Documentation

- **No Fabrication:** Do not invent project statistics, visitor counts, GitHub stars, releases, or testimonials.
- **No Secrets:** Never commit API keys, tokens, or environment variables to the repository.
- **Accurate Content:** All documentation must reflect the actual implementation and project state.
- **Social Claims:** Do not claim accounts are verified or sponsored unless verified.

---

## GitHub Pages Configuration

### Repository Settings

1. Go to **Settings** → **Pages**
2. **Source:** "Deploy from a branch"
3. **Branch:** `main` / root directory
4. **HTTPS:** Enable "Enforce HTTPS"
5. **Custom Domain:** (optional) Configure if you own a domain

### Files Required for Pages

- `.nojekyll` – Disables Jekyll processing (present in repo root)
- `.github/workflows/pages.yml` – Automated deployment workflow (if using GitHub Actions)
- `index.html` – Entry point for the site

### Expected URL

```
https://shaheen-os.github.io/SHAHEEN-OS/
```

### Deployment

- Manual: Push to `main` branch; GitHub Pages auto-deploys
- Automated: Workflow in `.github/workflows/pages.yml` handles build and deployment

---

## Contributing Guidelines

1. **Branch Strategy:** Create feature branches from `main`
2. **Commits:** Write clear, descriptive commit messages
3. **Testing:** Test locally before submitting changes:
   - Start a local server: `python -m http.server 8000`
   - Visit `http://localhost:8000`
   - Check all sections, links, and responsive behavior
4. **Accessibility:** Ensure WCAG AA compliance
5. **Mobile First:** Design and test for mobile screens first
6. **Pull Requests:** Include a clear description of changes

---

## Maintenance

### Regular Tasks

- Monitor external image URLs for broken links
- Update content as projects evolve
- Refresh social links if they change
- Maintain accurate documentation in README.md
- Keep dependencies (if any) up to date

### Issue Tracking

Use GitHub Issues for:
- Bug reports
- Feature requests
- Documentation improvements
- Design refinements

---

## License

This project uses a placeholder license (see `LICENSE` file). A deliberate license choice is required before legal use.

Recommended options:
- MIT License (permissive, popular)
- Apache License 2.0 (includes patent protection)
- GPL v3 (copyleft)
- BSD 3-Clause (permissive)
- ISC License (simple, permissive)

---

## Questions or Issues?

For help or feedback:
1. Check the README.md for common questions
2. Open a GitHub Issue with detailed context
3. Contact the developer via social links

---

**Last Updated:** October 12, 2026  
**Maintained by:** SHAHEEN-OS Project Team
