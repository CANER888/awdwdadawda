const Discord = require('discord.js');
exports.run = function (client, message, args) {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":x: Yetersiz İzin Hatası. Bu Komut İçin Mesajları Yönet Yetkim Olması Gerekiyor");
  if (!args[0]) return message.channel.send("Silinecek mesajın miktarını yaz!");
  message.delete()
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`:white_check_mark: ${args[0]} tane mesaj silindi`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear'],
  permLevel: 1
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil '
};