import { Request, Response } from 'express';
import Service from '../services/CarServices/Service';

export default class CarController {
  constructor(private service: Service) {}

  public saveNewCar = async (req: Request, res: Response) => {
    const { body } = req;
    const results = await this.service.saveNewCar(body);
    res.status(201).json(results);
  };

  public getCarsList = async (_req: Request, res: Response) => {
    const results = await this.service.getCarsList();
    res.status(200).json(results);
  };

  public getCarById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.getCarById(id);
    res.status(200).json(result);
  };

  public updateCar = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    
    const result = await this.service.updateCar(id, body);
    res.status(200).json(result);
  };

  public deleteCar = async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await this.service.deleteCar(id);
    res.status(204).json(result);
  };
}