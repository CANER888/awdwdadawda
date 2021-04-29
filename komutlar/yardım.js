const Discord = require('discord.js');
const db = require("wio.db")
exports.run = async (client, message, args) => {
 if(!args[0]) {
   
const embed = new Discord.MessageEmbed()
    .setAuthor("KlanZ || Yardım Menüsü", client.user.avatarURL())
   .setColor("#BLACK")
  .setDescription(`
  **Kullanıcı Komutları
 
 moderasyonyardım => Moderasyon Menüsünü Açar.
 eğlenceyardım => Eğlence Menüsünü Açar.
 sunucupanel => Sunucu Panelini Açar.**

 **Diğer Komutlar

 istatislik => Botun İstatistiğini Gösterir
 evcil-hayvan => Evcil Hayvan Oyunu**


  


  `)   
  .setFooter(`KlanZ`, client.user.avatarURL())

  message.channel.send(embed)

}else {

}
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım', 
  description: 'Yardım Menüsü',
  usage: 'help'
};