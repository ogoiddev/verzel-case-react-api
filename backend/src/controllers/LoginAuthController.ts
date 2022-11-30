import { Request, Response } from 'express';
import ValidateJWT from '../utils/JWT/JWT.Validate';
import Login from '../services/LoginServices/Service';

export default class LoginController {
  constructor(private service: Login) {}

  public checkToTokenUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const userData = await this.service.getToken(email, password);

    res.status(200).json(userData);
  };
  
  public getUserValid = async (req: Request, res: Response) => {
    const requestAuth = req.headers.authorization;
    
    if (typeof requestAuth === 'string') {
      const user = ValidateJWT.validateToken(requestAuth);

      const userData = await this.service.getUserByEmail(user.data.email);

      res.status(200).json({ userData });
    }
  };
}
