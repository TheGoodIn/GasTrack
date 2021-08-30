const { MessageEmbed } = require('discord.js')
const COLOR = process.env.COLOR;

module.exports = {
    name: "botinfo",
    description: "verifies an user with RoVer API",
    run: async (client, message, args) => {
        let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);





        const embed = new MessageEmbed()

        
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Bot Stats')
            .setColor(COLOR)
            .addFields(
                {
                    name: '👥 Server Users',
                    value: `Serving ${message.guild.memberCount}`,
                    inline: true
                },
                {
                    name: '⏳ Ping',
                    value: `${Math.round(client.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Server Uptime',
                    value: `${days} days, ${hours} hours, ${minutes} minutes`,
                    inline: true
                },
                
               
            )
            .setFooter(`Created By: Goodin#8128`, 'https://cdn.discordapp.com/attachments/872649434557734952/872899657917947915/SampleDiscord.png')

        await message.channel.send(embed)
    }
}