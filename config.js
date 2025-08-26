import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['5491156178758', '𝖣𝖾𝗏𝖥𝖾𝖽𝖾𝟣𝟥', true],
  ['5491176429275'],
]

global.mods = []
global.prems = []

global.namebot = '🍁 𝖳𝗁𝖾-𝖿𝖾𝖽𝖾_𝖨𝖠 🍂'
global.packname = '🍂 𝖳𝗁𝖾-𝖿𝖾𝖽𝖾_𝖨𝖠 🥞'
global.author = '🍁 𝖣𝖾𝗏𝖥𝖾𝖽𝖾𝟣𝟥 🍂'
global.moneda = 'Coins'



global.libreria = 'Baileys'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.sessions = 'Sessions'
global.jadi = 'JadiBots'
global.yukiJadibts = true

global.namecanal = '❇️'
global.idcanal = '120363403739366547@newsletter'
global.idcanal2 = '120363403739366547@newsletter'
global.canal = 'https://whatsapp.com/channel/0029Vb5pM031CYoMvQi2I02D'
global.canalreg = '120363402895449162@newsletter'

global.ch = {
  ch1: '120363420941524030@newsletter'
}

global.multiplier = 69
global.maxwarn = 2

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("🔄 Se actualizó 'config.js'"))
  import(`file://${file}?update=${Date.now()}`)
})
