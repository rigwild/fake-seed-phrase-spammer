import { spawn, Pool, Worker } from 'threads'
import bip39 from 'bip39'
import { toSpamHostnames } from './toSpam.js'

const getPool = () => Pool(() => spawn(new Worker('./worker')), { size: 12, concurrency: 10 })

let pool = getPool()

;(async () => {
  console.log(`Start spamming ${toSpamHostnames.length} scams`)
  console.log(toSpamHostnames)

  let globalCount = 1
  const hostnameCount = new Map()

  let locked = false

  setInterval(() => {
    if (locked) return

    pool.queue(async ({ doRequest }) => {
      const seedPhrase = bip39.generateMnemonic()
      const { status, statusText, hostname } = await doRequest(seedPhrase)
      const hostCount = hostnameCount.get(hostname) || 0
      console.log(`[${globalCount} | ${hostCount}] ${hostname} - ${status} ${statusText} - "${seedPhrase}"`)
      hostnameCount.set(hostname, hostCount + 1)
      globalCount++
    })
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
