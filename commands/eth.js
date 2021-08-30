const { MessageEmbed, DiscordAPIError } = require('discord.js')
const Discord = require('discord.js')
const COLOR = process.env.COLOR;
const fetch = require('node-fetch')
const db = require('quick.db')

module.exports = {
    name: "eth",
    description: "Returns ETH Price",
    run: async (client, message, args) => {
        const require2 = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)

       
        const response2 = (await require2.json())
      
        const dingus = new Discord.MessageEmbed()
        .setDescription(`Ethereum Price: $${response2.ethereum.usd}`)
        .setColor(COLOR)
        message.channel.send(dingus)

    }
}

