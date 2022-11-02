import LoginAuthController from '../controllers/LoginAuthController';
import User from '../models/UserModel';
import Service from '../services/LoginServices/Service';

export default class LoginFactory {
  static make() {
    const model = new User();
    const service = new Service(model);
    const controller = new LoginAuthController(service);
    
    return controller;
  }
}