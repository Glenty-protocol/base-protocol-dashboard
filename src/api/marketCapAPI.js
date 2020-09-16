import axios from 'axios'

const marketCapAPI = {}

marketCapAPI.getSnapshot = async () => {
  try {
    const { data: { marketCapSS } } = await axios({
      method: 'GET',
      url: 'http://localhost:4000/api/market-cap-history'
    })

    return marketCapSS
  } catch (err) {
    console.error(err)
  }
}

marketCapAPI.medianHistory = (data) => {
  const medianNums = []

  const medianData = data.map((record) => {
    medianNums.push(record.median / Math.pow(10, 9))
    return {
      name: record.timestamp,
      median: (record.median / Math.pow(10, 9)).toFixed(2),
    }
  })

  const medianMax = Math.floor(Math.max(...medianNums)) + 1
  const medianMin = Math.floor(Math.min(...medianNums)) - 1

  return {
    medianData,
    medianMax,
    medianMin,
  }
}

marketCapAPI.getAllMCStats = (data) => {
  const siteArr = []
  const siteNums = []
  const chartLabels = []
  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#3f51b5',
    '#00bcd4',
    '#4caf50',
    '#ffeb3b',
    '#cddc39',
    '#ff5722',
    '#607d8b'
  ]

  data.forEach(({ filteredMarketCaps, timestamp }, mainIdx) => {
    const obj = {}

    filteredMarketCaps.forEach(({ site, value: marketCap }, idx) => {
      obj.name = timestamp
      obj[site.split('-').join('_')] = (marketCap / Math.pow(10, 9)).toFixed(2)
      siteNums.push(marketCap / Math.pow(10, 9))
      if (mainIdx === 0) {
        chartLabels.push({
          label: site.split('-').join('_'),
          stroke: colors[idx],
        })
      }
    })

    siteArr.push(obj)
  })

  const siteMax = Math.floor(Math.max(...siteNums)) + 1
  const siteMin = Math.floor(Math.min(...siteNums)) - 1

  return {
    siteArr,
    siteMin,
    siteMax,
    chartLabels,
  }

}



export default marketCapAPI