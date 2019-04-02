////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const PREFIX = CONFIG.defaultPrefix;
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Help_CMD");
///////////////////////////////////////////////////////////////////////////////

//Update this sometime to the better way of doing embeds
//Don't remember leaving this comment lol, um still need to update this just laziness making it hard.

exports.run = async (client, message, args, helpinfoadmin) => {
    logger.info("The help command has been ran${PREFIX}")
    var helpdm = CONFIG.helpdm;
    var PREFIX = CONFIG.defaultPrefix;
    var member = message.member.hasPermission('KICK_MEMBERS');
    console.log(member);
    var memberName = message.member.name;
    logger.info(`Member: ${memberName} has the kick_members permission ${member}`);
    console.log(helpdm);

    var helpinfoadmin = null;

    if (!message.member.hasPermission('KICK_MEMBERS')) return message.author.send({
        embed: {
            color: 3447003,
            author: {
                name: "Ninitebot Help",
                icon_url: client.user.avatarURL
            },
            description: `${PREFIX}help`,
            fields: [{
                name: "BASIC COMMANDS",
                value: `${PREFIX}ninitebot, ${PREFIX}help, ${PREFIX}info, ${PREFIX}help-meme`
            },
            {
                name: "FUN COMMANDS",
                value: `${PREFIX}meme, ${PREFIX}dan, ${PREFIX}quote, ${PREFIX}urban, ${PREFIX}johnny, ${PREFIX}self-help, ${PREFIX}ping`
            },
            {
                name: "LEVEL COMMANDS",
                value: `${PREFIX}level, ${PREFIX}points`
            },
            {
                name: "MUSIC COMMANDS",
                value: `${PREFIX}play, ${PREFIX}pause, ${PREFIX}resume, ${PREFIX}queue, ${PREFIX}search, ${PREFIX}skip`
            }
            ]
        }
    });

    let image = 'https://cdn2.iconfinder.com/data/icons/flat-design-basic-set-9/24/secure-shield-protect-blue-512.png'

    if (message.member.hasPermission("KICK_MEMBER" && "BAN_MEMBER")) return message.author.send({
        embed: {
            color: 3447003,
            author: {
                name: "Ninitebot Admin Help",
                icon_url: client.user.avatarURL
            },
            description: `${PREFIX}help`,
            fields: [{
                name: "__BASIC COMMANDS__",
                value: `${PREFIX}ninitebot, ${PREFIX}help, ${PREFIX}serverinfo, ${PREFIX}info, ${PREFIX}help-meme, ${PREFIX}help-mimic, ${PREFIX}Testing`
            },
            {
                name: "__ADMIN COMMANDS__",
                value: `${PREFIX}invite, ${PREFIX}mimic <text>, ${PREFIX}purge <amount>`
            },
            {
                name: "__LEVEL COMMANDS__",
                value: `${PREFIX}level, ${PREFIX}points, ${PREFIX}reset_level_points @<user>`
            },
            {
                name: "__FUN COMMANDS__",
                value: `${PREFIX}meme, ${PREFIX}dan, ${PREFIX}quote, ${PREFIX}urban, ${PREFIX}johnny, ${PREFIX}self-help, ${PREFIX}ping, ${PREFIX}ascii`
            },
            {
                name: "__MUSIC COMMANDS__",
                value: `${PREFIX}play, ${PREFIX}pause, ${PREFIX}resume, ${PREFIX}queue, ${PREFIX}search, ${PREFIX}skip, ${PREFIX}fskip, ${PREFIX}volume <0 - 200)`
            }
            ]
        }
    })

    if (message.member.hasPermission("KICK_MEMBER" || "BAN_MEMBER")) return message.author.send({
        embed: {
            color: 3447003,
            author: {
                name: "Ninitebot Admin Help",
                icon_url: client.user.avatarURL
            },
            description: `${PREFIX}help`,
            fields: [{
                name: "__BASIC COMMANDS__",
                value: `${PREFIX}ninitebot, ${PREFIX}help, ${PREFIX}serverinfo, ${PREFIX}info, ${PREFIX}help-meme, ${PREFIX}help-mimic`
            },
            {
                name: "__ADMIN COMMANDS__",
                value: `${PREFIX}invite, ${PREFIX}mimic <text>, ${PREFIX}purge <amount>`
            },
            {
                name: "__LEVEL COMMANDS__",
                value: `${PREFIX}level, ${PREFIX}points, ${PREFIX}reset_level_points @<user>`
            },
            {
                name: "__FUN COMMANDS__",
                value: `${PREFIX}meme, ${PREFIX}dan, ${PREFIX}quote, ${PREFIX}urban, ${PREFIX}johnny, ${PREFIX}self-help, ${PREFIX}ping, ${PREFIX}ascii`
            },
            {
                name: "__MUSIC COMMANDS__",
                value: `${PREFIX}play, ${PREFIX}pause, ${PREFIX}resume, ${PREFIX}queue, ${PREFIX}search, ${PREFIX}skip, ${PREFIX}fskip, ${PREFIX}volume <0 - 200)`
            }
            ]
        }
    })
}
