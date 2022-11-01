/* eslint-disable @typescript-eslint/no-var-requires */
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/swagger_output.json';
const endpointsFiles = [
  './src/routes/index.ts',
];

swaggerAutogen(outputFile, endpointsFiles);