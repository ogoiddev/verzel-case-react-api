import { Router } from 'express';
import factory from '../factories';

const loginAuthRoute = Router();

loginAuthRoute.post('/', factory.loginAuthHandler.checkToTokenUser);

export default loginAuthRoute;