import { Request, Response } from 'express';
import Service from '../services/UserServices/Service';

export default class CarController {
  constructor(private service: Service) {}

  public saveNewUser = async (req: Request, res: Response) => {
    const { body } = req;
    const results = await this.service.saveNewUser(body);
    res.status(201).json(results);
  };

  public getUsersList = async (_req: Request, res: Response) => {
    const results = await this.service.getUsersList();
    res.status(200).json(results);
  };

  public getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getUserById(id);

    res.status(200).json(result);
  };

  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    
    const result = await this.service.updateUser(id, body);
    res.status(200).json(result);
  };

  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await this.service.deleteUser(id);
    res.status(204).json(result);
  };
}