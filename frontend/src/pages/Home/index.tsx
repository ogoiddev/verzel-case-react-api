import { Link } from "react-router-dom";
import Header from "../../components/Header";
import ListCarsContent from "../../components/ListCarsContent";
import SearchBox from "../../components/SeachBox";
import { HomeContainer } from "./styles";

export default function Home() {



  return (
    <HomeContainer>
      <Header/>
      <SearchBox/>
      <ListCarsContent/>
    </HomeContainer>
  );
}
