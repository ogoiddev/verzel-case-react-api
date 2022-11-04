/* eslint-disable max-len */
import 'dotenv/config';
import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';
const MONGO = 'mongodb://mongo:ckfjGEiIyS4VbmQcyqW0@containers-us-west-99.railway.app:7682';

const connectToDatabase = (
  mongoDatabaseURL = process.env.MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURL || MONGO || MONGO_DB_URL);

export default connectToDatabase;
