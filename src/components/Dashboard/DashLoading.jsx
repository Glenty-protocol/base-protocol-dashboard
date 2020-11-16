import React from "react";
import styled from "styled-components";

import gridLoading from "./assets/grid-loading.svg";
import baseLogo from "./../General/Navbar/baseLogo.png";
import rainbowBG from "./assets/rainbow-bg.png";

import Navbar from "./../General/Navbar";

const SDashLoadingWrapper = styled.section`
  @keyframes rotation {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(359deg);
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #eaeaea;
  > img {
    @media (min-width: 700px) {
      animation: rotation 1s infinite linear;
    }
    height: 128px;
  }
  span {
    color: white;
    font-size: 18px;
    margin-top: 8px;
  }
`;

const SBottomColorBox = styled.div`
  height: 3px;
  width: 100%;
  background: #474661;
  background-image: linear-gradient(
    115deg,
    #27e3fd,
    #22e252 25%,
    #fecf3d 57%,
    #f61528 86%,
    #7f74f8
  );
  background-size: cover;
  position: fixed;
  bottom: 0;
  left: 0;
`;

function DashLoading() {
  return (
    <SDashLoadingWrapper>
      {/* <Navbar /> */}
      <img alt="Grid Loading" src={baseLogo} />
      {/* <span>Loading Dashboard...</span> */}
      {/* <SBottomColorBox /> */}
    </SDashLoadingWrapper>
  );
}

export default DashLoading;
