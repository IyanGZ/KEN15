const { default: makeWASocket, DisconnectReason, useSingleFileAuthState} = require('@adiwajshing/baileys')
const { state, saveState } = useSingleFileAuthState('./session.json')
const fs = require('fs')
const pino = require('pino')
const connectKeWA = () => {
const adon = makeWASocket({logger:pino({level:'silent'}),printQRInTerminal: true,auth: state,browser: ["Ken15-Host", "Dekstop", "3.0"]})

require('./adon.js')
nocache('./adon.js', module => console.log(`"${module}" Updated!`))

adon.ev.on('messages.upsert', async denz => {
if (!denz.messages) return
msg = denz.messages[0]
nomorOwner = ['6285742344873'] // genti nomor lu di sini 
nomorDeveloper = ['6285742344873'] // genti nomor lu di sini
adon.sendPresenceUpdate('unavailable')
require("./adon")(adon, denz, msg)})

adon.ev.on('connection.update', (update) => {
const {connection,lastDisconnect} = update
if (connection === 'close') {lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut ? connectKeWA() : ''}
else if(connection === 'open') 
{
    // console.log(update)
}

adon.ev.on('creds.update', saveState)
// console.log(update)
})}	









function nocache(module, cb = () => { }) {console.log(`Module ${module} detected!`) 
fs.watchFile(require.resolve(module), async () => {await uncache(require.resolve(module))
cb(module)})}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()} catch (e) {reject(e)}})}

connectKeWA()
