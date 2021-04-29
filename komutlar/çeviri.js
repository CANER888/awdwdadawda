const Discord = require('discord.js');
const { translate } = require('bing-translate-api');
exports.run = async (client, message, args) => {
  let dil = args[0]
  if(!dil) return message.channel.send('Lütfen çevrilecek dili belirtin!')
  let engin = args.slice(1).join(' ')
  if(!engin) return message.channel.send(`Lütfen ${dil} çevrilecek kelimeyi giriniz`) 
 let res = translate(engin, null, dil).catch(err => {message.channel.send(`Dili bulamadım! \n \n ${err}`);});
 let kelime = await (await res).text
 let çeviri = await (await res).translation
 let yenidil = await (await res).language.to
 const embed = new Discord.MessageEmbed()
 .setTitle(engin + " çevirisi")
 .setDescription(`Kelime: ${kelime} \n \n Çeviri sonucu: ${çeviri} \n \n Çevrilen dil: ${yenidil}`)
 .setFooter('MyPanch')
 return message.channel.send(embed).catch(err => {message.channel.send(`Kelimeyi çeviremedim \n \n ${err}`);});
 


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çevir'
};

//////////////////////////////HATALI//////////////////////////////7