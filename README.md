<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# H4K Portfolio

Interactive hacker-style portfolio featuring matrix rain, glitch effects, and terminal interfaces.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deploy to GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Push the `dist` folder to the `gh-pages` branch, or use GitHub Actions (see `.github/workflows/deploy.yml`)

3. In your GitHub repository settings, go to Pages and set the source to `gh-pages` branch or GitHub Actions.

**Note:** If deploying to a project page (not user page), update `base` in `vite.config.ts` to `'/repository-name/'`.
