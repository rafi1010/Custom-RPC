const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logeada!`);
var Games = [
        "Gün Doğarken Ardından Tepelerin, ",
	"Amına Koyim Tüm Teletabilerin.",
    ];
    setInterval(function() {
	var random = Math.floor(Math.random()*(Games.length-0+1)+0);
        client.user.setGame(Games[random], "https://www.twitch.tv/antiquary01");
        }, 2 * 2500);
        };
    });
});
client.login(process.env.BOT_TOKEN);
