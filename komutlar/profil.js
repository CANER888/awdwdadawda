const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  message.delete({ timeout: 30000 });
  var user =
    message.mentions.members.first() || client.users.cache.get(args[0]);
  if (!user) {
    if (db.has(`createdAt_${message.author.id}`)) {
      var kuruluş = db.fetch(`createdAt_${message.author.id}`);
      var nickname = db.fetch(`nickName_${message.author.id}`);
      var yaş = db.fetch(`yaş_${message.author.id}`);
      var mail = db.fetch(`mail_${message.author.id}`);
      var bio = db.fetch(`bio_${message.author.id}`);
      var youtube = db.fetch(`youtube_${message.author.id}`);
      var tiktok = db.fetch(`tiktok_${message.author.id}`);
      var twitch = db.fetch(`twitch_${message.author.id}`);
      var instagram = db.fetch(`instagram_${message.author.id}`);
      var twitter = db.fetch(`twitter_${message.author.id}`);
      var github = db.fetch(`github_${message.author.id}`);
      var pp = db.fetch(`profilfotoğrafı_${message.author.id}`);
      if (!pp) {
        var pp = message.author.displayAvatarURL({
          dynamic: true,
          format: "png"
        });
      }
      return message.channel
        .send(
          new Discord.MessageEmbed()
            .setAuthor(
              `${client.user.username} ArezCK Profil Sistemi`,
              client.user.displayAvatarURL({ dynamic: true, format: "png" })
            )
            .setTitle(`${message.author.tag}'ın profili`)
            .setDescription(
              `
      __**Genel Bilgiler**__
      Kullanıcı adı: ${nickname}
      Hesabın kuruluş tarihi: ${kuruluş}
      Yaşı: ${yaş}
      Biyografi: ${bio}
      
      
      __**İletişim ve Sosyal Medya**__
      Mail adresi: ${mail}
      YouTube: [TIKLA](${youtube})
      TikTok: [TIKLA](${tiktok})
      Twitch: [TIKLA](${twitch})
      İnstagram: [TIKLA](${instagram})
      Twitter: [TIKLA](${twitter})
      GitHub: [TIKLA](${github})
      `
            )
            .setFooter(
              `${message.author.tag} istedi!  |  Eğer linklere tıklanmıyorsa kullanıcı ilgili link'i ayarlamamıştır.`,
              message.author.displayAvatarURL({ dynamic: true, format: "png" })
            )
            .setThumbnail(pp)
        )
        .then(
          x =>
            x.react("😎") &&
            x.react("👍") &&
            x.react("🕵️‍♂️") &&
            x.delete({ timeout: 30000 }) &&
            x.react("👥")
        );
    } else {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor("Hata Kodu: 148")
          .setTitle("İlk önce hesap açmanız gerekiyor!")
      );
    }
  }
  if (!user) return;
  else {
    if (db.has(`createdAt_${user.user.id}`)) {
      if (db.has(`createdAt_${message.author.id}`)) {
        var kuruluş = db.fetch(`createdAt_${user.user.id}`);
        var nickname = db.fetch(`nickName_${user.user.id}`);
        var yaş = db.fetch(`yaş_${user.user.id}`);
        var mail = db.fetch(`mail_${user.user.id}`);
        var bio = db.fetch(`bio_${user.user.id}`);
        var youtube = db.fetch(`youtube_${user.user.id}`);
        var tiktok = db.fetch(`tiktok_${user.user.id}`);
        var twitch = db.fetch(`twitch_${user.user.id}`);
        var instagram = db.fetch(`instagram_${user.user.id}`);
        var twitter = db.fetch(`twitter_${user.user.id}`);
        var github = db.fetch(`github_${user.user.id}`);
        var pp = db.fetch(`profilfotoğrafı_${user.user.id}`);
        if (!pp) {
          var pp = user.user.displayAvatarURL({ dynamic: true, format: "png" });
        }
        return message.channel
          .send(
            new Discord.MessageEmbed()
              .setAuthor(
                `${client.user.username} ArezCK Profil Sistemi`,
                client.user.displayAvatarURL({ dynamic: true, format: "png" })
              )
              .setTitle(`${user.user.tag}'ın profili`)
              .setDescription(
                `
      __**Genel Bilgiler**__
      Kullanıcı adı: ${nickname}
      Hesabın kuruluş tarihi: ${kuruluş}
      Yaşı: ${yaş}
      Biyografi: ${bio}
      
      
      __**İletişim ve Sosyal Medya**__
      Mail adresi: ${mail}
      YouTube: [TIKLA](${youtube})
      TikTok: [TIKLA](${tiktok})
      Twitch: [TIKLA](${twitch})
      İnstagram: [TIKLA](${instagram})
      Twitter: [TIKLA](${twitter})
      GitHub: [TIKLA](${github})
      `
              )
              .setFooter(
                `${message.author.tag} istedi!  |  Eğer linklere tıklanmıyorsa kullanıcı ilgili link'i ayarlamamıştır.`,
                message.author.displayAvatarURL({
                  dynamic: true,
                  format: "png"
                })
              )
              .setThumbnail(pp)
          )
          .then(
            x =>
              x.react("😎") &&
              x.react("👍") &&
              x.react("🕵️‍♂️") &&
              x.delete({ timeout: 30000 }) &&
              x.react("👥")
          );
      }
    } else {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor("Hata Kodu: 632")
          .setTitle("Belirttiğiniz kişinin profili bulunmuyor.")
      );
    }
  }
};
exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "profil",
  usage: "(prefix)profil @kişi"
};
