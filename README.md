# Designed Scale Advisory site

## Deploy from GitHub to Netlify

1. Put these files in the root of your GitHub repository and push them.
2. In Netlify: Add new project -> Import an existing project -> GitHub.
3. Select the repository.
4. No build command is needed.
5. Publish directory: `.`
6. Deploy.
7. Add `designedscale.com` as a custom domain in Netlify.
8. Keep Cloudflare as the DNS provider and add only the website records Netlify requests.
9. Do not change the Google Workspace MX/TXT records already in Cloudflare.

## Quiet launch
This version is intentionally unindexed via:
- meta robots `noindex,nofollow`
- `robots.txt`
- `X-Robots-Tag` in `netlify.toml`

Remove those when you want the site indexed.
