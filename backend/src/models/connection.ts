/* eslint-disable max-len */
import 'dotenv/config';
import mongoose from 'mongoose';

// const MONGO_DB_URL = 'mongo "mongodb://mongo:ckfjGEiIyS4VbmQcyqW0@containers-us-west-99.railway.app:7682"';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI,
  mongoDatabaseURL = process.env.MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURL || mongoDatabaseURI || '');

export default connectToDatabase;
