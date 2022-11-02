import { NextFunction, Request, Response } from 'express';
import { ErrorTypes } from '../errors/catalog';
import ValidateJWT from '../utils/JWT/JWT.Validate';

class AuthMiddleware {
  static checkAuth(req: Request, _res: Response, next: NextFunction) {
    const requestAuth = req.headers.authorization;
    
    if (typeof requestAuth === 'string') {
      ValidateJWT.validateToken(requestAuth);
    } else {
<<<<<<< HEAD
      throw Error(ErrorTypes.InvalidToken);
=======
      throw Error(ErrorTypes.)
>>>>>>> 3414a999afa9d8422ecc695270190cbd4a5d84e0
    }

    next();
  }
}

export default AuthMiddleware;