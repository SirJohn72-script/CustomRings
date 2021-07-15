import styled from "styled-components";

export const OptionGemContainer = styled.div`
  width: 100%;
  h2 {
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    color: #393939;
    font-weight: 400;
  }
`;

export const OptionGemDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 1rem;
  h4 {
    font-family: "Raleway", sans-serif;
    font-size: 1.2rem;
    font-weight: 300;
    padding: 0.5rem 1rem;
    border: 1px solid #393939;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #393939;
      color: #eeeeee;
      transition: 0.3s all ease-in-out;
    }
  }
`;
