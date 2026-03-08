const fetch = require("node-fetch")
const config = require("../config")

async function sendDiscordLog(message){

 try{

  await fetch(config.DISCORD_WEBHOOK,{
   method:"POST",
   headers:{
    "Content-Type":"application/json"
   },
   body:JSON.stringify({
    content:message
   })
  })

 }catch(err){

  console.log("Discord log error:",err)

 }

}

module.exports = sendDiscordLog