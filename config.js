const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94716277261"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'ANURADHAPURA'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94716277261' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/94716277261
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0k2SElQNzNTVkJtRXlXNnBOenE4UzVJVWt2b0FBTjlvZFYyak9aSFhsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzJWYWc2V204ZEkyNXdHT21Pejc2UFJWdTFnRkJmcW9PTnlhenZodVRtdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTy82U282ellDczJhUXp2TmloakhtajdvbWYvZ0F4SmJKTmlkMFBhY1VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1eEg4SElzSnlrajhTQUFHUFBNOG1EaWpYV1R5VDlrZlkrY0s0bFgvM2hjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFGdUhUejJyU3htTkQ0SWpFN1ZoeUZScEJDa1VWMm4wS2dBc1ZFVWNQRzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5tSnc1aHUwL1dhMlhtTHdiWUpJVWpBaTJ4ZVdoM282RmVZaTVuaURoQkE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBUXNZbEJIMWhRd1VxQ3daOWM3VG15REpXYitEVzQ2clpESWNseFNXd0twZkF0S2tUaVhQaXJlVUtFZjlwUG9JdkE1WHlRb2pSQXd1NWZ1U1g1NGloZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE3MCwiYWR2U2VjcmV0S2V5IjoiUVdiYXJGL05IUWJkbEF1emE0RXZCMjhnOG9vZWI5VjdrbEpxWTR3cEpOZz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiczYwMlVXTUZROHl2dV9fOHZqNjBPUSIsInBob25lSWQiOiIyM2U1ZDgzNi04ZmNjLTQ3OTAtODgzOS0zNTY5OTlmMGM0MjgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjdTUTVSTGlkVHBWc1N5QzhLYyttVGs4emowPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4MVl3ekZ4M3ZWSWIwMjBIQ1lVbks1SlNBYzA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPN2V4ZndERUozWG02d0dHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyK3cwK1c1aTVRRERGZDVzNlZLcnNGNXZhQkUzakxUSVhYR0svbGwxTEFBPSIsImFjY291bnRTaWduYXR1cmUiOiJPcGxIM0pkQmlhbkVjKzJpeVdXSDFCRUdLQXVOUVhjZHVuMHVhQk9lM0JLUWxrNnRNSHc4Q0VxVUdlSVV1TmxISmdnYXY2b2IzdE44NmtxWGU0cS9BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTHBMRFpUU2ZnVUM4L3FkVmN2WUNYWVlDRFNBVFlPckxSb0hqVndmR1RRbFg2TVM4L094aldwZUlsWXpyQXR4RjFmTFB1K25jMFZQWG13TmYybXhyZ0E9PSJ9LCJtZSI6eyJpZCI6Ijk0Nzg0NDc2Mjg5OjNAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODQ0NzYyODk6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhL3NOUGx1WXVVQXd4WGViT2xTcTdCZWIyZ1JONHkweUYxeGl2NVpkU3dBIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAzMzQwOTYwfQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '• " : Ｇ׀°ＡＩＲＩＫＡ',
  packname:  process.env.PACK_NAME || '• " : Ｇ׀°ＡＩＲＩＫＡ',
   
  botname:   process.env.BOT_NAME === undefined ? "• " : Ｇ׀°ＡＩＲＩＫＡ" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? 'true' : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? 'true' : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'ALIVE' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
