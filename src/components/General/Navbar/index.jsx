import React, { useState } from 'react'
import styled from 'styled-components'
import HamburgerMenu from 'react-hamburger-menu'

import SocialMediaBundle from './SocialMediaBundle'
import MobileNavContent from './MobileNavContent'
import BaseBtn from './../BaseBtn'
import NavItemDropdown from './NavItemDropdown'

import innerBg from './navbar-bg.png'
import baseLogo from './baseLogo.png'
import downArrow from './down.svg'

const SNavbar = styled.nav`
  height: 93px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: transparent;
  background-image: linear-gradient(280deg, #27e3fd, #7f74f8 30%, #f61528 53%, #fecf3d 76%, #22e252);
  padding-bottom: 3px;
  box-shadow: 0px -2px 25px -3px rgba(0,0,0,0.2);
`

const SNavbarInner = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  background-image: url(${innerBg});
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 30px;
`

const SNavbarLeft = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SNavbarRight = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
`

const SBaseLogoA = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 43px;
  }
`

const SNavLink = styled.a`
  padding: 16px;
  padding-left: 28px;
  padding-right: 28px;
  text-transform: uppercase;
  color: #202020;
  font-weight: 700;
  font-size: 12px;
  user-select: none;
  img {
    width: 10px;
    margin-left: 8px;
  }
`

const SHamburgerMenu = styled(HamburgerMenu)`
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`

const SNavbarLeftContent = styled.div`
  display: flex;
  margin-left: 50px;
  @media (max-width: 900px) {
    display: none;
  }
`

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [isNavItemOpen, setIsNavItemOpen] = useState(false)

  return (
    <SNavbar>
      <SNavbarInner>
        <SNavbarLeft>
          <SBaseLogoA href="https://www.baseprotocol.org/">
            <img alt="Base Logo" src={baseLogo} />
          </SBaseLogoA>
          <SNavbarLeftContent>
            <SNavLink onClick={() => setIsNavItemOpen(!isNavItemOpen)}>
              Learn
              <img src={downArrow} alt="Down Arrow" />
            </SNavLink>
            <NavItemDropdown
              isNavItemOpen={isNavItemOpen}
              setIsNavItemOpen={() => setIsNavItemOpen(!isNavItemOpen)}
            />
            <SNavLink href="https://www.baseprotocol.org/presale">Join</SNavLink>
            <SNavLink href="https://github.com/Base-Protocol" target="_blank">Github</SNavLink>
            <SNavLink href="https://cascade.baseprotocol.org/">Cascade</SNavLink>
            <SNavLink href="https://dashboard.baseprotocol.org/">Dashboard</SNavLink>
          </SNavbarLeftContent>
        </SNavbarLeft>

        <SNavbarRight>
          <BaseBtn
            marginRight={'28px'}
            isMainNavbar={true}
            href={'https://www.baseprotocol.org/presale'}
          />
          <SocialMediaBundle />
          <SHamburgerMenu
            isOpen={isMobileNavOpen}
            menuClicked={() => setIsMobileNavOpen(!isMobileNavOpen)}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='black'
            borderRadius={0}
            animationDuration={0.25}
          />
        </SNavbarRight>
      </SNavbarInner>
      <MobileNavContent
        isMobileNavOpen={isMobileNavOpen}
      />
    </SNavbar>
  )
}

export default Navbar
