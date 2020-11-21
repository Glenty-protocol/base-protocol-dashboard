import React from 'react'
import styled from 'styled-components'

const SContainer = styled.div`
  background: white;
  padding: 8px;
  border: 1px solid rgba(0,0,0, .18);
` 

const SLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SSpan = styled.span`
  font-size: 14px;
`

const SLabel = styled.span`
  font-size: 10px;
  color: rgba(0,0,0, .8);
`

function CMCTooltip(props) {
  const { active, payload } = props

  let timestamp = ''
  let median = ''
  if (active) {
    timestamp = payload[0].payload.name
    median = payload[0].payload.median
  }
  return <SContainer>
    <SLabelContainer style={{ marginBottom: 12}}>
      <SLabel>Market Cap</SLabel>
      <SSpan>$ {median} B</SSpan>
    </SLabelContainer>
    <SLabelContainer>
      <SLabel>Timestamp</SLabel>
      <SSpan>{timestamp}</SSpan>
    </SLabelContainer>
  </SContainer>
}

export default CMCTooltip