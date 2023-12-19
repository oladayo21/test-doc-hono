import { createRoute } from '@hono/zod-openapi';
import { z } from '@hono/zod-openapi';

const reqParamsSchema = z.object({
  id: z.string().openapi({
    param: {
      name: 'id',
      in: 'path'
    },
    example: '123'
  })
});

const reqQuerySchema = z.object({
  name: z.string().min(3).openapi({
    example: 'John Doe'
  })
});

const successResponseSchema = z
  .object({
    id: z.string().openapi({
      example: '123'
    }),
    name: z.string().openapi({
      example: 'John Doe'
    }),
    age: z.number().openapi({
      example: 42
    })
  })
  .openapi('User');

export const getUserByIdRouteDef = createRoute({
  method: 'get',
  path: '/users/{id}',
  description: 'Retrieve a user by its id',
  summary: 'Retrieve a user',
  request: {
    params: reqParamsSchema,
    query: reqQuerySchema
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: successResponseSchema
        }
      },
      description: 'Retrieve the user'
    },
    400: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string()
          })
        }
      },
      description: 'Bad Request'
    },
    500: {
      content: {
        'application/json': {
          schema: z.object({
            message: z.string()
          })
        }
      },
      description: 'Internal Server Error'
    }
  }
});
