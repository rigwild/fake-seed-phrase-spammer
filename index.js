import { spawn, Pool, Worker } from 'threads'
import { bip39Words } from './bip39Words.js'

const getPool = () => Pool(() => spawn(new Worker('./worker')), { size: 12, concurrency: 10 })
const pickRandom = arr => arr[Math.floor(Math.random() * arr.length)]
const getRandomSeedPhrase = (length = 12) => Array.from({ length }, (_, i) => pickRandom(bip39Words)).join(' ')

let pool = getPool()

;(async () => {
  let count = 1
  const countHostname = new Map()

  let tasks = []
  let locked = false

  setInterval(() => {
    if (locked) return

    const task = pool.queue(async ({ doRequest }) => {
      const seedPhrase = getRandomSeedPhrase()
      const res = await doRequest(seedPhrase)
      const hostname = new URL(res.url).hostname
      const hostCount = countHostname.get(hostname) || 0
      console.log(`[${count} | ${hostCount}] ${res.status} ${res.statusText} - ${hostname} - "${seedPhrase}"`)
      countHostname.set(hostname, hostCount + 1)
      count++
    })
    tasks.push(task)
  }, 5)

  setInterval(async () => {
    // somehow the thread pool lags after some time, periodically recreate it
    process.stdout.write('Clearing tasks... ')
    locked = true
    try {
      await pool.terminate(true)
      pool = getPool()
      console.log('done!')
    } catch (err) {
      console.error(err)
    } finally {
      locked = false
    }
  }, 20000)
})()
