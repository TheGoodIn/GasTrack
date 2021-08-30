const { MessageEmbed, DiscordAPIError } = require('discord.js')
const Discord = require('discord.js')
const COLOR = process.env.COLOR;


module.exports = {
    name: "help",
    description: "send help",
    run: async (client, message, args) => {


        const embed = new Discord.MessageEmbed()
        .setTitle('GasTrack Help.')
        .setDescription('`!gas` - Returns Gas Price\n `!crypto` - Returns Major Crypto Prices\n`!eth` - Returns ETH Price\n `!btc` - Returns BTC Price\n `!ltc` - Returns LTC Price\n `!doge` - Returns Doge Price\n')
        .setFooter('Created by Goodin#8128')
        .setColor(COLOR)

        message.channel.send(embed)
    }
}
       