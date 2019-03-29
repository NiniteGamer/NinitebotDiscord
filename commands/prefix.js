////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const PREFIX = CONFIG.defaultPrefix;
const myLoggers = require('log4js');
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////
   
exports.run = async(client, message, args, ops) => {

    let prefixmessagebegin = message.content
    let prefixmessage = prefixmessagebegin.substring(8)
    args = prefixmessage;
    console.log(args);

    console.log(PREFIX);
    CONFIG.defaultPrefix = (args);

    fs.writeFileSync('./storage/config.json', JSON.stringify(CONFIG, null, 2), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(CONFIG, null , 2));
        console.log('writing to ' + CONFIG);
    })

    if (message.author.id !== ops.ownerID) return message.author.send("You do not have access to that command only NiniteGamer has access");

    if (message.author.id == ops.ownerID) {

        try {
            return message.author.send(`The bots prefix was set to ${PREFIX}`);

        } catch (e) {
            return message.author.send(`Couldn/'t change the bots prefix`)
        }

    } else {
        return message.author.send("You do not have access to that command!");
    }




}





