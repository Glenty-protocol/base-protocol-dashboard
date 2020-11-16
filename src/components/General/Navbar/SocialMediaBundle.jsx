import React, { Fragment } from 'react'
import styled from 'styled-components'

import discordIcon from './discordIcon.svg'
import emailIcon from './emailIcon.svg'
import twitterIcon from './twitterIcon.svg'
import mediumIcon from './mediumIcon.svg'

const SSocialMediaWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`

const SSocialMediaBtn = styled.a`
  border: none;
  background: transparent;
  margin-right: 20px;
  img {
    height: 24px;
  }
  &:focus {
    outline: none;
  }
`

function SocialMediaBundle() {
  return (
    <SSocialMediaWrapper>
      <SSocialMediaBtn href="https://discord.gg/UCt385" target="_blank">
        <img alt="Discord" src={discordIcon} />
      </SSocialMediaBtn>
      <SSocialMediaBtn href="https://twitter.com/baseprotocol" target="_blank">
        <img alt="Twitter" src={twitterIcon} />
      </SSocialMediaBtn>
      <SSocialMediaBtn href="https://t.me/baseprotocol" target="_blank">
        <img alt="Telegram" src={emailIcon} />
      </SSocialMediaBtn>
      <SSocialMediaBtn style={{ marginRight: 0 }} href="https://medium.com/@BaseProtocol" target="_blank">
        <img alt="Medium" src={mediumIcon} />
      </SSocialMediaBtn>
    </ SSocialMediaWrapper>
  )
}

export default SocialMediaBundle
