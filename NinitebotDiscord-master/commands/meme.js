////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Meme_CMD");
const randomPuppy = require('random-puppy');
///////////////////////////////////////////////////////////////////////////////

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

exports.run = async (client, message, args) => {

    logger.info(`${message.author.tag} has ran the !meme`);

    var memes = ['\MEME1.jpeg', '\MEME2.jpeg', '\MEME3.jpeg'];
    console.log("The memes array is " + memes.length);
    logger.debug("The memes array is " + memes.length);

    var sender = message.author.tag;

    var memerandom = getRandomInt(0, memes.length);

    logger.debug(memerandom)

    var selectedmeme = memes[memerandom];

    console.log(sender + " has used the !meme command")
    logger.info(sender + " has used the !meme command")

    message.channel.send('MEMESSSSSSS', {

        files: [
            selectedmeme
        ]

    })
        .catch(error => message.channel.send(`*Error: ${error}`))
}