import React, { useState } from "react";
import { HeaderContainer } from "./styles";
import logo from '../../../public/Logo-car-shop.png'
import {FaUserCircle} from 'react-icons/fa'
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [userLog, setUserLog] = useState()

  

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
          Minha conta
        </button>
      </div>
    </HeaderContainer>
  )
}
