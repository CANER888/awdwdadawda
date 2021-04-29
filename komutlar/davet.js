const Discord = require("discord.js")
exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed()
.setThumbnail("https://cdn.discordapp.com/attachments/789081888706002954/833725064175419522/standard_1.gif")   
.addField("Merhaba, beni buradan davet edebilirsin","[TIKLA](https://discord.com/oauth2/authorize?client_id=747723763717636226&scope=bot&permissions=8)")
message.channel.send(embed);
  };

  module.exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
  };

  module.exports.help = {
    name: "davet",
    description: "Davet linki",
    usage: "davet"
  };