import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;

  justify-content: space-around;
  align-items: center;

  position: stick;
  top: 0;

  img {
    width: 78px;
    height: 70px;
    margin: auto 0;
    border-radius: 50%;
  }

  .right-side {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 8px;

    button {
      display: flex;
      align-items: center;
      background: none;
      margin: 0 16px;
      border: 1px solid transparent;
      padding: 8px;

      :hover {
        border: 1px solid ${({ theme }) => theme.COLORS.CONTRAST};
        transition: 0.3s;
        border-radius: 4px;

      }
    }

    a {
      text-decoration: none;
      border-bottom: 1px solid;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.TEXT_BLACK};

      padding: 4px 8px;
      
      :hover {
        color: ${({ theme }) => theme.COLORS.PRIMARY};
        background: ${({ theme }) => theme.COLORS.CONTRAST};
        transition: 0.3s;
        border-radius: 4px;
      }
    }

    
  }
    
  .login-icon {

    height: 36px;
    width: 36px;

    margin: 0 8px;

    color: ${({theme}) => theme.COLORS.TEXT_BLACK};
  }
  
`