const Discord = require('discord.js');
let { Database } = require('nukleon');
let db = new Database("plasmic.json");
const bt = require('best-tools');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
exports.run = async (client, message, args) => {
  this.fighting = new Set();

    const embed = new Discord.MessageEmbed()
    .setTitle('Evcil Hayvan Komutları')
    .setDescription(`**evcil-hayvan bul  = Evcil hayvan bulursunuz. \n \n evcil-hayvan bilgi = Evcil hayvanınızın bilgilerini görürsünüz. \n \n evcil-hayvan besle = Evcil hayvanınızı beslersiniz. \n \n evcil-hayvan savaş = Biriyle Savaşırsın**`)
if(!args[0]) return message.channel.send(embed)
if(args[0] == "bul") {
    let kontrol = db.fetch(`hayvan_${message.author.id}`)
    if(kontrol) return message.channel.send('Zaten hayvanın var?')
    if(!kontrol) {
let hayvanlar = ["inek", "keçi", "pikachu","gergedan", "tarzan","kedi","köpek","tavşan", "köpek balığı", "aslan","çita"]
var hayvan = hayvanlar[Math.floor(Math.random() * hayvanlar.length)];
let can = (bt.rastgele("1500", "pozitif"))
let özelgüç = ["Günde 1000  :coin:   ", "Günde 500  :coin:  ", "özel gücü yok...", "uçma (çok boş bir güçtür)"]
var güç = özelgüç[Math.floor(Math.random() * özelgüç.length)];
let hasar = (bt.rastgele("350", "pozitif"))
db.set(`hayvan_${message.author.id}`, hayvan)
db.set(`hayvancan_${message.author.id}`, can)
db.set(`hayvangüç_${message.author.id}`, güç)
db.set(`hayvanhasar_${message.author.id}`, hasar)
const embed = new Discord.MessageEmbed()
.setTitle(`Evcil hayvan bulundu...`)
.setDescription(`<@${message.author.id}> uzun uzadıya aradım ve size ** ${hayvan} ** adlı hayvanı buldum! \n \n Hayvanın canı:  ${can} \n Hayvanın özel gücü: ${güç} \n Hayvanın hasarı: ${hasar}`)
return message.channel.send(embed)
    };
}
if(args[0] == "bilgi") {
  let yemvar = db.fetch(`hayvanyem_${message.author.id}`)
  if(yemvar == yemvar) {var yem = yemvar}
  if(yemvar == undefined) {var yem = "0"}
let kontrol = db.fetch(`hayvan_${message.author.id}`)
const kontrolembed = new Discord.MessageEmbed()
.setTitle(`KlanZ Hata`)
.setDescription(`${message.author.username}: bir evcil hayvana sahip değilsin...`)
if(!kontrol) return message.channel.send(kontrolembed)
let hayvan = db.fetch(`hayvan_${message.author.id}`)
let can = db.fetch(`hayvancan_${message.author.id}`)
let güç = db.fetch(`hayvangüç_${message.author.id}`)
let hasar = db.fetch(`hayvanhasar_${message.author.id}`)
const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username} adlı kişinin hayvanının bilgileri`)
.setDescription(`Hayvan: ${hayvan} \n \n Can: ${can} \n \n Güç: ${güç} \n \n Hasar: ${hasar} \n \n **DİĞER BİLGİLER** \n \n Yem: ${yem}`)
return message.channel.send(embed)
}
if(args[0] == "besle") {
  let hayvan = db.fetch(`hayvan_${message.author.id}`)
let can = db.fetch(`hayvancan_${message.author.id}`)
let güç = db.fetch(`hayvangüç_${message.author.id}`)
let hasar = db.fetch(`hayvanhasar_${message.author.id}`)
  let kontrol = db.fetch(`hayvan_${message.author.id}`)
  const kontrolembed = new Discord.MessageEmbed()
  .setTitle(`FERİ HATA`)
  .setDescription(`${message.author.username}: bir evcil hayvana sahip değilsin...`)
  if(!kontrol) return message.channel.send(kontrolembed)
  let yem = db.fetch(`hayvanyem_${message.author.id}`)
  const kontrolembedd = new Discord.MessageEmbed()
  .setTitle(`FERİ HATA`)
  .setDescription(`${message.author.username}: hayvanını beslemek için yemin yok...`)
  if(!yem) return message.channel.send(kontrolembedd)
  let artancan = (bt.rastgele("350", "pozitif"))
  db.add(`hayvanyem_${message.author.id}`, -1)
  db.add(`hayvancan_${message.author.id}`, artancan)
  const embed = new Discord.MessageEmbed()
  .setTitle(`${message.author.username} `)
  .setDescription(`${hayvan} adlı hayvan beslendi \n \n Besleyerek artan can: ${artancan}`)
  return message.channel.send(embed)
}
if(args[0] == "savaş") {
  let kişi = message.mentions.users.first()
if(!kişi) return message.channel.send('Lütfen birini etiketleyin!')
  if (kişi.bot) return message.reply('Botlar ile savaşamazsın!');
  if (kişi.id === message.author.id) return message.reply('Kendin ile savaşamazsın!');
		if (this.fighting.has(message.channel.id)) return message.reply('Kanal başına sadece bir düello meydana gelebilir.');
		this.fighting.add(message.channel.id);
		try {
			if (!kişi.bot) {
                await message.channel.send(`${kişi}, savaş isteği geldi. Savaş'ı kabul ediyor musun? (\`evet\` veya \`hayir\` olarak cevap veriniz.)`);
				const verification = await verify(message.channel, kişi);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send(`Düello kabul edilmedi...`);
				}
      }
let kontrol = db.fetch(`hayvan_${message.author.id}`)
  const kontrolembed = new Discord.MessageEmbed()
  .setTitle(`KlaNZ Hata`)
  .setDescription(`${message.author.username}: bir evcil hayvana sahip değilsin...`)
  if(!kontrol) return message.channel.send(kontrolembed)
  let kişipara = db.fetch(`para_${kişi.id}`)
  let para = db.fetch(`para_${message.author.id}`)
  let hayvanvar = db.fetch(`hayvan_${kişi.id}`)
  let canvar = db.fetch(`hayvancan_${kişi.id}`)
  let güçvar = db.fetch(`hayvangüç_${kişi.id}`)
  let hasarvar = db.fetch(`hayvanhasar_${kişi.id}`)
  if(canvar == canvar) {var can = canvar}
  if(canvar == undefined) {var can = "0"}
  if(hasarvar == hasarvar) {var hasar = hasarvar}
  if(hasarvar == undefined) {var hasar = "0"}
  let hayvanvarr = db.fetch(`hayvan_${message.author.id}`)
  let canvarr = db.fetch(`hayvancan_${message.author.id}`)
  let güçvarr = db.fetch(`hayvangüç_${message.author.id}`)
  let hasarvarr = db.fetch(`hayvanhasar_${message.author.id}`)
  if(canvarr == canvarr) {var cann = canvarr}
  if(canvarr == undefined) {var cann = "0"}
  if(hasarvarr == hasarvarr) {var hasarr = hasarvarr}
  if(hasarvarr == undefined) {var hasarr = "0"}
if(!kişi) return message.channel.send('Lütfen savaş yapmak istediğiniz kişiyi belirtin!')
let iddia = args[2]
if(!iddia) return message.channel.send('Lütfen iddia olarak konulacak parayı belirtin!')
if(para > para) return message.channel.send('Bu kadar paran yok!')
if(kişipara > kişipara) return message.channel.send('Etiketlediğin kişinin bu kadar parası yok!')
let vuruşetiketlenen = (bt.rastgele(hasar, "pozitif"))
let vuruşauthor = (bt.rastgele(hasarr, "pozitif"))
if(vuruşetiketlenen > vuruşauthor) {var kazanan = `${kişi.id}`}
if(vuruşetiketlenen < vuruşauthor) {var kazanan = `${message.author.id}`}
if(vuruşetiketlenen == vuruşauthor) {var kazanan = `berabere`}
db.add(`para_${message.author.id}`, -Number(iddia))
db.add(`para_${kişi.id}`, Number(iddia))
db.add(`can_${message.author.id}`, -500)
const embed = new Discord.MessageEmbed()
.setTitle(`${message.author.username}, ${kişi.username} adlı kişiye savaş başlattı ve ilk vuruşta en çok vuran kazanır!`)
.setDescription(`*Savaş raporları geldi!* \n İddia: ${iddia}  :coin:\n \n  <@${kişi.id}> vuruyor: ${vuruşetiketlenen} \n \n <@${message.author.id}> vuruyor: ${vuruşauthor} \n \n Kazanan: <@${kazanan}> \n İddia başarı ile kazanan kişiye verildi! \n Kaybedenin hayvanından ise 500 can eksiltildi!`)
return message.channel.send(embed)
} catch (err) {
this.fighting.delete(message.channel.id);
throw err;
}

}
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'evcil-hayvan'
};