import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

import DashStats from "./DashStats";
import DashLoading from "./DashLoading";
import Navbar from "./../General/Navbar";
import ChartCard from "./ChartCard";
import DashNav from "./DashNav";
import OracleContent from "./OracleContent";
import BaseContent from "./BaseContent";
import MobileDashNav from "./MobileDashNav";
import CMCTooltip from './CMCTooltip'

// import clOracle from '../../api/oracle'
import marketCapAPI from "./../../api/marketCapAPI";

import "./assets/dark-bg.css";

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
  @media (max-width: 700px) {
    padding-left: 0px;
    margin-bottom: 96px;
    padding-bottom: 60px;
  }
`;

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
`;

const SChartTitle = styled.h2`
  margin-top: 16px;
  margin-bottom: 16px;
  color: white;
  font-size: 24px;
  text-align: center;
`;

const SBottomColorBox = styled.div`
  height: 3px;
  width: 100%;
  background: #474661;
  background-image: linear-gradient(
    115deg,
    #27e3fd,
    #22e252 25%,
    #fecf3d 57%,
    #f61528 86%,
    #7f74f8
  );
  background-position: bottom;
  background-size: cover;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const SSmallTitleText = styled.span`
  display: block;
  font-size: 12px;
  text-align: center;
  margin: 0px;
  color: rgba(255, 255, 255, 0.4);
`;

const SDashboardMainContainer = styled.div`
  width: 100%;
  @media (min-width: 1900px) {
    padding-left: 156px;
  }
`;

const coinLinkMap = {
  coin_gecko: "https://www.coingecko.com/en?page=1",
  coin_market_cap: "https://coinmarketcap.com/",
  coin_codex: "https://coincodex.com/market-overview#market",
  nomics: "https://nomics.com/",
  coin_checkup: "https://coincheckup.com/",
  on_chain_fx: "https://onchainfx.com/",
  coin_ranking: "https://coinranking.com/overview",
  trading_view: "https://www.tradingview.com/symbols/CRYPTOCAP-TOTAL/",
  coin_lib: "https://coinlib.io/",
  coin_lore: "https://www.coinlore.com/",
  live_coin_watch: "https://www.livecoinwatch.com/",
  coin_paprika: "https://coinpaprika.com/",
  coin_tracker: "https://www.cointracker.io/price",
};

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul
      className="recharts-default-legend"
      style={{ padding: 0, margin: 0, textAlign: "center" }}
    >
      {payload.map((entry, index) => (
        <li
          className="recharts-legend-item legend-item-0"
          style={{ display: "inline-block", marginRight: 10 }}
          key={index}
        >
          <a
            target="_blank"
            href={coinLinkMap[entry.value]}
            key={`item-${index}`}
            style={{ marginRight: 24, color: entry.color }}
          >
            {entry.value}
          </a>
        </li>
      ))}
    </ul>
  );
};

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [medianStats, setMedianStats] = useState({});
  const [allStats, setAllStats] = useState({});
  const [cryptoMarketCap, setCryptoMarketCap] = useState("");
  const [baseTargetPrice, setBaseTargetPrice] = useState(0);
  const [selectedNavItem, setSelectedNavItem] = useState("overview");

  useEffect(() => {
    (async () => {
      const oracleMCHistory = await marketCapAPI.getOracleMarketCapHistory()
      const clMarketCap = Number(oracleMCHistory.medianData[oracleMCHistory.medianData.length - 1].median)
      
      const ssData = await marketCapAPI.getSnapshot();

      const medianStatsSS = oracleMCHistory
      setMedianStats(medianStatsSS);

      const { medianData } = medianStatsSS;
      setCryptoMarketCap(
        clMarketCap.toFixed(0),
      );
      setBaseTargetPrice(
        (clMarketCap / 1000).toFixed(3),
      );

      const allStatsSS = marketCapAPI.getAllMCStats(ssData);
      setAllStats(allStatsSS);
      setIsLoading(true);
    })();
  }, []);

  if (!isLoading) {
    return <DashLoading />;
  }

  return (
    <SDashboardMainContainer>
      <SDashboardContainer>
        <Navbar />
        <DashNav
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem}
        />
        {selectedNavItem === "overview"
          ? (
            <>
              <SDashStatsWrapper>
                <DashStats
                  label={"Current BASE Price"}
                  value={`---`}
                  infoText={'The current spot price of BASE.'}
                />
                <DashStats
                  label={"Target BASE Price"}
                  value={`$ ${baseTargetPrice}`}
                  infoText={'The price at which BASE correlates with total crypto market cap.'}
                />
                <DashStats
                  label={"Crypto Market Cap"}
                  value={`$ ${cryptoMarketCap} B`}
                  secondText={"powered by Chainlink"}
                  showChainlinkLogo
                  infoText={'The total market capitalization of all cryptocurrencies.'}
                />
              </SDashStatsWrapper>
              <SDashStatsWrapper>
                <DashStats
                  label={"Next Rebase"}
                  value={"00:00:00"}
                  infoText={'When the next supply adjustment will occur.'}
                />
                <DashStats
                  label={"Rebase Factor"}
                  value={`0%`}
                  infoText={'How much supply will expand (+) or contract (-).'}
                  secondText={"+/- (x) tokens"}
                />
                <DashStats
                  label={"Current Supply"}
                  value={`---`}
                  infoText={'Current total BASE supply.'}
                  secondText={"+/- (x) tokens after rebase"}
                />
              </SDashStatsWrapper>
              <ChartCard>
                <SChartTitle>
                  Crypto Market Cap{" "}
                  <SSmallTitleText>(in billions)</SSmallTitleText>
                </SChartTitle>
                <ResponsiveContainer width={"100%"} height={300}>
                  <AreaChart
                    data={medianStats.medianData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeOpacity={0.2} strokeDasharray="0 0" />
                    <XAxis dataKey="timestamp" minTickGap={20} dy={8} />
                    <YAxis
                      domain={[medianStats.medianMin, medianStats.medianMax]}
                    />
                    <Tooltip content={CMCTooltip} />
                    <Area
                      type="monotone"
                      dataKey="median"
                      stroke="#8884d8"
                      fill="#474661"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartCard>
              <ChartCard style={{ marginTop: 24 }}>
                <SChartTitle>
                  Market Cap Sources
                  <SSmallTitleText>(in billions)</SSmallTitleText>
                </SChartTitle>
                <ResponsiveContainer width={"98%"} height={300}>
                  <LineChart
                    data={allStats.siteArr}
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                  >
                    <CartesianGrid strokeOpacity={0.2} strokeDasharray="0 0" />
                    <XAxis dataKey="name" minTickGap={10} dy={8} />
                    <YAxis
                      domain={[allStats.siteMax - 20, allStats.siteMax - 30]}
                    />
                    <Tooltip />
                    <Legend
                      wrapperStyle={{ color: "white" }}
                      content={renderLegend}
                    />
                    {allStats.chartLabels.map(({ label, stroke }, idx) => {
                      return (
                        <Line
                          type="monotone"
                          dataKey={label}
                          stroke={stroke}
                          key={idx}
                        />
                      );
                    })}
                  </LineChart>
                </ResponsiveContainer>
              </ChartCard>
            </>
          )
          : null}
        {selectedNavItem === "base" ? <BaseContent /> : null}

        {selectedNavItem === "oracles" ? <OracleContent /> : null}
        <MobileDashNav
          selectedNavItem={selectedNavItem}
          setSelectedNavItem={setSelectedNavItem}
        />
        <SBottomColorBox />
      </SDashboardContainer>
    </SDashboardMainContainer>
  );
}

export default Dashboard;
