// @ts-check
import { spawn, Pool, Worker } from 'threads'
import bip39 from 'bip39'
import DraftLog from 'draftlog'
import { toSpamHostnames } from './toSpam.js'

const getPool = () => Pool(() => spawn(new Worker('./worker')), { size: 10, concurrency: 10 })
const clearConsole = () => process.stdout.write('\x1b[2J')

let pool = getPool()
DraftLog(console)
console.log(`Start spamming ${toSpamHostnames.length} scams`)
console.log(toSpamHostnames)

let globalCount = 1
const hostnameCounts = new Map()
const hostnameCountsDraft = new Map()
toSpamHostnames.forEach(x => hostnameCounts.set(x, 0))

let locked = false
let totalHitsDraft
let lastSeedDraft
let lastSeed = ''

setTimeout(() => {
  clearConsole()
  toSpamHostnames.forEach(x => hostnameCountsDraft.set(x, console.draft(`    0 - ${x}`)))
  lastSeedDraft = console.draft('Last Seed:')
  totalHitsDraft = console.draft('Total Hits: 0')
}, 10)

setInterval(() => {
  if (locked) return

  pool.queue(async ({ doRequest }) => {
    const seedPhrase = bip39.generateMnemonic()
    const { status, statusText, hostname } = await doRequest(seedPhrase)
    const hostCount = hostnameCounts.get(hostname) || 0
    // console.log(`[${globalCount} | ${hostCount}] ${hostname} - ${status} ${statusText} - "${seedPhrase}"`)
    hostnameCounts.set(hostname, hostCount + 1)
    lastSeed = seedPhrase
    globalCount++
  })
}, 5)

setInterval(() => {
  const data = [...hostnameCounts.entries()]
  data.forEach(([hostname, count]) => hostnameCountsDraft.get(hostname)(`${`${count}`.padStart(5, ' ')} - ${hostname}`))
  lastSeedDraft('Last Seed: ', lastSeed)
  totalHitsDraft('Total Hits:', globalCount)
}, 40)

setInterval(async () => {
  // somehow the thread pool lags after some time, periodically recreate it
  locked = true
  try {
    await pool.terminate(true)
    pool = getPool()
    clearConsole()
  } catch (err) {
    console.error(err)
  } finally {
    locked = false
  }
}, 20000)
