const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 3001;

// Log the current environment
const appEnv = process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV;
console.log(`Server starting in ${appEnv} environment`);

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port} (${appEnv} environment)`);
  });
}); 