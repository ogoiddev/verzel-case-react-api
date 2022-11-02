import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';

import MModel from './MModel';

const userMongooseSchema = new Schema<IUser>({
  name: String,
  lastName: String,
  email: String,
  password: String,
  role: String, 
  thumb: String,
}, { versionKey: false });

class User extends MModel<IUser> {
  constructor(model = mongooseCreateModel('User', userMongooseSchema)) {
    super(model);
  }
}

export default User;