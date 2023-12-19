import app from './app';
import { serve } from '@hono/node-server';

serve({ fetch: app.fetch, port: process.env.PORT ?? 8080 }, (info) =>
  console.log(`Dev server listening on ${info.port}`)
);
