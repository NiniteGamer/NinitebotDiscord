////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const urban = require('relevant-urban');
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

  if (!args[0]) return message.channel.send(`***Please specify some text!***`);

  let res = await urban(args.join(' ')).catch(e => {

    return message.channel.send('***Sorry, that word was not found!***');
  });

  message.channel.send({
    embed: {
      color: 3447003,
      title: res.word,
      url: res.urbanURL,
      description: `**Definition:**\n*${res.definition}*\n\n**Example:**\n*${res.example}*`,
      fields: [{
        name: 'Author',
        value: res.author,
        inline: true
      },
      {
        name: 'Rating',
        value: `**\`Upvotes: ${res.thumbsUp} | Downvotes: ${res.thumbsDown}\`**`,
        inline: true
      }
      ],
      timestamp: new Date(),
    }
  });

}

