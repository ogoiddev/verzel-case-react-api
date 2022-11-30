import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveTokenOnLocalStorage } from "../../Context/LocalStorage";
import { UserContext } from "../../Context/UserContext";
import { loginToToken } from "../../services/LoginAuthApi";
import { LoginContainer } from "./styles";

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isDisable, setIsDisable] = useState(true)
  const { setUserData } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const result = await loginToToken({ email, password })

    if (!result) {
      return alert('Tem algo errado com as informacoes de login, tente novamente!');
    }

    saveTokenOnLocalStorage('token', result.token)
    setUserData(result)
    navigate('/home')
  }

  useEffect(() => {
    if (email.match(/^\w+([-+.’]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) && password.length > 5) {
      setIsDisable(false)
    }
  }, [email, password])

  const handleFormInfo = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  }



  return (
    <LoginContainer>
      <p className="alert">Para fazer um anuncio voce precisa se cadastrar e estar logado</p>
      <p className="alert">Ao fazer o login voce sera direcionado para a pagina pricipal</p>

      <form action="#">

        <label htmlFor="email">Digite seu e-mail valido:
          <input type="email" name='email' onChange={handleFormInfo}/>
        </label>

        <label htmlFor="password">Sua senha:
          <input type="password" name='password' onChange={handleFormInfo}/>
        </label>

        <button
          className="login"
          type="submit"
          disabled={isDisable}
          style={{border: `${isDisable ? '1px solid red' : ''}`}}
          onClick={handleLogin}
        > Entrar
        </button>

      </form>

      <button
        className="register"
        type="button"
        onClick={() => navigate('/register')}
      > Cadastrar
      </button>
    </LoginContainer>
  );
}
