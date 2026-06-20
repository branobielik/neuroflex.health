# NeuroFlex Website

Standalone public website for **NeuroFlex** at [neuroflex.health](https://neuroflex.health).

This repository contains only NeuroFlex web content moved from the LifeApps site (`/apps/NeuroFlex/`). Other LifeApps apps remain on [lifeapps.online](https://www.lifeapps.online/).

## Pages

- `/` — main landing page
- `/mission-statement/` — mission statement
- `/white-paper/` — research white paper
- `/behavioral-event-model/` — behavioral event model v1 (unlisted: not in nav, `noindex`; reachable only via direct link)
- `/eula/` — EULA placeholder

## GitHub Pages setup

1. Create GitHub repository (suggested name: `neuroflex.health`).
2. Push this folder to the `main` branch.
3. In GitHub → **Settings → Pages**:
   - Source: **Deploy from branch**
   - Branch: `main` / `/ (root)`
   - Custom domain: `neuroflex.health`
4. Enable **Enforce HTTPS** after DNS propagates.

## DNS for `neuroflex.health`

GitHub Pages custom domain, `CNAME` file, and DNS must all match.

| Layer | Required value |
|-------|----------------|
| GitHub Pages → Custom domain | `neuroflex.health` |
| Repo `CNAME` file | `neuroflex.health` |
| DNS apex `@` | 4× A records → GitHub Pages IPs (below) |
| DNS `www` | CNAME → `branobielik.github.io` |

### Apex domain (`neuroflex.health`) — required for GitHub DNS check

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Namecheap:** delete any **URL Redirect Record** on `@` before adding the A records. If apex still resolves to `192.64.119.224`, GitHub will show `NotServedByPagesError` even when the repo is correct.

Verify from your PC:

```powershell
Resolve-DnsName neuroflex.health -Type A
```

Expected: four `185.199.x.x` addresses. Wrong: `192.64.119.224` (Namecheap redirect).

### `www` subdomain

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `branobielik.github.io` |

After apex DNS is correct: GitHub → Pages → **Check again** → enable **Enforce HTTPS**.

DNS propagation can take from a few minutes up to 24–48 hours.

## Local preview

Open `index.html` in a browser, or serve the folder with any static file server.

## Notes

- NeuroFlex may later be used in clinical/research settings rather than as a commercial consumer app.
- This site is informational only and is not medical advice.
