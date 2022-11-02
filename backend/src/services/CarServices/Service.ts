import { isValidObjectId } from 'mongoose';
import { ErrorTypes } from '../../errors/catalog';
import { ICar, CarZodSchema } from '../../interfaces/ICar';
import { IModel } from '../../interfaces/IModel';
import { ICarDTO } from './ICarDTO';

export default class Service {
  constructor(private carModel: IModel<ICar>) {}

  public async saveNewCar(objectCar: ICarDTO) {
    const parseSuccess = CarZodSchema.safeParse(objectCar);
    
    if (!parseSuccess.success) throw parseSuccess.error;
    console.log('first');
    
    const results = await this.carModel.create(objectCar);
    return results;
  }

  public async getCarsList() {
    const results = await this.carModel.read();
    return results;
  }

  public async getCarById(id: string) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const result = await this.carModel.readOneById(id);

    if (!result) throw Error(ErrorTypes.EntityNotFound);
    
    return result;
  }

  public async updateCar(id: string, objectCar: ICarDTO) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);

    const parseSuccess = CarZodSchema.safeParse(objectCar);
    if (!parseSuccess.success) throw parseSuccess.error;

    const result = await this.carModel.update(id, objectCar);

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result;
  }

  public async deleteCar(id: string) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const result = await this.carModel.delete(id);  
    console.log(result);

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result;
  }
}