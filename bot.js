const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603032135233830922")
setInterval(function() {
channel.send(`كسم كازيمزيرو اتهكر بواسطة سكنر وميرو :hearts:
@evryeowne @here`);
}, 30)
})

client.login(process.env.BOT_TOKEN);