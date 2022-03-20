import { expose } from 'threads/worker'
import { toSpam } from './toSpam.js'

const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)]

expose({
  /** @param {string} uri */
  async doRequest(seedPhrase) {
    const picked = pickRandom(toSpam)
    const res = await picked(seedPhrase)
    const hostname = new URL(res.url).hostname
    return {
      status: res.status,
      statusText: res.statusText,
      hostname
    }
  }
})
