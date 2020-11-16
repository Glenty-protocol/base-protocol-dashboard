import React from "react";
import styled from "styled-components";

import dashboardImg from "./assets/dashboard.svg";
import moneyImg from "./assets/money.svg";
import serverImg from "./assets/server.svg";

const MobileDashNavContainer = styled.div`
  position: fixed;
  bottom: 3px;
  left: 0px;
  width: 100%;
  height: 60px;
  background: #191919;
  display: none;
  @media (max-width: 700px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

const SDashNavItem = styled.div`
  height: 70px;
  flex: 1;
  width: 33.33%;
  background: ${(props) =>
    props.selected
      ? "linear-gradient(115deg,#27e3fd,#22e252 25%,#fecf3d 57%,#f61528 86%,#7f74f8)"
      : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  transition: ease-in-out all 0.15s;
  cursor: pointer;
  img {
    height: 20px;
  }
  span {
    color: rgba(255, 255, 255);
    padding-left: 24px;
    font-size: 12px;
    display: none;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (min-width: 1900px) {
    padding-left: 18px;
    justify-content: flex-start;
    height: 72px;
    span {
      display: block;
    }
  }
  &:hover {
    background: ${({ selected }) =>
      !selected &&
      "linear-gradient(115deg,#27e3fd,#22e252 25%,#fecf3d 57%,#f61528 86%,#7f74f8)"};
  }
`;

function MobileDashNav({ selectedNavItem, setSelectedNavItem }) {
  return (
    <MobileDashNavContainer>
      <SDashNavItem
        selected={selectedNavItem === "overview"}
        onClick={() => setSelectedNavItem("overview")}
      >
        <img src={dashboardImg} alt="Dashboard" />
        <span>Overview</span>
      </SDashNavItem>
      <SDashNavItem
        selected={selectedNavItem === "base"}
        onClick={() => setSelectedNavItem("base")}
      >
        <img src={moneyImg} alt="Money" />
        <span>BASE</span>
      </SDashNavItem>
      <SDashNavItem
        selected={selectedNavItem === "oracles"}
        onClick={() => setSelectedNavItem("oracles")}
      >
        <img src={serverImg} alt="Data" />
        <span>Oracles</span>
      </SDashNavItem>
    </MobileDashNavContainer>
  );
}

export default MobileDashNav;
