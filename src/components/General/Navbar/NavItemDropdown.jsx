import React from 'react'
import styled, { css } from 'styled-components'

const SNavItemDropdown = styled.div`
  display: ${({ isNavItemOpen }) => isNavItemOpen ? 'flex' : 'none'};
  flex-direction: column;
  background: white;
  position: absolute;
  top: 74px;
  left: 158px;
`

const SNavItem = styled.a`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(32, 32, 32);
  padding: 10px 20px;
  line-height: 20px;
  transition: none;
  &:hover {
    background-image: linear-gradient(90deg, #27e3fd, #7f74f8 25%, #f61528 52%, #fecf3d 75%, #22e252);
    color: white;
  }
`

function NavItemDropdown({ isNavItemOpen, setIsNavItemOpen }) {

  return (
    <SNavItemDropdown isNavItemOpen={isNavItemOpen}>
      <SNavItem href="https://www.baseprotocol.org/#definingbase">Basics</SNavItem>
      <SNavItem onClick={setIsNavItemOpen} href="https://drive.google.com/file/d/1O9V4vjygGmno90NAXSDtj9IwZAelZCsj/view" target="_blank">Whitepaper</SNavItem>
      <SNavItem onClick={setIsNavItemOpen} href="https://drive.google.com/file/d/1yy2ZySspCxdsqawOTcvgPyuY7fnp_hVT/view" target="_blank">Litepaper</SNavItem>
    </SNavItemDropdown>
  )
}

export default NavItemDropdown
