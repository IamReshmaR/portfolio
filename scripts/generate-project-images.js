const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Register fonts
registerFont('fonts/Inter-Bold.ttf', { family: 'Inter', weight: 'bold' });
registerFont('fonts/Inter-Regular.ttf', { family: 'Inter' });

const projects = [
  {
    title: 'Restaurant Recommender System',
    description: 'Built a sophisticated recommender system using the Yelp dataset with collaborative filtering',
    tags: ['Python', 'Machine Learning', 'NLP'],
    background: '#0D1117'
  },
  {
    title: 'Airbnb Price Prediction Model',
    description: 'Advanced regression and classification models for predicting Airbnb listing prices',
    tags: ['Python', 'Machine Learning', 'Regression'],
    background: '#0D1117'
  },
  {
    title: 'SQL Data Analysis Portfolio',
    description: 'Advanced SQL queries and analytics showcasing complex database operations',
    tags: ['SQL', 'Data Analysis', 'Business Intelligence'],
    background: '#0D1117'
  },
  {
    title: 'Rainfall Forecasting Model',
    description: 'Machine learning models for accurate rainfall prediction using random forest',
    tags: ['Python', 'Machine Learning', 'Time Series'],
    background: '#0D1117'
  }
];

async function generateProjectImage(project, outputPath) {
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = project.background;
  ctx.fillRect(0, 0, width, height);

  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, 'rgba(13, 17, 23, 0)');
  gradient.addColorStop(0.5, 'rgba(13, 17, 23, 0.5)');
  gradient.addColorStop(1, 'rgba(13, 17, 23, 1)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Title
  ctx.font = 'bold 48px Inter';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(project.title, 80, 120);

  // Description
  ctx.font = '24px Inter';
  ctx.fillStyle = '#E2E8F0';
  const words = project.description.split(' ');
  let line = '';
  let y = 180;
  for (let word of words) {
    const testLine = line + word + ' ';
    const metrics = ctx.measureText(testLine);
    if (metrics.width > width - 160) {
      ctx.fillText(line, 80, y);
      line = word + ' ';
      y += 35;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, 80, y);

  // Tags
  let tagX = 80;
  const tagY = 280;
  for (let tag of project.tags) {
    ctx.fillStyle = '#2D3748';
    ctx.beginPath();
    ctx.roundRect(tagX, tagY, ctx.measureText(tag).width + 40, 40, 20);
    ctx.fill();

    ctx.font = '16px Inter';
    ctx.fillStyle = '#E2E8F0';
    ctx.fillText(tag, tagX + 20, tagY + 25);
    tagX += ctx.measureText(tag).width + 60;
  }

  // GitHub badge
  ctx.fillStyle = '#238636';
  ctx.beginPath();
  ctx.roundRect(tagX, tagY, 80, 40, 20);
  ctx.fill();

  ctx.font = '16px Inter';
  ctx.fillStyle = '#ffffff';
  ctx.fillText('GitHub', tagX + 15, tagY + 25);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
}

async function generateAllImages() {
  if (!fs.existsSync('public/images/projects')) {
    fs.mkdirSync('public/images/projects', { recursive: true });
  }

  for (let project of projects) {
    const fileName = project.title.toLowerCase().replace(/\s+/g, '-') + '.png';
    const outputPath = path.join('public/images/projects', fileName);
    await generateProjectImage(project, outputPath);
    console.log(`Generated ${fileName}`);
  }
}

generateAllImages().catch(console.error); 