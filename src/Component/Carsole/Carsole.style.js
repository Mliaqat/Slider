import styled from "styled-components";
import img from "../../Asset/right.png";
import img2 from "../../Asset/left.png";

export const Carsolestyle = styled.main`
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 400px;
  }

  @media (max-width: 768px) {
    .swiper-slide {
      width: 250px;
      height: auto;
    }
  }

  /* .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
  } */
  .swiper-container-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-container-3d .swiper-slide-shadow-right {
    background-image: none;
  }

  /* #########Button########## */
  .swiper-button-next {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    top: 96%;
    right: 40%;
  }

  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev {
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: 100% auto;
    background-position: center;
    top: 96%;
    left: 30%;
  }

  .swiper-button-prev::after {
    display: none;
  }

  .container .swiper-container {
    width: 70%;
    /* position: absolute;
    left: 50%;
    bottom: -16vw;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 2;
    padding-bottom: 3vw; */
  }

  .swiper-slide img {
    display: block;
    width: 18rem;
    height: 25rem;
  }

  .text {
    visibility: hidden;
  }

  .swiper-slide-active {
    background-color: rgb(167, 167, 56);
    padding: 2rem 2rem 4rem 2rem;
    margin: 2rem;
    transform: translate3d(0.66423px, 50px, -317.78589px) rotateX(0deg)
      rotateY(-1.55718deg) scale(1) !important;
    .text {
      display: flex;
      justify-content: center;
      visibility: visible;
      margin-top: 1rem;
    }
  }
  .swiper-slide-prev {
    transform: translate3d(14px, 113px, -121px) rotateX(0deg) rotateY(20deg) !important;
  }

  .swiper-slide-next {
    transform: translate3d(-1px, 113px, -56px) rotateX(0deg) rotateY(-23deg) !important;
  }

  @media (max-width: 768px) {
    .container .swiper-container {
      bottom: -58vw;
      padding-bottom: 8vw;
    }
  }
`;
