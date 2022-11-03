import { Link } from "react-router-dom";
import ListCarsContent from "../../components/ListCarsContent";
import { HomeContainer } from "./styles";

export default function Home() {



  return (
    <HomeContainer>
      <Link to='/cars/register'>LINK para register</Link>
      <ListCarsContent/>
    </HomeContainer>
  );
}
