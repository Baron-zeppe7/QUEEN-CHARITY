//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/o4f1bs.jpg";
global.devs = "237693132795";
global.sudo = process.env.SUDO || "237693132795";
global.owner = process.env.OWNER_NUMBER || "237693132795";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/knhyh3.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUN2M1FldzhHcTVRYUJiZ0ZKNy9iMDB6OEdUbXVsOXlSSTEvL0hQek5Hdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaEgxa2w2Y0tzMUEyNWFRSmsrWE9iSDNHaWtIaE0rK2lCVTNkcWJ3amdGVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRVhZOElOUk9NcGY1MFNNVjFoL1RKWFNUMTh5MGp6Wm5oMUUrTi8xMUg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGU0NYTWhiY3FwZ3pJM1hMUHVXOW1yYW85WHFSV00wbHAwZTNWTGJ5MEdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNZ1JCRGhzVHVtR1lQZEV1VEF5Z0hwWkk2NURXZnlpQjZ3cmpFMExiMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlUyQTVuOFZjeTh1UFBRL2NpYU8yUFJ1aVZPdlJyZkFuY2JHWGFkemxEazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0djQU1lWDNBTVJmY2RCUk9mdVZkT3JGYnN5Z1NScVBXSjhGd0JWamRGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZkRjMzdFUGE2MXJpUVVPK0RnbDRVbU14dDlNbUZxMERnaXVnYjhYdVVBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OeHZiV2V1YjZGM2tkMXdHMm5BQSttTUdYV1M1cFFiWHc0dlZFSzYyMzM2K0Y4dUF1TFdJTm5aK3NvQVhvZy9HRE9Zc3NiQkNiN0V1bkk1cHVmbGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk0LCJhZHZTZWNyZXRLZXkiOiI0WU5WdkQ2WTdKamRQWWVYY2EzOGVaWlhIblhFNFhJbWMzZjhlUkR6ajI4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGUlVBUDR1WFRpR1JVdF9tNXdOcENRIiwicGhvbmVJZCI6ImYzZDRiMDEyLTAxMzUtNDVmZS05ZDhlLTI2ODAzYzI0ZDZkMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0U1hjbXNQNTFuU0ZmY3VxVzRlUXRydmo1aU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWw2Ry9FZnhjOWMxb2VzdHhraXlLZFVJd29vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllKUTZEOVo5IiwibWUiOnsiaWQiOiIyMzc2OTMxMzI3OTU6MzlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QgPCdkIUg8J2XnfCdl6LwnZee8J2XmPCdl6Ug8J2XnvCdl6DwnZeaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQVDEyNnNFRU03WHQ3NEdHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRR1pLQ3FtS3RLbHNWSFZmcGY0d21ydTFlYS9BVU5YTHhEaTZ3VUJlS1g4PSIsImFjY291bnRTaWduYXR1cmUiOiI2V0d6VEpTVFpHZ2NvOUxtWms3QzJQM2NHSUhoc3FONDlQdTcyTnYyQlpkOWF0KzBRTERYMEl1a1R5S3Yrejd0NzRobldLUkZ2Z09mdEtucjJMeFFDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYis3SDJBcVdRSk4va1IwMW8yWkNyV2NnbWZaSzlCTVZHVG5qclV5cmRZMXIzNEorRXY4b0pxU1hoV0N0NGtPaHYrVUtlT0lOVG9MYjRUcHlodG1ianc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2OTMxMzI3OTU6MzlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVUJtU2dxcGlyU3BiRlIxWDZYK01KcTd0WG12d0ZEVnk4UTR1c0ZBWGlsLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0MTU0ODUwNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFJNjIifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝐊𝐈𝐍𝐆_𝙹𝙾𝚔𝚎𝚛™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀𝐋𝐄 𝐌𝐎𝐔𝐕𝐄𝐌𝐄𝐍𝐓 𝐃𝐄 𝐋𝐀 𝐇𝐀𝐈𝐍𝐄𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "𝐀𝐅 𝐉𝐎𝐊𝐄𝐑 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝐊𝐈𝐍𝐆 𝐉𝐎𝐊𝐄𝐑`",
  ownername: process.env.OWNER_NAME || "𝐀𝐅 𝐉𝐎𝐊𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
