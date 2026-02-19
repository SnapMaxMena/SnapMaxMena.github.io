# Plan: Dynamic Projects Page via CI/CD

## Phase 1: Data & Templates
1. Create `projects.json` as the central source of truth for all publications.
2. Build an HTML template for the main "Projects" page (the tile grid).
3. Build an HTML template for the individual "Publication/Blog" detail pages.

## Phase 2: The Build Script
1. Write a script to read `projects.json`.
2. Loop through the JSON data to inject titles, links, and content into the HTML templates.
3. Output the final, static `.html` files into a deployment folder.

## Phase 3: GitHub Actions Automation
1. Create `.github/workflows/deploy.yml`.
2. Configure the action to trigger automatically on pushes to the repository.
3. Run the build script and deploy the final output to GitHub Pages.
