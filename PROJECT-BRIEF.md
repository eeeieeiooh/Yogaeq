# Project brief: get this blog to 100% from a fresh start

Give this to Cursor (or any dev) so they can set up or restore the project completely.

---

## 1. What it is

- **Hugo** static blog.
- **GitHub repo:** `https://github.com/eeeieeiooh/myblog`
- **Custom domain:** `devonhwilson.com` (site built with this as `baseURL`).
- **Deploy:** Push to `main` → GitHub Actions builds and deploys to GitHub Pages. Deploy script uses a token from `.env` so the agent can push.

---

## 2. Info you must provide

| What | Value / where |
|------|----------------|
| **GitHub username** | `eeeieeiooh` |
| **Repo name** | `myblog` |
| **Custom domain** | `devonhwilson.com` |
| **Site title** | Devon Wilson |
| **GitHub token** | Classic PAT with **repo** + **workflow**. Stored only in `.env` as `GITHUB_TOKEN=ghp_...` (never commit `.env`). |

---

## 3. Repo layout (what matters)

- **Posts:** `content/posts/*.md` — one `.md` file per post. Front matter: `title`, `date`, `draft: false`, `weight` (for ordering).
- **About page:** `content/about.md`.
- **Config:** `hugo.toml` — `baseURL`, `title`, `[params]`, `[permalinks]`.
- **Layouts:** `layouts/` — `_default/baseof.html` (global styles + structure), `index.html`, `_default/list.html`, `_default/single.html`, `page/single.html`.
- **Custom domain:** `static/CNAME` with content `devonhwilson.com` (so it’s in the built site).
- **Deploy:** `deploy.sh` reads `GITHUB_TOKEN` from `.env` and pushes to `https://github.com/eeeieeiooh/myblog.git` on `main`. Workflow: `.github/workflows/hugo.yml` (Hugo build → upload-pages-artifact → deploy-pages).

---

## 4. GitHub / DNS (one-time)

- **Pages:** Repo **Settings → Pages** → Source: **GitHub Actions**.
- **Custom domain:** **Settings → Pages** → Custom domain: `devonhwilson.com` → Save → **Verify**. Then **Enforce HTTPS**.
- **DNS (e.g. Squarespace):**  
  - **A** for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.  
  - **CNAME** for `www`: `eeeieeiooh.github.io`.

---

## 5. Local workflow

- **Preview:** `hugo server -D` → http://localhost:1313 (optional `-D` for drafts).
- **New post:** `hugo new content/posts/my-post.md` then edit; set `draft: false` and a `weight` when ready.
- **Deploy:** `./deploy.sh` (requires `.env` with valid `GITHUB_TOKEN`).

---

## 6. Design / layout (already implemented)

- Monospace font; off-white background (`#faf9f6`).
- Site title: no underline by default; dotted underline on hover; size `0.9375rem`; `1rem` space below before the dash.
- Single em dash **—** between title and post list (not a full `<hr>`).
- Post list: numbers left-aligned in a column; “more” link is **→** with extra space above (`posts-more`).
- Post pages: no date/meta line; no “Info” footer; back link **←** to `/posts/`.
- Home and list pages: footer “Info” link to `/about/` remains.

---

## 7. If starting completely fresh

1. Clone or create repo `eeeieeiooh/myblog`; ensure `.github/workflows/hugo.yml`, `layouts/`, `content/`, `hugo.toml`, `deploy.sh`, `static/CNAME` match this project.
2. Create `.env` with `GITHUB_TOKEN=ghp_...` (classic token, **repo** + **workflow**); never commit `.env`.
3. In GitHub: **Settings → Pages** → Source: **GitHub Actions**; Custom domain: `devonhwilson.com`; Verify; Enforce HTTPS.
4. In DNS: four A records for `@`, one CNAME `www` → `eeeieeiooh.github.io`.
5. Run `./deploy.sh` to push; after the workflow succeeds, the site is live at https://devonhwilson.com.

---

## 8. Posts: where they live

- **Only place Hugo uses:** `content/posts/`. Each post is a single `.md` file there.
- Hugo does **not** read from another folder or the cloud by default. To use posts from elsewhere you’d need to copy/sync them into `content/posts/` before building, or use a custom Hugo module/script (not set up in this project).

That’s everything needed to get this project to 100%.
