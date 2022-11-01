import { Router } from 'express';
import carRoutes from './carRoutes';
import userRoutes from './userRoutes';

const Routes = Router();

Routes.use('/cars', carRoutes);
Routes.use('/users', userRoutes);

export default Routes;
