# Aaron Rietschlin — Resume

## TODO

- [ ] Fill in pre-Disney+ work experience in `_data/data.yml` (role, company, years, details)
- [ ] Add profile photo to `assets/images/` and set `avatar:` in `_data/data.yml`
- [ ] Flesh out career profile summary in `_data/data.yml`
- [ ] Add any projects, publications, or skills worth highlighting
- [ ] Enable GitHub Pages: repo Settings → Pages → Source: **GitHub Actions**
- [ ] Remove `[skip ci]` pattern from future commits once ready to deploy

Personal resume site built with Jekyll using the [online-cv](https://github.com/sharu725/online-cv) theme.

**Live site:** https://aaronrietschlin.github.io/resume

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/resume

## Customization

All resume content lives in `_data/data.yml`. Edit that file to update:
- Career profile summary
- Work experience
- Education
- Skills
- Sidebar links and interests

## Deployment

Pushes to `main` automatically deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.
