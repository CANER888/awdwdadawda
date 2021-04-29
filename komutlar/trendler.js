const Discord = require('discord.js');
const film = require('film-apisi')
exports.run = async (client, message, args) => {
    async function trend() {
        let sonuç = await film.trend().catch(err => {message.channel.send(`hata 404 inga \n \n ${err}`);});
        const embed = new Discord.MessageEmbed()
        .setTitle('Trend filmler')
        .setDescription(sonuç.trendler)
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHGQxPM5pmqyYbn8suJQW9Z_WfQ0ZXVf3T2g&usqp=CAU')
return message.channel.send(embed)
}
          trend()
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'trendfilm'
};