# Custom domain: yogaeq.com

Connect your yogaeq Hugo site (on GitHub Pages) to **yogaeq.com**.

## 1. GitHub Pages is already set up

- Repo: **https://github.com/eeeieeiooh/Yogaeq**
- The workflow builds on push to `main` and deploys to GitHub Pages.
- This project already has `baseURL = "https://yogaeq.com/"` and `static/CNAME` with `yogaeq.com`.

## 2. Add the custom domain in GitHub

1. Open **https://github.com/eeeieeiooh/Yogaeq** → **Settings** → **Pages**.
2. Under **Build and deployment**, leave **Source** as **GitHub Actions**.
3. Under **Custom domain**, enter: **yogaeq.com**
4. Click **Save**.
5. If GitHub shows a **Verify** button or asks for a **TXT** record, note it — you’ll add that in your DNS in step 3.

## 3. Point DNS at GitHub Pages

Where you manage DNS for yogaeq.com (e.g. your registrar, Cloudflare, Squarespace):

### Option A: Apex domain (yogaeq.com)

Add **four A records** for the root:

| Type | Name/Host | Value |
|------|-----------|--------|
| A | `@` (or blank) | `185.199.108.153` |
| A | `@` (or blank) | `185.199.109.153` |
| A | `@` (or blank) | `185.199.110.153` |
| A | `@` (or blank) | `185.199.111.153` |

### Option B: www (www.yogaeq.com)

Add **one CNAME**:

| Type | Name/Host | Value |
|------|-----------|--------|
| CNAME | `www` | `eeeieeiooh.github.io` |

Use only `eeeieeiooh.github.io` (no path, no repo name).

### Option C: Both apex and www

Add all four **A** records (Option A) and the **CNAME** for `www` (Option B). In GitHub Pages you can set the custom domain to **yogaeq.com**; GitHub will redirect www to the apex (or the other way around) once DNS is set.

### If GitHub asked for a TXT record

Add the TXT record they show (e.g. for domain verification), then click **Verify** again in GitHub Settings → Pages.

## 4. Wait and verify

- DNS can take a few minutes up to 24–48 hours.
- In **Settings → Pages**, when the domain is verified you’ll see a green check.
- Then turn on **Enforce HTTPS**.

## 5. Done

Your site will be live at **https://yogaeq.com**.

---

**Reference:** [GitHub: Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
