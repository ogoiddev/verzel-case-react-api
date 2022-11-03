import styled from "styled-components";

export const CardCarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 270px;
  min-height: 300px;

  
  img {
    object-fit: fill;

  }

  h2 {
    padding: 8px;
  }

  p {
    padding: 8px;
  }

  .price {
    font-size: 2rem;
    color: ${({theme}) => theme.COLORS.CONTRAST};
    padding: 8px;
  }
  


`