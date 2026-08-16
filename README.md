# Oreoluwa Fagbamiye — IT & Cybersecurity Portfolio

A fast, static portfolio website built with plain HTML, CSS, and a little
JavaScript — designed to be hosted for free on **GitHub Pages** and to
strengthen an entry-level IT/cybersecurity résumé.

🔗 **Live site (after publishing):** `https://<your-github-username>.github.io/`

---

## Why this project helps your résumé

Recruiters and hiring managers for IT/security roles increasingly look at a
candidate's GitHub as proof of skills. A polished, documented portfolio shows:

- **Hands-on practice** — labs you actually built, not just concepts you read about.
- **Communication** — clear READMEs and write-ups (a core security skill).
- **Version control fluency** — real commit history with meaningful messages.
- **A live artifact** — a link you can put on your résumé that works instantly.

See [`RESUME_GUIDE.md`](./RESUME_GUIDE.md) for ready-to-paste résumé bullets and
[`RESEARCH_REFERENCES.md`](./RESEARCH_REFERENCES.md) for the repos, frameworks,
and articles this project was built from.

---

## What's inside

```
portfolio/
├── index.html              # The site (hero, about, skills, projects, certs, contact)
├── styles.css              # Design system: dark "terminal" theme + light mode
├── script.js               # Theme toggle + animated terminal
├── README.md               # This file
├── RESUME_GUIDE.md         # Résumé bullet points + how to keep them in sync
├── RESEARCH_REFERENCES.md  # Source-cited repos, frameworks & references
└── .nojekyll                # Tells GitHub Pages to serve files as-is
```

---

## Run it locally

No build step needed. From this folder:

```bash
# Option 1: just open the file
open index.html            # macOS
xdg-open index.html         # Linux

# Option 2: serve it (recommended — fonts & JS behave like production)
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Publish it on GitHub Pages

1. Create a new repository on GitHub named exactly:
   `<your-github-username>.github.io`
   (e.g. `oreolufagbamiye.github.io`). This gives you the clean root URL.
   If that name is taken, name it `cybersecurity-portfolio` instead and use a
   project Pages site (steps below).

2. Push these files to that repo's `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Add cybersecurity portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

3. In the repo on GitHub: **Settings → Pages → Build and deployment →
   Deploy from a branch**. Choose the `main` branch and the `/ (root)` folder.
   For a repo named `<username>.github.io` it's live immediately at
   `https://<username>.github.io/`. For a project repo it's at
   `https://<username>.github.io/<repo>/`.

4. Wait ~1 minute, then visit your URL. Done — put it on your résumé.

Official docs: [GitHub Pages — Creating your site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-your-site)

---

## How to customize it (no coding experience required)

Open `index.html` in any text editor (VS Code, Notepad++, etc.) and edit the
text directly. The most useful edits:

| Want to change…        | Look in `index.html` for…                              |
| ---------------------- | ------------------------------------------------------ |
| Your name / hero text   | `<h1>` inside `<section class="hero">`                |
| About paragraphs        | `<div class="about__text">`                            |
| Skill cards / tags      | `<section id="skills">` → `.skill-card` blocks         |
| Projects                | `<section id="projects">` → `.project-card` blocks     |
| Certifications          | `<section id="certs">` → `.cert` blocks                |
| Contact links (GitHub, LinkedIn) | `<section id="contact">` → the two `<a href>` links |

Then commit and push again — GitHub Pages redeploys automatically.

> **Tip:** replace the placeholder GitHub/LinkedIn links in the Contact
> section and footer with your real profile URLs before publishing.

---

## Keeping it honest

The project cards are marked **"In progress"**. Only flip a card's badge to
"Ready" (add the class `is-ready` to its `.status-badge`) once you've actually
completed the lab and added a write-up. Recruiters respect accuracy.

---

## Tech & credits

- **Fonts:** JetBrains Mono (display) + Inter (body) — [Google Fonts](https://fonts.google.com/)
- **Icons:** Inline SVG, no external icon library.
- **Built with** guidance from the Perplexity website-building design system.

© Oreoluwa Fagbamiye. Free to use and adapt for your own portfolio.
