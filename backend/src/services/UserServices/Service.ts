import { isValidObjectId } from 'mongoose';
import { cryptPassword } from '../../utils/Bcrypt/services';
import { ErrorTypes } from '../../errors/catalog';
import { IUser, UserZodSchema } from '../../interfaces/IUser';
import { IModel } from '../../interfaces/IModel';
import { IUserDTO } from './IUserDTO';

export default class Service {
  constructor(private userModel: IModel<IUser>) {}

  public async saveNewUser(userInfoDTO: IUserDTO) {
    const parseSuccess = UserZodSchema.safeParse(userInfoDTO);
    
    if (!parseSuccess.success) throw parseSuccess.error;

    const bcryptPass = cryptPassword(userInfoDTO.password);

    const useDataToSave = { 
      ...userInfoDTO,
      password: bcryptPass, 
    };

    const results = await this.userModel.create(useDataToSave);
    return results;
  }

  public async getUsersList() {
    const results = await this.userModel.read();
    return results;
  }

  public async getUserById(id: string) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);
    
    const result = await this.userModel.readOneById(id);

    if (!result) throw Error(ErrorTypes.EntityNotFound);
    
    return result;
  }

  public async getUserByEmail(email: string) {
    const result = await this.userModel.readOneByEmail(email);

    if (!result) throw Error(ErrorTypes.EntityNotFound);
    
    return result;
  }

  public async updateUser(id: string, userInfoDTO: IUserDTO) {
    if (!isValidObjectId(id)) throw Error(ErrorTypes.InvalidMongoId);

    const parseSuccess = UserZodSchema.safeParse(userInfoDTO);
    if (!parseSuccess.success) throw parseSuccess.error;

    const result = await this.userModel.update(id, userInfoDTO);

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