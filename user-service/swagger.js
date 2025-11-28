// docs/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'User API',
    version: '1.0.0',
    description: 'API documentation for user microservice'
  },
  servers: [
    {
      url: 'http://localhost:5000',
      description: 'Development server for user service'
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT' // optional but informative
      }
    }
  },
  security: [
    {
      bearerAuth: []
    }
  ]
};

const options = {
  swaggerDefinition,
  apis: ['../src/routes/*.js', '../src/models/*.js'] // adjust paths to your files
};

export const swaggerSpec = swaggerJsdoc(options);
