import { isValidObjectId } from 'mongoose';
import { ErrorTypes } from '../../errors/catalog';
import { IUser, UserZodSchema } from '../../interfaces/IUser';
import { IModel } from '../../interfaces/IModel';
import { IUserDTO } from './IUserDTO';

export default class Service {
  constructor(private userModel: IModel<IUser>) {}

  public async saveNewUser(objectCar: IUserDTO) {
    const parseSuccess = UserZodSchema.safeParse(objectCar);
    
    if (!parseSuccess.success) throw parseSuccess.error;
    console.log('first');
    
    const results = await this.userModel.create(objectCar);
    return results;
  }

  public async getUsersList() {
    const results = await this.userModel.read();
    return results;
  }

  public async getUserById(id: string) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const result = await this.userModel.readOne(id);

    if (!result) throw Error(ErrorTypes.EntityNotFound);
    
    return result;
  }

  public async updateUser(id: string, objectCar: IUserDTO) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);

    const parseSuccess = UserZodSchema.safeParse(objectCar);
    if (!parseSuccess.success) throw parseSuccess.error;

    const result = await this.userModel.update(id, objectCar);

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result;
  }

  public async deleteUser(id: string) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const result = await this.userModel.delete(id);  
    console.log(result);

    if (!result) throw Error(ErrorTypes.EntityNotFound);

    return result;
  }
}