import axios from "axios";
import moment from 'moment'
import _ from "lodash";

const marketCapAPI = {};

marketCapAPI.getSnapshot = async () => {
  try {
    const {
      data: { marketCapSS },
    } = await axios({
      method: "GET",
      url: "https://api.baseprotocol.org/api/market-cap-history",
    });

    return marketCapSS;
  } catch (err) {
    console.error(err);
  }
};

marketCapAPI.getOracleMarketCapHistory = async () => {
  try {
    const { data: { result } } = await axios({
      method: "GET",
      url: "https://api.baseprotocol.org/api/oracle-market-cap-history"
    })

    const medianNums = []
    const medianData = result.map((record) => {
      medianNums.push(record.answer / Math.pow(10, 9))
      return {
        name: moment.unix(record.timestamp).format('MM/DD HH:mm'),
        timestamp: moment.unix(record.timestamp).format('MM/DD'),
        median: (record.answer / Math.pow(10, 9)).toFixed(2)
      }
    })

    const medianMax = Math.floor(Math.max(...medianNums)) + 1  
    const medianMin = Math.floor(Math.min(...medianNums)) - 1;

      return {
      medianData,
      medianMax,
      medianMin,
    };
  } catch (err) {
    console.error(err)
  }
}

marketCapAPI.medianHistory = (data) => {
  const medianNums = [];

  const medianData = data.map((record) => {
    medianNums.push(record.median / Math.pow(10, 9));
    return {
      name: record.timestamp,
      median: (record.median / Math.pow(10, 9)).toFixed(2),
    };
  });

  const medianMax = Math.floor(Math.max(...medianNums)) + 1;
  const medianMin = Math.floor(Math.min(...medianNums)) - 1;

  return {
    medianData,
    medianMax,
    medianMin,
  };
};

marketCapAPI.getAllMCStats = (data) => {
  const siteArr = [];
  const siteNums = [];
  const chartLabels = [];
  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#3f51b5",
    "#00bcd4",
    "#4caf50",
    "#ffeb3b",
    "#cddc39",
    "#ff5722",
    "#607d8b",
  ];

  data.forEach(({ filteredMarketCaps, timestamp }, mainIdx) => {
    const obj = {};
    _.uniqBy(filteredMarketCaps, "site").forEach(
      ({ site, value: marketCap }, idx) => {
        if (marketCap / Math.pow(10, 9) <= 300) {
          return
        }
        obj.name = timestamp;
        obj[site.split("-").join("_")] = (marketCap / Math.pow(10, 9)).toFixed(
          2,
        );
        siteNums.push(marketCap / Math.pow(10, 9));
        if (mainIdx === 0) {
          chartLabels.push({
            label: site.split("-").join("_"),
            stroke: colors[idx],
          });
        }
      },
    );

    siteArr.push(obj);
  });

  const siteMax = Math.floor(Math.max(...siteNums)) + 1;
  const siteMin = Math.floor(Math.min(...siteNums)) - 1;

  return {
    siteArr,
    siteMin,
    siteMax,
    chartLabels,
  };
};

export default marketCapAPI;
