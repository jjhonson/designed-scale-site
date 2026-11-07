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

## Search visibility
The public pages are eligible for indexing. Page-level `noindex` tags, the crawl block in `robots.txt`, and the Netlify `X-Robots-Tag` header were removed for the search-ready launch.

- `robots.txt` allows crawlers and points to `/sitemap.xml`.
- `sitemap.xml` includes the six public pages, with their canonical HTTPS URLs.
- Each page declares a canonical URL and social sharing URL. Netlify serves clean extensionless page addresses, which are used consistently in the canonical tags and sitemap.

After deployment, verify the pages, `/robots.txt`, and `/sitemap.xml` on `https://designedscale.com/`. Then add `designedscale.com` as a Domain property in Google Search Console, verify ownership via Cloudflare DNS, submit the sitemap, and use URL Inspection to check the homepage and key service pages.

Google decides whether and when to index eligible pages; sitemap submission and URL inspection are not guarantees.
