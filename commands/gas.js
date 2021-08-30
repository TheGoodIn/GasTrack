const { MessageEmbed, DiscordAPIError } = require('discord.js')
const Discord = require('discord.js')
const COLOR = process.env.COLOR;

const db = require('quick.db')

module.exports = {
    name: "gas",
    description: "Returns Gas Information",
    run: async (client, message, args) => {


        const data = await db.get('price')

        var s = new Date(data.timestamp).toISOString();


        const embed = new Discord.MessageEmbed()
        .setAuthor('Current Gas Prices', 'https://cdn.discordapp.com/attachments/741539190055108703/882016411973730394/GasTrack.png')
        .setColor(COLOR)
        .setDescription(`**Slow 🐢 **\n >10 Minutes\n${data.slow} GWEI\n\n **Average 🚘**\n 3 Minutes \n${data.average} GWEI\n\n **Fast ✈**\n 1 Minute\n ${data.fast} GWEI\n\n **Rapid 🚀**\n 15 Seconds\n ${data.rapid} GWEI\n\n Powered by **GasNow** ⛽`)
        .setFooter('Last Updated')
        .setTimestamp(Date.parse(s))
        message.channel.send(embed)

      }
    }