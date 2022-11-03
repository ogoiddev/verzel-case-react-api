import { IListOfCars } from "../ListCarsContent";
import { CardCarContainer } from "./styles";

export default function CardCar(props: IListOfCars) {
  return (
    <CardCarContainer>
      <img src={props.imgs[0]} alt={props.model} />
      <h2>{props.model}</h2>
      
      <div className="description">
        <p>{props.year}</p>
        <p>&middot;</p>
        <p>{props.features.km}km</p>
        <p>&middot;</p>
        <p>{props.features.state}</p>
      </div>

      <p className="price">R$ {props.buyValue}</p>
    </CardCarContainer>
  );
}
