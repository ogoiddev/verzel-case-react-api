import { ICarDTO } from '../../services/CarServices/ICarDTO';

export const ICarDTOMock: ICarDTO = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

export const ICarWrongDTOMock = {
  model: 2,
  year: 1963,
  color: "WRONG",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}