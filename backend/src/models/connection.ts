import 'dotenv/config';
import mongoose from 'mongoose';

// const MONGO_DB_URL = 'mongodb://localhost:27017/CarShop';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI, 
) => mongoose.connect(mongoDatabaseURI || '');

export default connectToDatabase;
