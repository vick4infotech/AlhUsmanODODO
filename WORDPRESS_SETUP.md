# News publishing with WordPress

This project keeps the existing React website. WordPress runs separately as a **headless CMS**: posts, article images and publishing permissions are managed in WordPress, while the public website displays posts at `/news` and `/news/:slug`. The site's `/login` route forwards editors to the real WordPress login. It does **not** collect passwords in React.

## Run locally

1. Install Node.js, Docker and Docker Compose.
2. Copy `.env.example` to `.env`. Set **both** long, unique database passwords.
3. Start WordPress: `docker compose -f docker-compose.wordpress.yml up -d`.
4. Visit `http://localhost:8080/wp-admin/install.php` and create the administrator account. Use a strong password, and keep its credentials private.
5. Run `npm ci`, then `npm run dev`. Visit the local Vite URL. Open `/login` to sign into WordPress.
6. In WordPress, go to **Posts → Add New**, write a story, choose a **Featured image**, and click **Publish**. The public `/news` page will display it automatically.

## Deploy to your server

1. Create a dedicated HTTPS host for WordPress such as `cms.yourdomain.com` with an SSL certificate. Proxy requests to **127.0.0.1:8080** on the server. The Compose file deliberately binds WordPress only to localhost.
2. Set `WP_PUBLIC_URL=https://cms.yourdomain.com` in `.env`. Keep the database private; do not expose database ports.
3. Set `VITE_WORDPRESS_URL=https://cms.yourdomain.com` before building the React site (`npm ci && npm run build`). Publish the contents of `dist/` via your usual web server, with an SPA fallback to `index.html` for `/news/...` and `/login`.
4. WordPress's public REST API must be accessible at `https://cms.yourdomain.com/wp-json/wp/v2/posts`. Verify both `https://yourdomain.com/news` and `https://yourdomain.com/login` after deployment. Avoid security plugins or host policies that disable the public posts REST endpoint or block cross-origin public GET requests.
5. Disable public registration unless needed, set editor accounts with the **Editor** role rather than Administrator, enable backups, HTTPS, WordPress updates and preferably 2FA/rate limiting. Back up both named Docker volumes.

**Important:** The backend is provided as a deployable Docker Compose configuration, not a hosted installation. The `/login` route works once WordPress is running and `VITE_WORDPRESS_URL` points to its public address. The first WordPress administrator must be created during installation; no default administrator/password is embedded in this ZIP.

## Supplied photos

Five supplied Kogi-related photos were added to `public/images/`. They include the Kogi Audit House, school building, student group, classroom visit and computer centre. The relevant education/governance portions and gallery now use those photos. A supplied image should not be used to assert a particular project completed or a person pictured attended an event unless verified independently.
