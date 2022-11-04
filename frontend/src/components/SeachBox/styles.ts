import styled from "styled-components";

export const SearchBoxContainer = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;


  background: ${({ theme }) => theme.COLORS.CONTRAST};

  label {
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: relative;
    

    input {
      width: 100%;
      height: 90%;
      font-size: 1.1rem;
      padding: 16px;
    }

    .search-icon {
      position: absolute;
      right: 8px;
      height: 100%;
      width: 36px;
    }
  }

`