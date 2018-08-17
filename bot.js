const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

var Games = [
        "Sevdiğiyle Uyuyor... 🌙"
    ];
client.user.setGame(Games, "https://www.twitch.tv/antiquary01");

client.on('ready', () => {
    console.log(`Logeada!`);
  });
