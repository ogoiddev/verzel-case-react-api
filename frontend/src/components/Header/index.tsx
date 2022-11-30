import { useContext } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../public/Logo-car-shop.png';
import { UserContext } from "../../Context/UserContext";
import { HeaderContainer } from "./styles";

export default function Header() {
  const { userData } = useContext(UserContext)

  

  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <Link to='/home'>
        <img src={logo} alt="Logo da empresa" />
      </Link>

      <div className="right-side">
        <Link to='/home'>Comprar Carro</Link>
        <Link to='/cars/register'>Vender Carro</Link>
        <Link to="/sobre">Sobre Nos</Link>
        <button type="button" onClick={() => navigate('/login')}>
          <FaUserCircle className="login-icon"/>
          {userData.userData.name || "Minha conta"}
        </button>
      </div>
    </HeaderContainer>
  )
}
