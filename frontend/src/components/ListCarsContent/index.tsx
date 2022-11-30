import React, { useEffect, useState } from "react";
import { getListOfCars } from "../../services/CarsDataApi";
import CardCar from "../CardCar";
import Loading from "../Loading";
import { ListCarsContentContainer } from "./styles";

export interface IListOfCars {
  _id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean,
  buyValue: number,
  thumb?: string,
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
  const [listOfCars, setListOfCars] = useState<IListOfCars[]>([])

  useEffect(() => {
    (async () => {
      const data = await getListOfCars()

      setListOfCars(data)
    })()
  }, [listOfCars])

  if (!listOfCars) {
    return <Loading color={"blue"} />
  }

  return (
    <ListCarsContentContainer>
      <div className="content-list">
        { listOfCars.map(each => <CardCar key={each._id} {...each}/>)}
      </div>
    </ListCarsContentContainer>
  );
}
