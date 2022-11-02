import UserController from '../controllers/UserController';
import User from '../models/UserModel';
import Service from '../services/UserServices/Service';

export default class UserFactory {
  static make() {
    const model = new User();
    const service = new Service(model);
    const controller = new UserController(service);
    
    return controller;
  }
}