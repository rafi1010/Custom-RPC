const Discord = require("discord.js");
const client = new Discord.Client();

var Oyun = [
        "Oyun Oynuyor...",
    ];

var Uyku = [
        "Sevdiğiyle Uyuyor... 🌙",
    ];

var Takılma = [
        "Arkadaşlarıyla Takılıyor...",
    ];

client.on('ready', () => {
    console.log(`Logeada!`);
    client.user.setGame(Oyun, "https://www.twitch.tv/antiquary01");
    
  
  });
client.login(process.env.BOT_TOKEN);
