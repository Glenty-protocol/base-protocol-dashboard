import React from 'react'
import styled from 'styled-components'
import { InfoCircleOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd';

// Assets
import chainlinkLogo from './assets/chainlink-link-logo.png'
import rainbowBg from './assets/rainbow-bg.png'

const SContainer = styled.div`
  flex: 1;
  height: 100px;
  color: white !important;
  background: #474661;
  background-image: linear-gradient(115deg,#27e3fd,#22e252 25%,#fecf3d 57%,#f61528 86%,#7f74f8);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  margin-right: 24px;
  margin-bottom: 24px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  @media (max-width: 800px) {
    margin-right: 0px;
  }
`

const SRainbow = styled.div`
  border-top-right-radius: 5px;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  background: #424141;
  position: absolute;
  left: 6px;
  transition: ease-in-out all .25s;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
`

const SLabel = styled.span`
  position: absolute;
  top: 6px;
  left: 24px;
  font-weight: 300;
  font-size: 10px;
`

const SValue = styled.span`
  font-size: 18px;
`

const SInfoBtn = styled.button`
  position: absolute;
  bottom: 6px;
  right: 16px;
  background: transparent;
  border: none;
  height: 28px;
  width: 28px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const SDashStatsSmallText = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  color: rgba(255, 255, 255, .40);
  display: flex;
  align-items: center;
  justify-content: center;
`

const SDashStatsA = styled.a`
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  color: rgba(255, 255, 255, .40);
  display: flex;
  align-items: center;
  justify-content: center;
`

function DashStats({ label, value, infoText, marginRight, secondText, showChainlinkLogo }) {
  return (
    <SContainer marginRight={marginRight}>
      <SRainbow>
        <SLabel>{label}</SLabel>
        <SValue>{value}</SValue>
        <Tooltip title={infoText} color={'#474661'}>
          <SInfoBtn>
            <InfoCircleOutlined />
          </SInfoBtn>
        </Tooltip>
        
        {secondText && !showChainlinkLogo ? <SDashStatsSmallText>{secondText}</SDashStatsSmallText> : null}
        {secondText && showChainlinkLogo ?
          <SDashStatsA href="https://chain.link/" target="_blank">
            {secondText} <img alt="Chainlink Logo" style={{ height: 18, paddingLeft: 6, marginBottom: 2 }} src={chainlinkLogo} />
          </SDashStatsA>
        : null}
         
      </SRainbow>
    </SContainer>
  )
}

export default DashStats
