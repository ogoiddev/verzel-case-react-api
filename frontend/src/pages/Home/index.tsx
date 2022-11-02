import { Link } from "react-router-dom";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Link to='/cars/register'>LINK para register</Link>

    </HomeContainer>
  );
}
