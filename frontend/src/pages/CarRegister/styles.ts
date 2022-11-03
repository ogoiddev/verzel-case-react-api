import styled from "styled-components";

export const CarRegisterContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  
  align-items: center;

  h2 {
    margin: 32px;
    padding: 16px;
    width: 100%;
    text-align: center;
    background: ${({ theme }) => theme.COLORS.CONTRAST};
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  .car-info-form {
    min-width: 670px;
    width: 40%;
    min-height: 40vh;
    max-height: 60vh;
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 16px;

    padding: 32px;
    border-radius: 4px;
    box-shadow: 0 0 4px gray;
    background: #1f1f1f10;

    button {
      align-self: flex-end;
      width: 132px;
      height: 43px;
      font-weight: 600;
      font-size: 1.2rem;
      border: none;
      background: ${({ theme }) => theme.COLORS.CONTRAST};
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      border-radius: 100px 0 0 0;
      padding: 0 16px;
      text-align: end;

      :hover {
        filter: brightness(1.3);
      }
    }

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
  }
  
  .car-img-form {
    min-width: 670px;
    width: 40%;
    min-height: 54px;
    max-height: 10vh;
    margin-top: 32px;

    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    gap: 8px;

    padding: 16px;
    border-radius: 4px;
    box-shadow: 0 0 4px gray;
    background: #1f1f1f10;

    transition: 0.3s;
    
    input {
      box-shadow: 0 0 4px gray;
      height: 100%;
      padding: 8px;
    }

    button {
      width: 300px;
      height: 36px;
      font-weight: 600;
      font-size: 1.2rem;
      border: none;
      background: ${({ theme }) => theme.COLORS.CONTRAST};
      color: ${({ theme }) => theme.COLORS.PRIMARY};

      :hover {
        filter: brightness(1.3);

      }
    }
  }


`