import { IListOfCars } from "../ListCarsContent";
import { CardCarContainer } from "./styles";

export default function CardCar(props: IListOfCars) {
  return (
    <CardCarContainer>
      <div className="thumb">
        <img src={props.imgs[0]} alt={props.model} />
      </div>
      <p className="model">{props.model}</p>
      
      <div className="description">
        <p>{props.year}</p>
        <p>&middot;</p>
        <p>{props.features.km}km</p>
        <p>&middot;</p>
        <p>{props.features.state}</p>
      </div>

      <p className="price">R$ {props.buyValue.toString().split('000').join('.000')}</p>
    </CardCarContainer>
  );
}
