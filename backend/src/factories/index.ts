import CarFactory from './CarFactory';
import UserFactory from './UserFactory';

const carHandler = CarFactory.make();
const userHandler = UserFactory.make();

export default { carHandler, userHandler };