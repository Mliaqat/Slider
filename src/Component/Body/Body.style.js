import styled from "styled-components";

export const Bodystyle = styled.article`
  .continer {
    display: grid;
    grid-template-columns: 12rem 1fr;
    justify-content: center;
    align-items: end;
    width: 70%;
    margin: auto;
    margin-top: 3rem;
    column-gap: 3rem;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
  }
  hr {
    width: 35%;
  }

  .text {
    margin-top: 2rem;
  }
`;
