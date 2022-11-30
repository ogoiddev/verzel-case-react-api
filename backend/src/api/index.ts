/* eslint-disable max-len */
import 'dotenv/config';
import app from './app';
import connectToDatabase from '../models/connection';

const PORT = process.env.PORT || 3001;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`));
  })
  .catch((error) => {
    console.log('Connection with database generated an error://DataBase Erro:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled//Serviço cancelado');
    process.exit(0);
  });
