import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  
  form {
    min-width: 320px;
    max-width: 420px;
    width: fit-content;

    min-height: 400px;
    max-height: 50vh;
    height: fit-content;

    padding: 32px;

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

    button {
      width: 150px;
      height: 43px;
      border: none;
      background: ${({ theme }) => theme.COLORS.CONTRAST};
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      
      position: relative;
      :disabled {
        :hover:after {
          content: 'Preencha as informacoes corretamente para desabilitar';
          position: absolute;
          bottom: -16px;
          right: 0;
        }
      }
    }
  }


`