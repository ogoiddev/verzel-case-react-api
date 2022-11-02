import { Router } from 'express';
import AuthMiddleware from '../middleware/authMiddleware';
import factory from '../factories';

const carRoute = Router();

carRoute.put('/:id', AuthMiddleware.checkAuth, factory.carHandler.updateCar);
carRoute.post('/', AuthMiddleware.checkAuth, factory.carHandler.saveNewCar);

carRoute.get('/:id', factory.carHandler.getCarById);
carRoute.get('/', factory.carHandler.getCarsList);

carRoute.delete('/:id', AuthMiddleware.checkAuth, factory.carHandler.deleteCar);

export default carRoute;