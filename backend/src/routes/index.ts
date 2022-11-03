import { Router } from 'express';
import carRoutes from './carRoutes';
import loginAuthRoute from './loginAuthRoute';
import uploadImgRoute from './uploadImgRoute';
import userRoutes from './userRoutes';

const Routes = Router();

Routes.use('/cars', carRoutes);
Routes.use('/users', userRoutes);
Routes.use('/login', loginAuthRoute);
Routes.use('/upload', uploadImgRoute);

export default Routes;
