const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const dataDir = path.join(__dirname, '../data');
const templateDir = path.join(__dirname, '../templates');
const outDir = path.join(__dirname, '../'); 
const postsOutDir = path.join(outDir, 'posts');

// 1. Read Data and Templates
const projects = JSON.parse(fs.readFileSync(path.join(dataDir, 'projects.json'), 'utf-8'));
const listTemplate = fs.readFileSync(path.join(templateDir, 'project-list.html'), 'utf-8');
const detailTemplate = fs.readFileSync(path.join(templateDir, 'post-detail.html'), 'utf-8');

let tilesHtml = '';

if (!fs.existsSync(postsOutDir)) {
  fs.mkdirSync(postsOutDir, { recursive: true });
}

// 2. Generate Individual Pages
projects.forEach(project => {
  const mdPath = path.join(dataDir, 'publications', project.content_file);
  if (!fs.existsSync(mdPath)) return; // Fail-safe for missing files

  const mdContent = fs.readFileSync(mdPath, 'utf-8');
  const htmlContent = marked.parse(mdContent);

  // Inject content into the template
  const pageHtml = detailTemplate
    .replace('{{TITLE}}', project.title)
    .replace('{{CONTENT}}', htmlContent);

  const outFileName = `${project.id}.html`;
  fs.writeFileSync(path.join(postsOutDir, outFileName), pageHtml);
  
  // 3. Build the Tile string
  tilesHtml += `
    <div class="project-tile">
      <h2><a href="posts/${outFileName}">${project.title}</a></h2>
      <p><strong>Date:</strong> ${project.date}</p>
      <p><strong>Tags:</strong> ${project.tags.join(', ')}</p>
    </div>
  `;
});

// 4. Generate the main projects.html page
const finalProjectsPage = listTemplate.replace('{{TILES}}', tilesHtml);
fs.writeFileSync(path.join(outDir, 'projects.html'), finalProjectsPage);

console.log('✅ Build complete using HTML templates!');