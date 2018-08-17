const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

var Games = [
        "Sevdiğiyle Uyuyor... 🌙"
    ];

client.on('ready', () => {
    console.log(`Logeada!`);
    client.user.setGame(Games, "https://www.twitch.tv/antiquary01");
  });
