# Copilot Coding Agent Instructions

> **Importante:** Siempre responde en **español** al generar explicaciones, comentarios, mensajes de commit o documentación de código para este repositorio. **Excepto:** Mantén los nombres de librerías, palabras clave técnicas, identificadores de código y referencias a APIs que solo existen en inglés sin traducir para evitar confusiones o problemas de compatibilidad.

## Repository Overview
This repository contains a simple static website built with:
- **HTML5** for structure
- **CSS** (including **Bootstrap**) for styling and layout
- **JavaScript** for interactivity

The site is deployed via **GitHub Pages** and does not require a backend server or database.

There are no build steps, complex frameworks, or package managers — the files are served directly as static assets.

The main focus is on keeping HTML, CSS, and JavaScript clean, readable, and responsive.

## Project Type and Size
- **Type:** Static web project
- **Languages:** HTML, CSS, JavaScript
- **Frameworks/Libraries:** Bootstrap (CSS & JS)
- **Runtime:** Runs in any modern web browser
- **Deployment:** GitHub Pages (automatic on push to the default branch)
- **Repository size:** Small (< 1 MB without dependencies)

## How to Run
1. Clone or download the repository.
2. Open `index.html` in a browser — no build or install steps are needed.
3. For deployment, push changes to the repository’s default branch; GitHub Pages will update automatically.

## Development Notes
- **Always** keep Bootstrap’s CSS and JS references intact unless intentionally updating versions.
- Keep file naming consistent and avoid spaces in filenames.
- The project expects relative paths for assets (CSS, JS, images) — do not break them.
- Test in desktop and mobile view to ensure responsive design works as intended.

## Validation Steps
- After making changes:
    1. Open `index.html` locally and check for visual or console errors.
    2. Verify that all links, scripts, and assets load correctly.
    3. Push changes to trigger GitHub Pages deployment.
    4. Once deployed, visit the live site and re-check functionality.

## Project Layout
- Root contains:
    - `index.html` — homepage
    - Other `.html` pages (cart.html, categories.html, etc.)
    - `/css/` — stylesheets (Bootstrap, custom CSS)
    - `/js/` — JavaScript files
    - `/webfonts/` — font assets
    - `/img/` — image assets
- No hidden build or config files beyond `.github` workflows for deployment.

## GitHub Actions / CI
- No complex CI/CD pipeline — GitHub Pages automatically serves the site.
- There is no test or lint step enforced in CI.
- Validation is manual via browser testing.

## Key Facts for the Agent
- Do **not** add Node.js or npm-based tooling unless explicitly requested.
- Keep output clean HTML/CSS/JS — no server-side languages.
- Use Bootstrap’s responsive classes for layout changes instead of writing excessive custom CSS unless necessary.
- Maintain cross-browser compatibility (latest Chrome, Firefox, Edge, Safari).
- Avoid adding heavy dependencies that may slow down load time.

## Trust These Instructions
These instructions fully describe how to build, run, and validate changes in this project. Only search the repository if this information is incomplete or found to be incorrect.