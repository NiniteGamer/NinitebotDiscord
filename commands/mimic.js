/*

    The mimic command is a test of ability with discord.js, it's more for fun then any thing

*/
////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Mimic_CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {
    async function mimic() {
        
        let mimicmessagebegin = message.content
        let mimicmessage = mimicmessagebegin.substring(7)
        console.log(mimicmessage)
        logger.debug(mimicmessage)

        //Checks for the BAN_MEMBER permission
        if (!message.member.hasPermission("BAN_MEMBER")) return message.channel.send(`:x: **ERROR&& *You have insufficient permissions. Requires \'BAN_MEMBER\'`)

        //I don't remember what this does, but it's important
        let amount = args

        /*
        
            These next few lines convert the mimicmessage var into a string,
            then log it into the console and the log file for debug purposes
            still trying to figure out what the .replace is for been awhile
            since I coded that.
        
        */

        mimicmessage = String(args)
        console.log(mimicmessage)
        logger.debug(mimicmessage)
        mimicmessage = mimicmessage.replace(/,/g, ' ');
        console.log(mimicmessage)
        logger.debug(mimicmessage)

        //Logging that someone has ran the !mimic command for admin abuse reasons just in case.
        console.log(message.author.tag + " has used the !mimic command, with the message of " + mimicmessage)
        logger.info(`${message.author.tag} has ran the !mimic with the args of ${mimicmessage} on guild ${message.guild.name}`);


        //Basically checks if the message is invalid, and stops the command before a crash happens.
        if (amount == undefined) {
            message.channel.send(`:x: Please Specify a message. **Proper Usage:** \'${prefix}mimic <message>\'`)
            return
        }

        message.channel.send(mimicmessage)

    }
    //Runs the mimic function
    mimic();
    //Deletes the command message to try to hide the fact that the author ran it
    if (message.content.startsWith("!mimic")) {
        message.delete(1); //Supposed to delete message
    }
}