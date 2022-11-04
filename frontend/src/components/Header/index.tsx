import React from "react";
import { HeaderContainer } from "./styles";
import logo from '../../../public/Screenshot 2022-11-02 165849.jpg'
import {FaUserCircle} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo da empresa" />

      <div className="right-side">
        <Link to='/home'>Comprar Carro</Link>
        <Link to='/cars/register'>Vender Carro</Link>
        <Link to="/sobre">Sobre Nos</Link>
        <button type="button">
          <FaUserCircle className="login-icon"/>
          Minha conta
        </button>
      </div>
    </HeaderContainer>
  )
}
