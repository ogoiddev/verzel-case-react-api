import { Router } from 'express';
import factory from '../factories';

const userRoute = Router();

userRoute.put('/:id', factory.userHandler.updateUser);
userRoute.post('/', factory.userHandler.saveNewUser);

userRoute.get('/:id', factory.userHandler.getUserById);
userRoute.get('/', factory.userHandler.getUsersList);

userRoute.delete('/:id', factory.userHandler.deleteUser);

export default userRoute;