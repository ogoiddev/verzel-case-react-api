import styled from "styled-components";

export const CardCarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 300px;
  max-height: 280px;

  border: 0.5px solid #1d1d1d30;
  border-radius: 4px;
  overflow: hidden;

  :hover {
    box-shadow: 0 4px 4px gray;
    transition: 0.3s;
  }
  
  .thumb {
    height: 64%;
    
    display: flex;
    justify-content: center;
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;

      
      
    }
  }

  .model {
    padding: 4px 8px;
    font-size: 1.1rem;
    font-weight: 800;

  }

  .description {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 0 8px;
    font-weight: 600;
    font-size: 0.8rem;
    color: ${({theme}) => theme.COLORS.TEXT_BLACK};

    p {
      padding: 4px 0;
    }
  }

  .price {
    font-size: 1.4rem;
    font-weight: 800;
    color: ${({theme}) => theme.COLORS.CONTRAST};
    padding: 4px 8px;
  }
  


`