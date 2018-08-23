const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logeada!`);
    var Games = [
        "Gün Doğarken Ardından Tepelerin",
	 "Amına Koyim Tüm Teletabilerin."
    ];
        client.user.setGame(Games[random], "https://www.twitch.tv/antiquary01");
	
  });
client.login(process.env.BOT_TOKEN);
