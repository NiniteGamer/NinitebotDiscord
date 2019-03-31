////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const BOTGAME = CONFIG.botGame;
const myLoggers = require('log4js');
///////////////////////////////////////////////////////////////////////////////

//////////////////////////////////// LOGGER ///////////////////////////////////
const logger = myLoggers.getLogger("Default");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops, BOTGAME) => {

    logger.info(`${message.author.name} has ran the game/status command`);

    let gamemessagebegin = message.content
    let gamemessage = gamemessagebegin.substring(6)
    args = gamemessage;
    console.log(args);

    console.log(BOTGAME);
    CONFIG.botGame = (args);

    fs.writeFileSync('./storage/config.json', JSON.stringify(CONFIG, null, 2), function (err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(CONFIG, null , 2));
        console.log('writing to ' + CONFIG);
    })

    if (message.author.id !== ops.ownerID) return message.author.send("You do not have access to that command only NiniteGamer has access");

    if (message.author.id == ops.ownerID) {

        try {
            BOTGAME = args;
            gamechanger(BOTGAME);
            return message.author.send(`The bots game was set to ${BOTGAME}`);

        } catch (e) {
            return message.author.send(`Couldn/'t change the bots game`)
        }

    } else {
        return message.author.send("You do not have access to that command!");
    }

    function gamechanger(BOTGAME) {
        client.user.setPresence({ game: { name: BOTGAME }, status: 'dnd' });
    }




}