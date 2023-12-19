import { OpenAPIHono } from '@hono/zod-openapi';
import { getUserByIdRouteDef } from './def';

const app = new OpenAPIHono();

app.openapi(getUserByIdRouteDef, (ctx) => {
  return ctx.json({
    id: '44',
    name: '',
    age: 55
  });
});

app.doc('/openapi-doc', {
  openapi: '3.0.0',
  info: {
    title: 'ps-cancellation api',
    version: '1.0.0',
    description: 'This is the cancellation api for the ps-cancellation service',
    contact: {
      email: 'SPRINGPremiumServices-og@moveoffice.com'
    }
  }
});

export default app;
