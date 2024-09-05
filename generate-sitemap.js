const {SitemapStream, streamToPromise} = require('sitemap');
const {mkdirSync, existsSync, createWriteStream} = require('fs');
const {Readable} = require('stream');
const path = require('path');

async function generateSitemap() {
  const hostname = 'https://lysser.me';
  const outputDir = path.join(__dirname, 'dist', 'personal-blog-resume', 'browser');
  const sitemapPath = path.join(outputDir, 'sitemap.xml');
  try {
    // Ensure the directory exists
    mkdirSync(outputDir, {recursive: true});

    // Check if sitemap already exists
    if (existsSync(sitemapPath)) {
      console.log('Sitemap already exists. Overwriting...');
    }

    const sitemap = new SitemapStream({hostname});
    const writeStream = createWriteStream(sitemapPath);

    Readable.from([
      {url: '/', changefreq: 'daily', priority: 1},
    ]).pipe(sitemap).pipe(writeStream);

    writeStream.on('finish', () => {
      console.log(`Sitemap generated successfully at ${sitemapPath}`);
    });

    writeStream.on('error', (error) => {
      console.error('Error writing sitemap:', error);
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap();
