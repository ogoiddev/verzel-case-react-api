/* eslint-disable max-len */
import 'dotenv/config';
import mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://mongodb:27017/CarShop';
const MONGO = 'mongodb://mongo:1pr1qIahWGXESXxvz5sT@containers-us-west-99.railway.app:7682';

const connectToDatabase = (
  mongoDatabaseURL = process.env.MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURL || MONGO || MONGO_DB_URL);

export default connectToDatabase;
