const Discord = require('discord.js');
const db = require("wio.db")
exports.run = async (client, message, args) => {
 if(!args[0]) {
   
const embed = new Discord.MessageEmbed()
    .setAuthor("KlanZ || Moderasyon Yardım Menüsü", client.user.avatarURL())
   .setColor("#BLACK")
  .setDescription(`
  **Kullanıcı Komutları
 
 kick => Birini Sunucudan Atarsın.
 ailemiz => Botun Oldugu Sunucuları Gösterir.
 nuke => Bir Kanalı Patlatır.
 yetkilerim => yetkilerini gösterir.
 sil => İstediginiz Sayı Kadar Mesaj Siler.
 oylama => Oylama Başlatır.**

  


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
  name: 'moderasyonyardım', 
  description: '',
  usage: ''
};