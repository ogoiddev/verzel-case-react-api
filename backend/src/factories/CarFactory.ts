import CarController from '../controllers/CarController';
import Car from '../models/CarModel';
import Service from '../services/CarServices/Service';

export default class CarFactory {
  static make() {
    const model = new Car();
    const service = new Service(model);
    const controller = new CarController(service);
    
    return controller;
  }
}