////////////////////////////// Required Packages //////////////////////////////
////////////////////////////// DO NOT MESS WITH ///////////////////////////////
let Discord = module.require(`discord.js`);
const fs = module.require(`fs`);
const CONFIG = require("../storage/config.json");
const myLoggers = require('log4js');
const logger = myLoggers.getLogger("Skip_CMD");
///////////////////////////////////////////////////////////////////////////////

exports.run = async (client, message, args, ops) => {

    let fetched = ops.active.get(message.guild.id);

    console.log(`Testing ${fetched}`);

    if (!fetched) return message.channel.send(`There currently isn\'t any music playing in the guild!`);

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`Sorry you aren/'t currently connected to the same voice channel!`);

    let userCount = message.member.voiceChannel.members.size;

    let required = Math.ceil(userCount / 2);

    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];

    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`Sorry, you already voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required!`);

    fetched.queue[0].voteSkips.push(message.member.id);

    ops.active.set(message.guild.id, fetched);

    console.log(fetched.queue.voteSkips);

    if (fetched.queue[0].voteSkips.length >= required) {

        message.channel.send('Successfully skipped song');

        return fetched.dispatcher.emit('finish');

    }

    message.channel.send(`Successfully voted to skip! ${fetched.queue[0].voteSkips.length}/${required} required!`);
}