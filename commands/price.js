const Discord = require('discord.js');
const fetch = require('node-fetch')
const COLOR = process.env.COLOR;
module.exports = {
    name: "price",
    description: "returns crypto prices",
    run: async (client, message, args) => {
        const require = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`);
        const require2 = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`)
        const require22 = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd`)
        const require222 = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd`)

        const response = (await require.json())
        const response2 = (await require2.json())
        const response22 = (await require22.json())
        const response222 = (await require222.json())

        const dingus = new Discord.MessageEmbed()
        .setTitle('Crypto Prices.')
        .setDescription(`Bitcoin: $${response.bitcoin.usd}\nEthereum: $${response2.ethereum.usd}\nDogecoin: $${response22.dogecoin.usd}\n Litecoin: $${response222.litecoin.usd}`)
        .setColor(COLOR)
        message.channel.send(dingus)

    }
}