import styled from "styled-components";

export const CardCarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 300px;
  max-height: 270px;

  
  img {
    object-fit: fill;

  }

  h2 {
    padding: 8px;
  }

  .description {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 0 8px;

    p {
      padding: 4px 0;
    }
  }

  .price {
    font-size: 1.6rem;
    color: ${({theme}) => theme.COLORS.CONTRAST};
    padding: 8px;
  }
  


`