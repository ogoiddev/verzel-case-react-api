import { Request, Response, Router } from 'express';
import AuthMiddleware from '../middleware/authMiddleware';
import factory from '../factories';

const loginAuthRoute = Router();

loginAuthRoute.post('/', factory.loginAuthHandler.checkToTokenUser);
loginAuthRoute.get(
  '/validate', 
  AuthMiddleware.checkAuth,
  (req: Request, res: Response) => {
    res.json({ token: 'checked' });
  },
);

export default loginAuthRoute;