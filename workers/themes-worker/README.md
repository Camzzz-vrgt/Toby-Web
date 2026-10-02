# Toby Web Community Themes API

This is a separate Worker. It does not change the presence Worker or the site's existing R2 bucket. Community assets use a separate, private R2 bucket so pending uploads cannot be fetched through the public website bucket.

The Worker is deployed at `https://themes-api.booksforschool.online`. Discord OAuth and the signed-in upload/moderation flow were tested in a temporary admin-only beta. The worker is now in open beta: `SUBMISSIONS_ENABLED=true` and `BETA_ADMIN_ONLY=false`, so `/api/config` reports `publishingEnabled: true` and any signed-in Discord user may submit; every submission still requires manual admin approval before it appears in Discover. Never put `DISCORD_CLIENT_SECRET`, `TURNSTILE_SECRET`, or `SESSION_SECRET` in this repository; set them with `wrangler secret put`.

Required Cloudflare resources:

- D1 database `toby-web-themes` bound as `DB`.
- New private R2 bucket `toby-web-themes` bound as `ASSETS`. Do not attach a public R2 domain to it; the Worker serves approved files only.
- Turnstile widget for the Toby Web host, with server-side secret verification.
- Discord OAuth app with an exact redirect URI of `https://<worker-host>/auth/callback` and the `identify` scope.

Already configured: the private R2 bucket, D1 database and initial migration, Turnstile widget, Worker custom domain, Discord client ID and callback URL, and all three Worker secrets. The public catalog API responds over HTTPS and `/auth/discord` starts sign-in. The hostname now resolves normally on the test PC, and the localhost Themes page reads the catalog in Edge.

Live verification completed: the configured owner signed in with Discord and `/api/me` reported `admin: true`. In an admin-only beta, Turnstile completed, a real image and audio file were submitted, the pending theme was approved, it appeared in Discover and installed locally, and then it was hidden and uninstalled. The test theme is retained in hidden status for audit. The catalog and admin image cards were repaired after the initial test revealed a cross-origin subresource failure.

Local tests now cover offline desktop/mobile launcher refresh, pending rejection, and admin tag validation. Still to verify before opening public submissions: a live-approved theme through offline launcher refresh, admin audio preview, featured discovery, and a broader private-beta abuse review. Favorites replace ratings. Keep `SUBMISSIONS_ENABLED=false` until Update 1.2 release approval.

Moderation additions: every submission requires manual admin approval before appearing in Discover. Theme names and descriptions are screened in the Studio and again by the Worker; the Discord creator name is screened server-side. This curated filter is not a complete abuse classifier, so admins must review names, images, and audio. Signed-in users can report published themes once each, with a daily cap and a separate Turnstile action. Admins can hide a reported theme, resolve reports, see recent actions, and pause the entire public catalog. Worker rate-limit bindings throttle per-account writes and 30 writes/minute per IP across accounts. The production API accepts writes only from `SITE_ORIGIN`, even though localhost may read the catalog for development. A Cloudflare edge rate-limiting rule on `themes-api.booksforschool.online` blocks an IP for 10 seconds after 100 requests in 10 seconds; it is Active in the dashboard. Monitor for shared-IP false positives and distributed abuse before opening submissions. Worker bindings alone run after invocation.

Verified without signing in: the public catalog responds, `/api/me` returns `user: null`, the admin queue rejects anonymous access, submissions are closed, and `/auth/discord` redirects to Discord. `node tools/probe-theme-api.js` verifies browser CORS and the local page's catalog request; Edge also reached the catalog with ordinary DNS.

Keep the existing `toby-web` website bucket and presence Worker unchanged. Do not attach a public R2 domain to the themes asset bucket.

No theme is public until an authorized admin approves it. Admin tags are `Verified` (green) and `Camzzz Approved`; they are never accepted from creator submissions.
