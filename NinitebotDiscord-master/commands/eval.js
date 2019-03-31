////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const PREFIX = CONFIG.defaultPrefix;
const myLoggers = require('log4js');
const apps = require('../app');
const logger = myLoggers.getLogger("Eval");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    logger.info(`${message.author.tag} has ran the ${PREFIX}eval command on guild ${message.guild.name}`);

    function clean(text) {
        if (typeof(text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }

    if (message.author.id !== ops.ownerID) return;
    try {
        var code = args.join(" ");
        var evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.sendCode("x1", clean(evaled))
    } catch(err) {
        message.channel.sendMessage(`\`ERROR\` \`\`\`x1\n${clean(err)}\n\`\`\``);
    }
}