////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const PREFIX = CONFIG.defaultPrefix;
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the ${PREFIX}changeme command on guild ${message.guild.name}`);


    return
}