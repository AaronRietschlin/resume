# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal resume site for Aaron Rietschlin, built with Jekyll using the [online-cv](https://github.com/sharu725/online-cv) remote theme. Deploys to https://aaronrietschlin.github.io/resume via GitHub Actions on push to `main`.

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Site is available at http://localhost:4000/resume

## Architecture

This is a minimal Jekyll site with almost no custom code — it delegates nearly all layout and styling to the `sharu725/online-cv` remote theme.

**Key files:**
- `_data/data.yml` — The single source of truth for all resume content (profile, experience, education, skills, sidebar links). This is the only file that needs editing to update resume content.
- `_config.yml` — Jekyll config: sets `remote_theme`, `baseurl: /resume`, and `url`.
- `index.md` — Minimal entry point; the theme handles all rendering.

## Deployment

Commits to `main` trigger `.github/workflows/deploy.yml`, which builds with Jekyll and deploys to GitHub Pages. The `[skip ci]` pattern in commit messages skips this workflow — remove it from commit messages once the site is ready to go live.

GitHub Pages must be configured in repo Settings → Pages → Source: **GitHub Actions**.

## Content TODOs (from README)

- Fill in pre-Disney+ work experience in `_data/data.yml`
- Add profile photo to `assets/images/` and set `avatar:` in `_data/data.yml`
- Flesh out career profile summary
- Add projects, publications, or skills
