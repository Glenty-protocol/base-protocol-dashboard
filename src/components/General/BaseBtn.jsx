import React from 'react'
import styled from 'styled-components'

import whiteBg from './Navbar/white-btn-bg.png'

const SBaseBtnUpper = styled.a`
  display: flex; 
  justify-content: center;
  background-color: #eaeaea;
  background-image: url(${whiteBg});
  background-size: cover;
  color: #202020;
  font-weight: 700;
  padding: 10px 20px;
  font-size: 12px;
  letter-spacing: 1px;
  transition: ease-in-out all .15s;
  text-align: center;
  border-top-right-radius: 4px;
  line-height: 21px;
  @media (max-width: 1000px) {
    display: ${({ isMainNavbar }) => isMainNavbar ? 'none' : 'block'}
  }
`

const SBaseBtnOutter = styled.div`
  background-image: linear-gradient(115deg, #27e3fd, #22e252 25%, #fecf3d 57%, #f61528 86%, #7f74f8);
  padding-bottom: 3px;
  padding-left: 3px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  margin-right: ${({ marginRight }) => marginRight ? marginRight : '0px'};
  @media (max-width: 1000px) {
    display: ${({ isMainNavbar }) => isMainNavbar ? 'none' : 'block'}
  }
  &:hover {
    ${SBaseBtnUpper} {
      transform: translateX(5px) translateY(-5px);
      color: white;
      background-image: linear-gradient(115deg, #7f74f8,  #f61528 25%, #fecf3d 57%, #22e252 86%, #27e3fd);
    }
  }
`

function BaseBtn({ text = 'TOKEN SALE', marginRight, isMainNavbar, href }) {
  return (
    <SBaseBtnOutter marginRight={marginRight} isMainNavbar={isMainNavbar}>
      <SBaseBtnUpper isMainNavbar={isMainNavbar} href={href}>
        {text}
      </SBaseBtnUpper>
    </SBaseBtnOutter>
  )
}

export default BaseBtn
