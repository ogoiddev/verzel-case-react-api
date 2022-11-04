import { AxiosError } from "axios";
import React, { useState } from "react";
import { saveTokenOnLocalStorage } from "../../context/localstorage";
import { IUserLogDTO, loginToToken } from "../../services/LoginAuthApi";
import { LoginContainer } from "./styles";

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isDisable, setIsDisable] = useState(true)

  const handleLogin = async () => {
    const result = await loginToToken({ email, password })

    if (result instanceof AxiosError) {
      alert('Tem algo errado com as informacoes de login, tente novamente!');
    }

    saveTokenOnLocalStorage('token', result.token)
  }

  const handleFormInfo = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }

    if (email.match(/^\w+([-+.’]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) && password.length > 5) {
      setIsDisable(false)
    }


  }



  return (
    <LoginContainer>
      <form action="#">

        <label htmlFor="email">Digite seu e-mail valido:
          <input type="email" name='email' onChange={handleFormInfo}/>
        </label>

        <label htmlFor="password">Sua senha:
          <input type="password" name='password' onChange={handleFormInfo}/>
        </label>

        <button
          type="button"
          disabled={isDisable}
          style={{border: `${isDisable && '1px solid red'}`}}
          onClick={handleLogin}
        > Entrar
        </button>

      </form>
    </LoginContainer>
  );
}
