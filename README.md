# Aaron Rietschlin — Resume

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

### First-time GitHub setup

1. Create a new repo at https://github.com/new named `resume`
2. Enable GitHub Pages in repo Settings → Pages → Source: **GitHub Actions**
3. Push this repo:

```bash
git remote add origin https://github.com/AaronRietschlin/resume.git
git push -u origin main
```
