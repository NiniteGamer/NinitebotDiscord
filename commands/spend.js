////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const PREFIX = CONFIG.PREFIX;
const myLoggers = require('log4js');
const sql = require("sqlite");
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {
    console.log('Testing spend command');

    sql.get(`SELECT * FROM scores WHERE userid = "${message.author.id}"`).then(row => {
        if (!row) return message.reply("sadly you do not have any points yet!");
    });

    message.channel.send("AAAAHHhhHHHHHH");
}