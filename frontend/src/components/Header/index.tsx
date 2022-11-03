import React from "react";
import { HeaderContainer } from "./styles";
import logo from '../../../public/Screenshot 2022-11-02 165849.jpg'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Logo da empresa" />

    </HeaderContainer>
  )
}
