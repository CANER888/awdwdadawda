const Discord = require('discord.js');
const db = require("wio.db")
exports.run = async (client, message, args) => {
 if(!args[0]) {
   
const embed = new Discord.MessageEmbed()
    .setAuthor("KlanZ || Eğlence Yardım Menüsü", client.user.avatarURL())
   .setColor("#BLACK")
  .setDescription(`
  **Kullanıcı Komutları
 
 wasted => Dene Öğren.
 yumrukat => Seçtigin Birine Yumruk Atar.
 zarat => Zar Atar.
 sayıtahmin => Rastgele Sayı Tahmin Eder.
 şifreolustur => Rastgele Şifre Oluşturur.
 kedi => Kedi Resimleri Gösterir.
 avatar => Profil Resmini Açar.
 aykutelmas => Aykut Elmas Sözlerini Gösterir.
 düello => Biriyle Düello Yaparsın.**

  


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
  name: 'eğlenceyardım', 
  description: '',
  usage: ''
};