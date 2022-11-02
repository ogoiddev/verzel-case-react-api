import CarFactory from './CarFactory';
import LoginFactory from './LoginFactory';
import UserFactory from './UserFactory';

const carHandler = CarFactory.make();
const userHandler = UserFactory.make();
const loginAuthHandler = LoginFactory.make();

export default { carHandler, userHandler, loginAuthHandler };