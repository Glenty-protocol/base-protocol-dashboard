import React from 'react'
import styled from 'styled-components'

import baseLogo from './baseLogo.png'

import BaseBtn from './../BaseBtn'
import SocialMediaBundle from './SocialMediaBundle'

const SMobileContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 100%;
  transition: ease-in-out height .25s;
  height: ${(props) => props.isMobileNavOpen ? 'auto' : '0px'};
  margin-top: 3px;
  display: none;
  border-bottom: 1px solid rgba(0,0,0, .12);
  padding-bottom: ${(props) => props.isMobileNavOpen ? '24px' : '0px'};
  @media (max-width: 900px) {
    display: flex;
  }
`

const SNavLink = styled.a`
  margin-left: 24px;
  padding: 24px;
  text-transform: uppercase;
  color: #202020;
  font-weight: 700;
  font-size: 12px;
  text-align: center;
`

const SBaseLogoA = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 12px;
  img {
    height: 48px;
  }
`

const SMobileContentWrapper = styled.div`
  display: ${(props) => props.isMobileNavOpen ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function MobileNavContent(props) {
  return (
    <SMobileContentContainer isMobileNavOpen={props.isMobileNavOpen}>
      <SMobileContentWrapper isMobileNavOpen={props.isMobileNavOpen}>
        {/* <SBaseLogoA href="https://www.baseprotocol.org/">
          <img alt="Base Logo" src={baseLogo} />
        </SBaseLogoA> */}
        <SNavLink href="https://www.baseprotocol.org/">Learn</SNavLink>
        <SNavLink href="https://www.baseprotocol.org/presale">Join</SNavLink>
        <SNavLink href="https://www.baseprotocol.org/#Tech-Link">Github</SNavLink>
        <SNavLink href="https://cascade.baseprotocol.org/">Cascade</SNavLink>
        <SNavLink href="https://dashboard.baseprotocol.org/">Dashboard</SNavLink>
        <BaseBtn href="https://www.baseprotocol.org/iloform" marginRight={'-20px'} />
      </SMobileContentWrapper>
    </SMobileContentContainer>
  )
}

export default MobileNavContent
