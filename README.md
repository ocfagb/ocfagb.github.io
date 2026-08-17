# Oreoluwa Fagbamiye — Cybersecurity & IT Operations Portfolio

A fast, static portfolio website built with plain HTML, CSS, and a little
JavaScript — hosted for free on **GitHub Pages** and positioned to complement a
mid-level cybersecurity/IT operations résumé.

🔗 **Live site:** [ocfagb.github.io](https://ocfagb.github.io)
📦 **Repo:** [github.com/ocfagb/ocfagb.github.io](https://github.com/ocfagb/ocfagb.github.io)

---

## About this portfolio

This site showcases 3+ years of enterprise government experience in identity &
privileged access management, endpoint lifecycle, security operations, and
network infrastructure — plus hands-on security projects and industry
certifications. It's designed to be the link recruiters see at the top of a
résumé.

- **Experience:** Fulton County Government (Network & Security Specialist),
  Allied Universal, TKincorporated.
- **Certifications:** CompTIA Security+, EC-Council CHFI, ITIL 4, AWS Cloud
  Practitioner, Google IT Support & Data Analytics.
- **Projects:** Metasploit pen-test lab, NSA Codebreaker Challenge, Python/
  LangChain AI agent, drone hacking, Snort IDS signatures, Cisco/pfSense lab.

See [`RESUME_GUIDE.md`](./RESUME_GUIDE.md) for résumé bullets aligned to this
experience and [`RESEARCH_REFERENCES.md`](./RESEARCH_REFERENCES.md) for the
repos, frameworks, and articles behind the build.

---

## What's inside

```
portfolio/
├── index.html              # The site (hero, about, experience, skills, projects, certs, contact)
├── styles.css              # Design system: dark "terminal" theme + light mode
├── script.js               # Theme toggle + animated terminal
├── README.md               # This file
├── RESUME_GUIDE.md         # Résumé bullet points tied to real experience
├── RESEARCH_REFERENCES.md  # Source-cited repos, frameworks & references
└── .nojekyll                # Tells GitHub Pages to serve files as-is
```

---

## Run it locally

No build step needed. From this folder:

```bash
# serve it (recommended — fonts & JS behave like production)
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## How to customize it

Open `index.html` in any text editor (VS Code recommended) and edit the text
directly. Useful anchors:

| Want to change…        | Look in `index.html` for…                              |
| ---------------------- | ------------------------------------------------------ |
| Name / hero text         | `<section class="hero">` → `<h1>`                      |
| About paragraphs         | `<div class="about__text">`                            |
| Experience bullets       | `<section id="experience">` → `.exp-item` blocks       |
| Skill cards / tags       | `<section id="skills">` → `.skill-card` blocks         |
| Projects                | `<section id="projects">` → `.project-card` blocks     |
| Certifications          | `<section id="certs">` → `.cert-card` blocks            |
| Contact links           | `<section id="contact">` → the `<a href>` links         |

Then commit and push — GitHub Pages redeploys automatically:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

---

## Adding project write-ups

Each project card currently summarizes work from the résumé. To make a project
link to a full write-up, create a folder (e.g. `projects/metasploit-lab/`) with
a `README.md` containing scope, steps, screenshots, and lessons learned, then
link the card's heading to it. This strengthens the portfolio over time.

---

## Tech & credits

- **Fonts:** JetBrains Mono (display) + Inter (body) — [Google Fonts](https://fonts.google.com/)
- **Icons:** Inline SVG, no external icon library.

© Oreoluwa Fagbamiye. Atlanta, GA.
