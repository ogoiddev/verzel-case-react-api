import { IModel } from '../../interfaces/IModel';
import { IUser } from '../../interfaces/IUser';
import { ErrorTypes } from '../../errors/catalog';
import { checkPassword } from '../../utils/Bcrypt/services';
import JWT from '../../utils/JWT/JWT.Generate';

export default class LoginAuthServices {
  constructor(private userModel: IModel<IUser>) {}

  async getUserByEmail(email: string) {
    const userData = await this.userModel.readOneByEmail(email);

    if (!userData) throw Error(ErrorTypes.EntityNotFound);

    return userData;
  }

  async getToken(email: string, password: string) {
    const userData = await this.getUserByEmail(email);

    checkPassword(password, userData.password);

    const token = JWT.createToken(userData);

    return token;
  }
}