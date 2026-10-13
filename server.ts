import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import app from './api/app';

const PORT = Number(process.env.PORT) || 3000;

// Vite middleware integration for local development and standalone Node production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Brota server running on http://localhost:${PORT}`);
  });
}

startServer();
