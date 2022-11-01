import { Router } from 'express';
import carRoutes from './carRoutes';

const Routes = Router();

Routes.use('/cars', carRoutes);

export default Routes;
