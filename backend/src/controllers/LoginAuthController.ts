import { Request, Response } from 'express';
import Login from '../services/LoginServices/Service';

export default class LoginController {
  constructor(private service: Login) {}

  public checkToTokenUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const token = await this.service.getToken(email, password);

    res.status(200).json({ token });
  };
}
