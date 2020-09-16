import React from 'react'
import styled from 'styled-components'

import rebaseLogo from './assets/rebase-logo.svg'

import ChartCard from './ChartCard'
import BaseBtn from './../General/BaseBtn'

const SBaseContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  h2 {
    color: white;
    text-align: center;
    padding-top: 12px;
  }
  img {
    height: 80px;
  }
`

const SChartCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 24px;
`

function BaseContent() {
  return (
    <SBaseContentContainer>
      <ChartCard>
        <SChartCardContent>
          <img src={rebaseLogo} alt="Rebase" />
          <h2>BASE Section Coming Soon!</h2>
          <BaseBtn href={'https://www.baseprotocol.org/iloform'} text={'Join Now'} />
        </SChartCardContent>
      </ChartCard>
    </SBaseContentContainer>
  )
}

export default BaseContent
