# Designed Scale

**Live site:** https://designedscale.com/

Designed Scale is Jason Jhonson's independent advisory practice, focused on helping technology companies turn promising products and early traction into repeatable growth.

## Purpose

Explain where Jason can help founders, CEOs, and investors at strategic or commercial inflection points. The work connects market choices, product and offer design, go-to-market execution, commercial economics, and the teams and systems needed to scale. It is an experienced operator's practice, not a generic consulting brochure or a catalog of fractional CRO hours.

## Audience and role

Built for founders, CEOs, investors, boards, and business leaders facing growth, commercialization, or organizational transitions. It is the commercial/advisory counterpart to Jason's broader professional presence:

- [jasonjhonson.com](https://jasonjhonson.com/) provides Jason's career context, current projects, and wider professional identity.
- [Notes](https://notes.jasonjhonson.com/) is the separate home for essays and Build Notes that demonstrate his thinking.
- [LinkedIn](https://www.linkedin.com/in/jasonjhonson/) supports professional discovery and introductions.

The sites should reinforce one another without repeating the same content.

## Site content

This is a six-page site: **Home**, **What I Do**, **Ways to Work Together**, **Selected Work**, **About**, and **Contact**. It describes the problems Jason works on, the types of engagements available (projects, fractional or interim leadership, and advisory), relevant experience, and a direct way to get in touch.

The tone should be direct, practical, and grounded in operating experience. Lead with the business problem and the judgment required to solve it, not a list of fashionable services.

## Stack and deployment

- Static **HTML, CSS, and JavaScript**. No framework, package manager, database, or build command is required.
- Each page lives in a root-level `.html` file. `style.css` is the primary stylesheet, `site.js` handles the mobile navigation, and `assets/` holds shared design assets.
- Source is in this GitHub repository. Netlify deploys the `main` branch with publish directory `.` and serves clean page URLs without `.html`.
- Cloudflare manages DNS. The domain also uses Google Workspace for email; website DNS changes should preserve its mail records.
- Contact is a direct `mailto:` link to `jason@designedscale.com`. There is no contact-form backend or stored visitor data.

## Integrations and connected sites

Designed Scale links to Jason's personal site for broader context. Long-form writing is published in Ghost at Notes rather than maintained in this codebase. Keep engagement information and case examples here; keep essays and Build Notes at their publishing home.

## Maintenance

Edit the appropriate HTML page, `style.css`, `site.js`, or assets, commit to `main`, and check the Netlify deployment. Verify the navigation, mobile layouts, contact email, and cross-site links after changes. Development can be AI-assisted, with Jason making the positioning and product decisions and reviewing the published result.

Avoid committing credentials or disturbing Google Workspace DNS records. [README.txt](README.txt) is a historical prototype/version log; this README describes the current site.

## Search visibility

All six public pages are eligible for crawling, with canonical URLs, a permissive `robots.txt`, and a six-page `sitemap.xml`. The `designedscale.com` Domain property is verified in Google Search Console under `jason@designedscale.com`; the sitemap was submitted successfully and Google discovered six URLs on November 6, 2026. Discovery does not guarantee indexing.
