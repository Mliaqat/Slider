import styled from "styled-components";
import img from "../../Asset/banner.png";

export const Headerstyle = styled.main`
  .header {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    height: 30rem;
  }
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1 {
    text-align: center;
    color: white;
    font-size: 3rem;
  }
`;
