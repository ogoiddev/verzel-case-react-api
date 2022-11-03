import React, { useEffect, useState } from "react";
import { getListOfCars } from "../../services/CarsDataApi";
import { ListCarsContentContainer } from "./styles";

export interface IListOfCars {
  _id: string,
  model: string,
  year: number,
  color: string,
  status: boolean,
  buyValue: number,
  imgs: string[],
  seatsQty: number,
  doorsQty: number
  features: {
    state: string,
    city: string,
    km: number,
    gearShift: string
  },
}


export default function ListCarsContent() {
  const [listOfCars, setListOfCars] = useState<IListOfCars[]>()

  useEffect(() => {
    (async () => {
      const data = await getListOfCars()
      console.log(data);
      setListOfCars(data)
    })()
  }, [])


  return (
    <ListCarsContentContainer>
      
    </ListCarsContentContainer>
  );
}
