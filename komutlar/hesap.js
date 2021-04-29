const Discord = require("discord.js");
const db = require("quick.db");
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul" });
const sahip = "427053194384769025";
const rol = "Sistem Rolü";
const p = "PREFİX ";
module.exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          "Merhaba! KlanZ profil işlemlerine hoşgeldin. Buradan hesabın (profilin) ile ilgili değişiklikleri yapabilirsin. Eğer nasıl yapılacağı hakkında bir sorunun varsa `.hesap yardım`"
        )
    );
  if (args[0] === "aç") {
    if (!db.has(`createdAt_${message.author.id}`)) {
      if (message.author.id == sahip) {
        var ad = `**[SAHİP]** ${message.author.username}`;
      } else if (message.member.roles.cache.has(rol)) {
        var ad = `**[SİSTEM]** ${message.author.username}`;
      } else {
        var ad = "New User";
      }
      db.set(`createdAt_${message.author.id}`, `${tarih}`);
      db.set(`nickName_${message.author.id}`, `${ad}`);
      db.set(`yaş_${message.author.id}`, "Unspecifed...");
      db.set(`mail_${message.author.id}`, "Unspecifed...");
      db.set(`bio_${message.author.id}`, "Unspecifed...");
      db.set(`youtube_${message.author.id}`, "Unspecifed...");
      db.set(`tiktok_${message.author.id}`, "Unspecifed...");
      db.set(`twitch_${message.author.id}`, "Unspecifed...");
      db.set(`instagram_${message.author.id}`, "Unspecifed...");
      db.set(`twitter_${message.author.id}`, "Unspecifed...");
      db.set(`github_${message.author.id}`, "Unspecifed...");

      return message.channel.send(`Hesabınız \`${tarih}\` tarihinde açıldı!`);
    } else {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor("Hata Kodu: 137")
          .setTitle("Zaten bir hesabınız bulunuyor!")
      );
    }
  }
  if (args[0] === "kapat") {
    if (db.has(`createdAt_${message.author.id}`)) {
      db.delete(`createdAt_${message.author.id}`);
      db.delete(`nickName_${message.author.id}`);
      db.delete(`yaş_${message.author.id}`);
      db.delete(`mail_${message.author.id}`);
      db.delete(`bio_${message.author.id}`);
      db.delete(`youtube_${message.author.id}`);
      db.delete(`tiktok_${message.author.id}`);
      db.delete(`twitch_${message.author.id}`);
      db.delete(`instagram_${message.author.id}`);
      db.delete(`twitter_${message.author.id}`);
      db.delete(`github_${message.author.id}`);
      db.delete(`profilfotoğrafı_${message.author.id}`);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle(
          `Hesabınız başarıyla kapatıldı! Gidişin bizi üzüyor.`
        )
      );
    } else {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor("Hata Kodu: 47")
          .setTitle("Zaten hesabınız bulunmuyor!")
      );
    }
  }
  if (args[0] === "kullanıcı") {
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor("Hata Kodu: 896")
          .setTitle("Bir seçenek belirtiniz!")
      );
    if (args[1] === "ad") {
      var ad = args.slice(2).join(" ");
      if (!ad)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir kullanıcı adı belirtin!")
        );
      if (
        ad.includes === "SAHİP" ||
        ad.includes === "SİSTEM" ||
        ad.includes === "SYSTEM" ||
        ad.includes === "OWNER"
      )
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 001")
            .setTitle("Kullanıcı adları sistemsel karakterler içeremez!")
        );
      if (message.author.id == sahip) {
        var ad = `**[SAHİP]** ${ad}`;
      } else if (message.member.roles.cache.has(rol)) {
        var ad = `**[SİSTEM]** ${ad}`;
      }

      db.set(`nickName_${message.author.id}`, ad);
      return message.channel.send(
        new Discord.MessageEmbed().setDescription("Kullanıcı adınız ayarlandı!")
      );
    }
    if (args[1] === "yaş") {
      var yaş = args[2];
      if (!yaş)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setDescription("Bir yaş belirtin!")
        );
      if (isNaN(yaş))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 942")
            .setDescription("Yaşınızda harf bulunamaz")
        );
      db.set(`yaş_${message.author.id}`, yaş);
      return message.channel.send(
        new Discord.MessageEmbed().setDescription("Yaşınız ayarlandı!")
      );
    }
    if (args[1] === "biyografi") {
      var biyo = args.slice(2).join(" ");
      if (!biyo)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir biyografi belirtin!")
        );
      db.set(`bio_${message.author.id}`, biyo);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("Biyografiniz ayarlandı!")
      );
    }
    if (args[1] === "pp" || args[1] === "fotoğraf") {
      var link = args.slice(2).join(" ");
      if (!link)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir link belirtin!")
        );
      if (!link.startsWith("http"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 544")
            .setTitle("Lütfen bir link belirtin.")
            .setFooter("Linkler `http` ile başlar.")
        );
      db.set(`profilfotoğrafı_${message.author.id}`, link);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("Profil fotoğrafınız ayarlandı!")
      );
    }
  }
  if (args[0] === "iletişim") {
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor("Hata Kodu: 896")
          .setTitle("Bir seçenek belirtiniz!")
      );
    if (args[1] === "mail") {
      var link = args.slice(2).join(" ");
      if (!link)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir e-posta belirtin!")
        );
      if (!link.endsWith(".com"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 544")
            .setTitle("Lütfen bir e-posta belirtin.")
            .setFooter("Linkler `.com` ile biter.")
        );
      db.set(`mail_${message.author.id}`, link);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("E-Posta adresiniz ayarlandı!")
      );
    }
    if (args[1] === "youtube" || args[1] === "yt") {
      var link = args.slice(2).join(" ");
      if (!link)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir link belirtin!")
        );
      if (!link.startsWith("http"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 544")
            .setTitle("Lütfen bir link belirtin.")
            .setFooter("Linkler `http` ile başlar.")
        );
      db.set(`youtube_${message.author.id}`, link);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("Youtube kanal linki ayarlandı!")
      );
    }
    if (args[1] === "tiktok") {
      var link = args.slice(2).join(" ");
      if (!link)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir link belirtin!")
        );
      if (!link.startsWith("http"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 544")
            .setTitle("Lütfen bir link belirtin.")
            .setFooter("Linkler `http` ile başlar.")
        );
      db.set(`tiktok_${message.author.id}`, link);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("TikTok kanal linki ayarlandı!")
      );
    }
    if (args[1] === "twitch") {
      var link = args.slice(2).join(" ");
      if (!link)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir link belirtin!")
        );
      if (!link.startsWith("http"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 544")
            .setTitle("Lütfen bir link belirtin.")
            .setFooter("Linkler `http` ile başlar.")
        );
      db.set(`twitch_${message.author.id}`, link);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("Twitch kanal linki ayarlandı!")
      );
    }
    if (args[1] === "instagram" || args[1] === "ig") {
      var link = args.slice(2).join(" ");
      if (!link)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir link belirtin!")
        );
      if (!link.startsWith("http"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 544")
            .setTitle("Lütfen bir link belirtin.")
            .setFooter("Linkler `http` ile başlar.")
        );
      db.set(`instagram_${message.author.id}`, link);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("Instagram hesap linki ayarlandı!")
      );
    }
    if (args[1] === "twitter") {
      var link = args.slice(2).join(" ");
      if (!link)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir link belirtin!")
        );
      if (!link.startsWith("http"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 544")
            .setTitle("Lütfen bir link belirtin.")
            .setFooter("Linkler `http` ile başlar.")
        );
      db.set(`twitter_${message.author.id}`, link);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("Twitter hesap linki ayarlandı!")
      );
    }
    if (args[1] === "github") {
      var link = args.slice(2).join(" ");
      if (!link)
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 82")
            .setTitle("Bir link belirtin!")
        );
      if (!link.startsWith("http"))
        return message.channel.send(
          new Discord.MessageEmbed()
            .setAuthor("Hata Kodu: 544")
            .setTitle("Lütfen bir link belirtin.")
            .setFooter("Linkler `http` ile başlar.")
        );
      db.set(`github_${message.author.id}`, link);
      return message.channel.send(
        new Discord.MessageEmbed().setTitle("GitHub profil linki ayarlandı!")
      );
    }
  }
  if (args[0] === "yardım") {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setAuthor(
        `${client.user.username} KlanZ Profil İşlemleri`,
        client.user.displayAvatarURL({ dynamic: true, format: "png" })
      )
      .setTitle("yardım isteyenmi var knk")
      .setDescription(
        `
  ${p}hesap aç => Hesap açarsınız.
  ${p}hesap kapat => Açılan hesabı kapatırsınız.
  ${p}hesap kullanıcı ad => Kullanıcı adınızı ayarlarsınız.
  ${p}hesap kullanıcı pp => Profil fotoğrafınızı ayarlarsınız.
  ${p}hesap kullanıcı yaş => Yaşınızı ayarlarsınız.
  ${p}hesap kullanıcı biyografi => Biyografinizi ayarlarsınız.
  ${p}hesap iletişim <tür> => İletişim yönü ayarlarsınız.
  Türler => mail, youtube, tiktok, twitch, instagram, twitter, github
  `
      )
      .setFooter(
        `${message.author.tag} istedi, KlanZ`,
        message.author.displayAvatarURL({ dynamic: true, format: "png" })
      )
      .setTimestamp();
    return message.channel.send(embed);
  }
  if (args[0] === "sıfırla") {
    if (!args[1])
      return message.channel.send(
        new Discord.MessageEmbed()
          .setAuthor("Hata Kodu: 148")
          .setTitle("Bir seçenek belirtin! `kullanıcı - iletişim`")
      );
    if (args[1] === "kullanıcı") {
      message.channel.send(
        new Discord.MessageEmbed().setTitle(
          "Eğer sıfırlama işlemini onaylıyorsanız 👍 onaylamıyorsanız 👎 emojisine basın."
        )
      );
      message.react("👍").then(r => {
        message.react("👎");
      });
      message
        .awaitReactions(
          (reaction, user) =>
            user.id == message.author.id &&
            (reaction.emoji.name == "👍" || reaction.emoji.name == "👎"),
          { max: 1 }
        )
        .then(collected => {
          if (collected.first().emoji.name == "👍") {
            db.set(`nickName_${message.author.id}`, "Unspecifed...");
            db.set(`yaş_${message.author.id}`, "Unspecifed...");
            db.set(`bio_${message.author.id}`, "Unspecifed...");
            db.delete(`profilfotoğrafı_${message.author.id}`);
            return message.channel.send(
              new Discord.MessageEmbed().setTitle(
                "Sıfırlama işlemi başarıyla tamamlandı! `Kullanıcı bilgileri sıfırlandı.`"
              )
            );
          } else {
            return message.channel.send(
              new Discord.MessageEmbed().setTitle(
                ":x: İşlem başarıyla iptal edildi!"
              )
            );
          }
        });
    }
    if (args[1] === "iletişim") {
      message.channel.send(
        new Discord.MessageEmbed().setTitle(
          "Eğer sıfırlama işlemini onaylıyorsanız 👍 onaylamıyorsanız 👎 emojisine basın."
        )
      );
      message.react("👍").then(r => {
        message.react("👎");
      });
      message
        .awaitReactions(
          (reaction, user) =>
            user.id == message.author.id &&
            (reaction.emoji.name == "👍" || reaction.emoji.name == "👎"),
          { max: 1 }
        )
        .then(collected => {
          if (collected.first().emoji.name == "👍") {
            db.set(`mail_${message.author.id}`, "Unspecifed...");
            db.set(`youtube_${message.author.id}`, "Unspecifed...");
            db.set(`tiktok_${message.author.id}`, "Unspecifed...");
            db.set(`twitch_${message.author.id}`, "Unspecifed...");
            db.set(`instagram_${message.author.id}`, "Unspecifed...");
            db.set(`twitter_${message.author.id}`, "Unspecifed...");
            db.set(`github_${message.author.id}`, "Unspecifed...");
            return message.channel.send(
              new Discord.MessageEmbed().setTitle(
                "Sıfırlama işlemi başarıyla tamamlandı! `İletişim bilgileri sıfırlandı.`"
              )
            );
          } else {
            return message.channel.send(
              new Discord.MessageEmbed().setTitle(
                ":x: İşlem başarıyla iptal edildi!"
              )
            );
          }
        });
    }
  }
};
module.exports.conf = { aliases: [], permLevel: 0 };
module.exports.help = { name: "hesap" };
