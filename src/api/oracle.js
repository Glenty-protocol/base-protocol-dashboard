import ethers from 'ethers'

import mcABI from './abi/market-cap-abi.json'

const provider = new ethers.providers.Web3Provider(window.ethereum)
const mcAddress = "0xEC8761a0A73c34329CA5B1D3Dc7eD07F30e836e2"
const marketCapCnt = new ethers.Contract(mcAddress, mcABI, provider)

const oracle = {}

oracle.getLatestMarketCap = async () => {
  try {
    const marketCap = Number((await marketCapCnt.latestAnswer()).toString()) / 100000000000000000

    return marketCap
  } catch (err) {
    return err
  }
}

export default oracle