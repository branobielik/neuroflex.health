# NeuroFlex Website

Standalone public website for **NeuroFlex** at [neuroflex.health](https://neuroflex.health).

This repository contains only NeuroFlex web content moved from the LifeApps site (`/apps/NeuroFlex/`). Other LifeApps apps remain on [lifeapps.online](https://www.lifeapps.online/).

## Pages

- `/` — main landing page
- `/mission-statement/` — mission statement
- `/white-paper/` — research white paper
- `/behavioral-event-model/` — behavioral event model v1
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

At your domain registrar, add:

### Apex domain (`neuroflex.health`)

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

### Optional `www` subdomain

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `<your-github-username>.github.io` |

If you use `www`, add `www.neuroflex.health` as an additional custom domain in GitHub Pages and update `CNAME` accordingly.

DNS propagation can take from a few minutes up to 24–48 hours.

## Local preview

Open `index.html` in a browser, or serve the folder with any static file server.

## Notes

- NeuroFlex may later be used in clinical/research settings rather than as a commercial consumer app.
- This site is informational only and is not medical advice.
