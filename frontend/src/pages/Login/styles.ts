import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  .alert {
    width: 600px;
    min-width: fit-content;
    text-align: center;
    white-space: nowrap;
    padding: 16px;
    background: #1f1f1f10;
  }
  
  .register {
    width: 320px;
    height: 43px;
    border: none;
    background: ${({ theme }) => theme.COLORS.CONTRAST};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 1.2rem;
    font-weight: 600;
  }
  
  button:hover {
    filter: brightness(1.3);
  }

  form {
    min-width: 320px;
    max-width: 420px;
    width: fit-content;

    min-height: 400px;
    max-height: 50vh;
    height: fit-content;

    padding: 32px;
    margin: 64px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background: #1f1f1f10;

    label {
      display: flex;
      flex-direction: column;
      width: 300px;
      height: 72px;
      gap: 8px;
      font-weight: 600;
      

      input {
        border: none;
        box-shadow: 0 0 4px gray;
        height: 100%;
        padding: 8px 16px;
      }
    }

    .login {
      width: 150px;
      height: 43px;
      border: none;
      background: ${({ theme }) => theme.COLORS.CONTRAST};
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      font-size: 1.2rem;
      font-weight: 600;
      
      position: relative;
        :after {
          white-space: nowrap;
          letter-spacing: 1px;
          color: white;
          font-size: 1rem;
          font-weight: normal;
          padding: 8px;
          background: gray;
        }

        :active {
          transform: translate(1px, 1px);
        }

        :disabled {
          :hover:after {
            content: 'Preencha as informacoes corretamente para desabilitar';
            position: absolute;
            bottom: -64px;
            right: 0;
            transform: translateX(32%);
          }
        }
    }
  }


`