require('dotenv').config()
const TwitchBot = require('twitch-bot')
const fs = require('fs');

const commands = require('./commands');

const CLIENT_ID = process.env.CLIENT_ID;
const STREAMS_URL = "https://api.twitch.tv/paulorievrs_/search";

const Bot = new TwitchBot({
    username: 'paulorievrs_bot',
    oauth: process.env.PAULORIEVRS_BOTKEY,
    channels: ['paulorievrs_dev']
})

Bot.on('join', channel => {
    console.log(`Joined channel: ${channel}`)
})

Bot.on('error', err => {
    console.log(err)
})

Bot.on('message', chatter => {

    const input = chatter.message.split("!")[1] ? chatter.message.split("!")[1].toLowerCase() : "";
    const command = input.split(" ")[0];
    let parameter = input.split(" ")[1];
    

    if(command) {
        const execution = {
            "brb": commands.brb,
            "commercial": commands.commercial,
            "comandos": commands.commands,
            "discord": commands.discord,
            "github": commands.github,
            "instagram": commands.instagram,
            "joy": commands.joy,
            "color": commands.color
        }

        if(execution[command]) {
            execution[command](Bot, chatter, parameter);
        } else {
            execution['comandos'](Bot);
        }
    }

})