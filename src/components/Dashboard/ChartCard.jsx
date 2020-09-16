import React from 'react'
import styled from 'styled-components'

const ChartCardContainer = styled.div`
  width: 100%;
  background: #1c1c1c;
  box-shadow: 0px -2px 25px -3px rgba(0, 0, 0, 0.1);
  padding-bottom: 24px;
  border: 1px solid rgba(255, 255, 255, .20);
`

function ChartCard({ children, style = {} }) {
  return (
    <ChartCardContainer style={style}>
      {children}
    </ChartCardContainer>
  )
}

export default ChartCard
