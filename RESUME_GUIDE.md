# Résumé Guide — IT & Cybersecurity

This file gives you **ready-to-paste résumé bullet points** tied directly to
the portfolio site in this repo. The golden rule: every bullet on your résumé
should point to something a recruiter can actually click or ask you about.

---

## How to use this guide

1. Complete a lab in the **Projects** section of the site.
2. Flip that project's status badge to "Ready" in `index.html`.
3. Copy the matching bullet below into your résumé under a **Projects** or
   **Technical Experience** section.
4. Add the live link: `https://<your-username>.github.io/`

> Résumé best practice: start bullets with a strong verb, include the
> technology, and state the outcome or value. Quantify wherever you can.

---

## Projects section — résumé bullets

### Home Network Hardening Lab
- Hardened a home network segment by changing default router credentials,
  disabling unused services, and isolating IoT/guest traffic on a separate
  VLAN, reducing exposure of personal devices to the public network.
- Documented the engagement end-to-end (scope, before/after, and residual
  risk) in a markdown write-up published on GitHub.

### Windows & Linux Security Baseline
- Applied CIS-baseline security controls to Windows 10 and Ubuntu VMs,
  including account lockout policy, least-privilege user configuration, and
  firewall rules, then verified configuration with a hardening checklist.
- Demonstrated cross-platform OS hardening across both Windows and Linux
  environments.

### SIEM Log Analysis Lab
- Ingested sample authentication logs into a free SIEM and authored
  detection rules for brute-force and off-hours access, producing a
  triaged incident summary with recommended response actions.
- Practiced core blue-team skills: log parsing, alert triage, and written
  incident reporting.

### Vulnerability Assessment Report
- Ran a vulnerability scanner against a deliberately vulnerable VM, triaged
  findings by CVSS severity, and authored a remediation report a non-technical
  stakeholder could act on.
- Practiced vulnerability management lifecycle: identify → prioritize →
  remediate → verify.

### Python IOC Checker
- Built a Python CLI tool that checks a list of IPs and file hashes against a
  threat-intelligence API and flags matches, demonstrating scripting and
  REST API integration.
- Wrote reusable, documented code with input validation and clear output.

### Incident Response Case Study
- Walked a sample breach through the NIST Incident Response lifecycle
  (Preparation, Detection & Analysis, Containment, Eradication, Recovery)
  and documented each phase.
- Demonstrated structured, framework-driven incident handling.

---

## Skills section — résumé keywords

Drop these into your résumé's **Skills** section (ATS systems keyword-match
these, so keep them literal):

- **Operating Systems:** Windows 10/11, Ubuntu Linux, command-line (CLI)
- **Networking:** TCP/IP, DNS, ports & protocols, Wireshark
- **Security:** security fundamentals, system hardening, access control (IAM),
  vulnerability management basics
- **Scripting:** Python, Bash, regular expressions
- **Tools:** Git/GitHub, VirtualBox, Nmap, SIEM/log analysis

---

## Certifications — how to list them

List certs under a **Certifications** section. While in progress, write
"Expected [Month Year]". Once passed, write the cert code and date.

```
CompTIA A+ (planned)            — CompTIA — Targeting 2026
CompTIA Network+ (planned)        — CompTIA
CompTIA Security+ (planned)        — CompTIA
```

Target sequence aligned to the [NIST NICE Framework](https://www.nist.gov/itl/applied-cybersecurity/nice-framework)
and CompTIA's pathway: A+ → Network+ → Security+ → CySA+.

---

## The one-line portfolio line for your résumé

> **Portfolio & lab write-ups:** github.com/<your-username> · live site:
> <your-username>.github.io

Put this near the top of your résumé (under your contact info) so recruiters
see it first.

---

## Keeping résumé numbers in sync

The "Resume at a glance" stats on the site (number of labs, OS platforms,
certs) are placeholders. Update them in `index.html` (search for
`resume__grid`) to match reality as you complete work. Never inflate numbers.

---

## References & further reading

See [`RESEARCH_REFERENCES.md`](./RESEARCH_REFERENCES.md) for the source-cited
repos, skill frameworks, and articles behind this guide.
