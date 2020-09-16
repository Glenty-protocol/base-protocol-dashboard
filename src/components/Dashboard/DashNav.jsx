import React from 'react'
import styled from 'styled-components'

import dashboardImg from './assets/dashboard.svg'
import moneyImg from './assets/money.svg'
import serverImg from './assets/server.svg'

const SDashNav = styled.div`
  height: calc(100% - 80px);
  width: 50px;
  background: #191919;
  position: fixed;
  left: 0;
  top: 90px;
  box-shadow: 0px -2px 25px -3px rgba(0,0,0,0.2);
  @media (min-width: 1900px) {
    width: 180px;
  }
`

const SDashNavItem = styled.div`
  height: 70px;
  background: ${(props) => props.selected ? 'rgb(66, 65, 65)' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(255,255,255,.20);
  transition: ease-in-out all .15s;
  cursor: pointer;
  img {
    height: 18px;
  }
  span {
    color: rgba(255,255,255);
    padding-left: 24px;
    font-size: 12px;
    display: none;
    color: rgba(255,255,255, .8);
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
    background: ${({ selected }) => !selected && 'linear-gradient(115deg,#27e3fd,#22e252 25%,#fecf3d 57%,#f61528 86%,#7f74f8)'};
  }
`

function DashNav({
  selectedNavItem,
  setSelectedNavItem,
}) {


  return (
    <SDashNav>
      <SDashNavItem
        selected={selectedNavItem === 'overview'}
        onClick={() => setSelectedNavItem('overview')}
      >
        <img src={dashboardImg} alt="Dashboard" />
        <span>Overview</span>
      </SDashNavItem>
      <SDashNavItem
        selected={selectedNavItem === 'base'}
        onClick={() => setSelectedNavItem('base')}
      >
        <img src={moneyImg} alt="Money" />
        <span>BASE</span>
      </SDashNavItem>
      <SDashNavItem
        selected={selectedNavItem === 'oracles'}
        onClick={() => setSelectedNavItem('oracles')}
      >
        <img src={serverImg} alt="Data" />
        <span>Oracles</span>
      </SDashNavItem>
    </SDashNav>
  )
}

export default DashNav
