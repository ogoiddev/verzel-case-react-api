export interface ICarDTO {
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  thumb: string,
  features: {
    state: string,
    city: string,
    km: number,
    gearShift: string,
  },
  seatsQty: number,
  doorsQty: number,
}
