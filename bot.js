const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logeada!`);
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'Gün Doğarken Ardından Tepelerin, Amına Koyim Tüm Teletabilerin.',
            type: "STREAMING",
            url: "https://www.twitch.tv/antiquary01"
        }
    });
});
client.login(process.env.BOT_TOKEN);
