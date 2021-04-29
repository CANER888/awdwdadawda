const discord = require('discord.js');
exports.run = async(client, message, args) => {
    const embed = new discord.MessageEmbed()
    .addField('eğlenceyardım', 'eğlence komutlarını açar', true)
    .addField('moderasyonyardım', 'moderasyon komutlarını açar', true)
    .addField('sunucupanel', 'sunucu bilgi komutlarını açar', true)
    .setImage('https://cdn.discordapp.com/attachments/832260004367171644/832267764730167306/standard.gif')
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ['help']



};
exports.help = {
name: "dyardım"
};