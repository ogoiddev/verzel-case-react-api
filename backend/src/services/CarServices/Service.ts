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
    
    const results = await this.carModel.create(objectCar);
    return results;
  }

  public async getCarsList() {
    const results = await this.carModel.carRead();
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
  
  public async uploadImageMulterInfo(
    id: string,
    fileName: string,
  ) {
    // const dataCar = this.getCarById(id);

    const result = await this.carModel.update(
      id,
      { thumb: fileName } as ICarDTO,
    );

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result;
  }

  public async deleteCar(id: string) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const result = await this.carModel.delete(id);

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result;
  }
}