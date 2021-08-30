const { MessageEmbed, DiscordAPIError } = require('discord.js')
const Discord = require('discord.js')
const COLOR = process.env.COLOR;
const fetch = require('node-fetch')
const db = require('quick.db')

module.exports = {
    name: "btc",
    description: "Returns BTC Price",
    run: async (client, message, args) => {
        const require2 = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`)

       
        const response2 = (await require2.json())
      
        const dingus = new Discord.MessageEmbed()
        .setDescription(`Bitcoin Price: $${response2.bitcoin.usd}`)
        .setColor(COLOR)
        message.channel.send(dingus)

    }
}

