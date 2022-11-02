import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';

import MModel from './MModel';

const carMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: String,
  buyValue: Number,
  imgs: Array(String),
  features: {
    state: String,
    city: String,
    km: Number,
    gearShift: String,
  },
  seatsQty: Number,
  doorsQty: Number,
}, { versionKey: false });

class Car extends MModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default Car;