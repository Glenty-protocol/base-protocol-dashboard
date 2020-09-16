import React, { useState, useEffect } from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Legend,
  Line,
} from 'recharts';
import styled from 'styled-components'

import DashStats from './DashStats'
import DashLoading from './DashLoading'
import Navbar from './../General/Navbar'
import ChartCard from './ChartCard'
import DashNav from './DashNav'
import OracleContent from './OracleContent'
import BaseContent from './BaseContent'

import marketCapAPI from './../../api/marketCapAPI'

import './assets/dark-bg.css'

const SDashboardContainer = styled.section`
  padding: 16px;
  padding-left: 48px;
  padding-right: 0px;
  width: 98%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;
  margin-top: 96px;
`

const SDashStatsWrapper = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  @media (max-width: 900px) {
    display: block;
  }
  div {
    &:last-child {
      margin-right: 0px !important;
    }
    @media (max-width: 900px) {
      margin-right: 0px !important;
    }
  }
`

const SChartTitle = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
  color: white;
  font-size: 24px;
  text-align: center;
`

const SBottomColorBox = styled.div`
  height: 3px;
  width: 100%;
  background: #474661;
  background-image: linear-gradient(115deg,#27e3fd,#22e252 25%,#fecf3d 57%,#f61528 86%,#7f74f8);
  background-position: bottom;
  background-size: cover;
  position: fixed;
  bottom: 0;
  left: 0;
`

const SSmallTitleText = styled.span`
  display: block;
  font-size: 12px;
  text-align: center;
  margin: 0px;
  color: rgba(255, 255, 255, .4);
`

const SDashboardMainContainer = styled.div`
  width: 100%;
  @media (min-width: 1900px) {
    padding-left: 156px;
  }
`

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false)
  const [medianStats, setMedianStats] = useState({})
  const [allStats, setAllStats] = useState({})
  const [cryptoMarketCap, setCryptoMarketCap] = useState('')
  const [baseTargetPrice, setBaseTargetPrice] = useState(0)
  const [selectedNavItem, setSelectedNavItem] = useState('overview')

  useEffect(() => {
    (async () => {
      const ssData = await marketCapAPI.getSnapshot()
      setTimeout(() => {
        setIsLoading(true)
      }, 1500)

      const medianStatsSS = marketCapAPI.medianHistory(ssData)
      setMedianStats(medianStatsSS)

      const { medianData } = medianStatsSS
      setCryptoMarketCap(Number(medianData[medianData.length - 1].median).toFixed(0))
      setBaseTargetPrice(
        (Number(medianData[medianData.length - 1].median) / 1000).toFixed(3)
      )

      const allStatsSS = marketCapAPI.getAllMCStats(ssData)
      setAllStats(allStatsSS)
    })()
  }, [])

  if (!isLoading) {
    return <DashLoading />
  }

  return (
    <SDashboardMainContainer>
      <SDashboardContainer>
        <Navbar />
        <DashNav
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem}
        />
        {selectedNavItem === 'overview' ?
          <>
            <SDashStatsWrapper>
              <DashStats
                label={'Current BASE Price'}
                value={`---`}
                infoText={`The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations. To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.`}
              />
              <DashStats
                label={'Target BASE Price'}
                value={`$ ${baseTargetPrice}`}
                infoText={`The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations. To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.`}
              />
              <DashStats
                label={'Crypto Market Cap'}
                value={`$ ${cryptoMarketCap} B`}
                infoText={`The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations. To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.`}
              />
            </SDashStatsWrapper>
            <SDashStatsWrapper>
              <DashStats
                label={'Next Rebase'}
                value={'00:00:00'}
                infoText={`The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations. To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.`}
              />
              <DashStats
                label={'Rebase Factor'}
                value={`0%`}
                infoText={`The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations. To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.`}
                secondText={'+/- (x) tokens'}
              />
              <DashStats
                label={'Current Supply'}
                value={`---`}
                secondText={'+/- (x) tokens after rebase'}
                infoText={`The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations. To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.`}
              />
            </SDashStatsWrapper>
            <ChartCard>
              <SChartTitle>Crypto Market Cap <SSmallTitleText>(in billions)</SSmallTitleText></SChartTitle>
              <ResponsiveContainer
                width={'100%'}
                height={300}
              >
                <AreaChart
                  data={medianStats.medianData}
                  margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                  }}
                >
                  <CartesianGrid strokeOpacity={0.2} strokeDasharray="0 0" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[medianStats.medianMin, medianStats.medianMax]} />
                  <Tooltip />
                  <Area type="monotone" dataKey="median" stroke="#8884d8" fill="#474661" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
            <ChartCard style={{ marginTop: 24 }}>
              <SChartTitle>
                Market Cap Sources
          <SSmallTitleText>(in billions)</SSmallTitleText>
              </SChartTitle>
              <ResponsiveContainer
                width={'100%'}
                height={300}
              >
                <LineChart data={allStats.siteArr}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeOpacity={0.2} strokeDasharray="0 0" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[allStats.siteMax - 20, allStats.siteMax]} />
                  <Tooltip />
                  <Legend wrapperStyle={{ color: 'white' }} />
                  {allStats.chartLabels.map(({ label, stroke }, idx) => {
                    return <Line type="monotone" dataKey={label} stroke={stroke} key={idx} />
                  })}
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </>
          : null}
        {selectedNavItem === 'base' ?
          <BaseContent />
          : null}

        {selectedNavItem === 'oracles' ?
          <OracleContent />
          : null}
        <SBottomColorBox />
      </SDashboardContainer>

    </SDashboardMainContainer>
  )
}

export default Dashboard
