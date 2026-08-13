# Assimilation Tech – Static Website

A static website mirroring [www.assimilationtech.com](https://www.assimilationtech.com), built with plain HTML, CSS, and JavaScript. Designed to be deployed via GitHub Pages or any static host.

## Pages

| File | URL path | Description |
|------|----------|-------------|
| `index.html` | `/` | Home – hero, services overview, about snippet, testimonials, CTA |
| `services.html` | `/services.html` | Full services detail – Managed IT, Cloud, Cybersecurity, Networking, Backup & DR, Consulting |
| `about.html` | `/about.html` | About – mission, values, team |
| `contact.html` | `/contact.html` | Contact form and contact details |

## Local Preview

No build step required. Just open the files in a browser:

```bash
# Option 1 – Python (built-in)
python3 -m http.server 8080
# then visit http://localhost:8080

# Option 2 – Node.js (npx)
npx serve .
# then visit http://localhost:3000
```

## Deployment – GitHub Pages

1. Go to **Settings → Pages** in the repository.
2. Under *Source*, select **Deploy from a branch**.
3. Choose `main` branch and `/ (root)` folder.
4. Save — the site will be live at `https://<username>.github.io/<repo>/`.

The `.nojekyll` file is already included so GitHub Pages serves the site as-is without Jekyll processing.

## Structure

```
/
├── index.html
├── services.html
├── about.html
├── contact.html
├── .nojekyll
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── images/
        └── favicon.svg
```

## Notes

- All placeholder contact details (phone numbers, email addresses) have been removed. Update these with real, verified information.
- All invented statistics, founding-year claims, fabricated testimonials, and invented team-member bios have been removed. These were generated without verified source material and do not reflect the actual business. Replace with accurate information as required.
- No external dependencies — all styles and scripts are self-contained.
- Responsive design supports mobile, tablet, and desktop viewports.
