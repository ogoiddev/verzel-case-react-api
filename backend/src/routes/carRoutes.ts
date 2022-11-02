import { Router } from 'express';
import factory from '../factories';

const carRoute = Router();

carRoute.put('/:id', factory.carHandler.updateCar);
carRoute.post('/', factory.carHandler.saveNewCar);

carRoute.get('/:id', factory.carHandler.getCarById);
carRoute.get('/', factory.carHandler.getCarsList);

carRoute.delete('/:id', factory.carHandler.deleteCar);

export default carRoute;