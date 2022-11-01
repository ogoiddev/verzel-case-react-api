import { Request, Response, Router } from 'express';

const carRoute = Router();

carRoute.get('/', (_req: Request, res: Response) =>
  res.json('API Connected - APP listen'));

export default carRoute;