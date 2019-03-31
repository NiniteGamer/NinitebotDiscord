////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const LOGGERID = CONFIG.loggerID;
const myLoggers = require('log4js');
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////
   
exports.run = async(client, message, args, ops) => {

    parseInt(LOGGERID);
    console.log(LOGGERID);
    CONFIG.loggerID = (0);

    fs.writeFileSync('./storage/config.json', JSON.stringify(CONFIG, null, 2), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(CONFIG, null , 2));
        console.log('writing to ' + CONFIG);
    })

    if (message.author.id !== ops.ownerID) return message.author.send("You do not have access to that command only NiniteGamer has access");

    if (message.author.id == ops.ownerID) {

        try {
            
            if (LOGGERID > 0) {
                return message.author.send(`LoggerID reset to zero`); 
            } else if (LOGGERID == 0) {
                return message.author.send(`LoggerID already at zero`);
            }


        } catch (e) {
            return message.author.send(`LoggerID already at zero`)
        }

    } else {
        return message.author.send("You do not have access to that command!");
    }




}

