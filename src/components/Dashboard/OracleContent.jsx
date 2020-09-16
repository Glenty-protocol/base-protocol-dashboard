import React from 'react'
import styled from 'styled-components'

import rebaseOracleImg from './assets/rebase-oracle.png'

import ChartCard from './ChartCard'
import BaseBtn from './../General/BaseBtn'

const SOracleContentContainer = styled.section`
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

function OracleContent() {
  return (
    <SOracleContentContainer>
      <ChartCard>
        <SChartCardContent>
          <img src={rebaseOracleImg} alt="Rebase" />
          <h2>Oracle Section Coming Soon!</h2>
          <BaseBtn href={'https://www.baseprotocol.org/iloform'} text={'Join Now'} />
        </SChartCardContent>
      </ChartCard>
    </SOracleContentContainer>
  )
}

export default OracleContent
