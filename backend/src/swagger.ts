/* eslint-disable @typescript-eslint/no-var-requires */
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  'src/routes/carRoutes.ts',
  'src/routes/userRoutes.ts',
];

swaggerAutogen(outputFile, endpointsFiles);