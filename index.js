const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
var figlet = require("figlet");
const ethers = require("ethers");
const fetch = require('node-fetch')
const db = require('quick.db')
require("dotenv").config();
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});
const prefix = "!";
const roundToHundredth = (value) => {
  return Number(value.toFixed(2));
};



const fs = require("fs");

// Scrapers (idk if thats a word lmao)

// Collection Scraper

var queue = new Map();

client.commands = new Discord.Collection();
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const COLOR = process.env.COLOR;

client.on("ready", async (activity) => {
  client.user.setStatus(`online`);

  
      client.user.setActivity(
        `!gas`,
        { type: "WATCHING" }
      );
     

  figlet("Made  By  Goodin", async (err, data) => {
    console.log(" ");
    console.log(" ");
    await console.log(data);
    console.log(" ");

    console.log("Discord API Connected");
    console.log("GasNow API Connected");
    console.log("CoinGecko API Connected");

    console.log(" ");
    console.log("Successfully Loaded The Bot");
    console.log("");

    const fet = await db.get('price')

    console.log(fet)
  });
});

client.on("ready", async (activity) => {

  setInterval(async () => {
    const fet = await db.get('price')

    console.log(fet)
  
  }, 10000);
 let loop = setInterval(async () => {
  



    const require = await fetch('https://www.gasnow.org/api/v3/gas/price?')

    const response = await require.json();

    if(response.code == 200){

      const rapid = response.data.rapid / 1000000000
      const rapidfinal = Math.round(rapid)
      const fast = response.data.fast / 1000000000
      const fastfinal = Math.round(fast)
      const standard = response.data.standard / 1000000000
      const standardfinal = Math.round(standard)
      const slow = response.data.slow / 1000000000
      const slowfinal = Math.round(slow)
      
      db.set('price', { fast: fastfinal, average: standardfinal, slow: slowfinal, rapid: rapidfinal, timestamp: response.data.timestamp})

    }

      const require2 = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`
      );
      const response2 = await require2.json();


    }, 30000);
  });

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  const args = message.content.slice(prefix.length).split(/ +/);
 
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  const command = args.shift().toLowerCase();

  if (!client.commands.has(command)) return;

  try {
    client.commands.get(command).run(client, message, args);
  } catch (error) {
    console.error(error);
    message.reply("there was an error trying to execute that command!");
  }
  //ok
});

client.login(process.env.TOKEN);

