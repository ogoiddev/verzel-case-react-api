import { Router } from 'express';
import factory from '../factories';
import AuthMiddleware from '../middleware/authMiddleware';

const loginAuthRoute = Router();

loginAuthRoute.post('/', factory.loginAuthHandler.checkToTokenUser);
loginAuthRoute.get(
  '/validate', 
  AuthMiddleware.checkAuth,
  factory.loginAuthHandler.getUserValid,
);

export default loginAuthRoute;