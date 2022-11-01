/* eslint-disable @typescript-eslint/no-var-requires */
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
  './routes/index.ts',
];

swaggerAutogen(outputFile, endpointsFiles);