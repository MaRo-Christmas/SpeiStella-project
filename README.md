# SpeiStella — Static Starter

## Quick start

1. Serve locally (to enable HTML includes via fetch):
   - Python: `python3 -m http.server 5173`
   - Or VS Code Live Server
2. Open http://localhost:5173

## Deploy to Hosting Ukraine

- Upload all files to the site root via SFTP/FTP.
- Enable HTTPS (Let's Encrypt) in your hosting panel.
- Ensure `robots.txt` and `sitemap.xml` are in the root.
- Update `sitemap.xml` BASE if needed and ping search engines (optional).

## Structure

- `partials/` — header & footer included via JS (`assets/js/include.js`).
- `assets/css/` — base/layout/components/utilities.
- `assets/js/` — menu & includes.
- `services/`, `cases/`, `blog/` — content sections.
