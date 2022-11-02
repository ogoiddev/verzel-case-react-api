import { verify } from 'jsonwebtoken';

class ValidateJWT {
  static validateToken(token: string) {
    const data = verify(token, process.env.JWT_SECRET 
      || 'jwt_secret');

    return data;
  }
}

export default ValidateJWT;
