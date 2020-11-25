require('dotenv').config()
const TwitchBot = require('twitch-bot')
const fs = require('fs');
const shell = require('shelljs');
const querystring = require("querystring"),
fetch = require("node-fetch");

const CLIENT_ID = process.env.CLIENT_ID;
const STREAMS_URL = "https://api.twitch.tv/paulorievrs_/search";

let brb = true;

const Bot = new TwitchBot({
    username: 'paulorievrs_bot',
    oauth: 'oauth:' + process.env.KEY2,
    channels: ['paulorievrs_']
})

Bot.on('join', channel => {
    console.log(`Joined channel: ${channel}`)
})

Bot.on('error', err => {
    console.log(err)
})

Bot.on('message', chatter => {
    if(chatter.message === "!brb") {
        if(chatter.username === "paulorievrs_") {
                if(brb) {
                    fs.writeFileSync('C:\\Users\\Paulo\\Desktop\\Stream txt\\brb.txt', "");
                    brb = !brb;
                    Bot.say("O PATRÃO VOLTOU");

                } else {
                    fs.writeFileSync('C:\\Users\\Paulo\\Desktop\\Stream txt\\brb.txt', "Vou pegar água, já volto!");
                    brb = !brb;
                    shell.exec('brb.bat')
                    Bot.say("O PATRÃO JÁ VOLTA GALERA");
                }
                
                
                
        }
    }

    else if(chatter.message === "!ad" && (chatter.user_type === 'mod' || chatter.username === "paulorievrs_")) {
        Bot.say("!commercial 30");
    } 

    else if(chatter.message === '!comandos') {
        Bot.say("!discord, !github, !hightech, !Instagram, !joaozin, !meta, !site, !twitter, !uptime, !youtube");
    }

    else if(chatter.message === '!discord') {
        Bot.say('Paulo Rievrs#7365 -- Me adiciona lá <3');
    }

    else if(chatter.message === '!github') {
        Bot.say('Meus repositórios: https://github.com/paulorievrs');
    }

    else if(chatter.message === '!hightech') {
        Bot.say('https://www.hightechstudios.ga/');
    }

    else if(chatter.message === '!instagram') {
        Bot.say('Me siga no instagram: https://instagram.com/paulorievrs.dev');
    }

    else if(chatter.message === '!joaozin') {
        Bot.say('Joaozinjs é um cara que sempre está comigo nas lives, se quiser ver mais dele pode entrar: https://www.hightechstudios.ga/');
    }

    else if(chatter.message === '!joy') {
        Bot.say("A melhor namorada do mundo <3 <3 https://instagram.com/joyumee");
    }
    
    else if(chatter.message === '!meta') {
        Bot.say('Minha meta de sub é 5 por mês <3');
    }

    else if(chatter.message === 'playlist') {
        Bot.say("https://open.spotify.com/playlist/37i9dQZF1DX889U0CL85jj?si=4f1TnUrZT4eZgH0tXtx7zw");
    }

    else if(chatter.message === '!site') {
        Bot.say("https://paulorievrs.site/");
    } 

    else if(chatter.message === "!teste") {
        const qs = querystring.stringify({
            first: 1
        });
        
        const qUrl = `https://api.twitch.tv/helix/streams`;
        
        const fetchArgs = {
            headers: {
                "Client-ID": CLIENT_ID,
                "Authorization": "Bearer " + process.env.KEY2
            }
        };
        
        fetch(qUrl, fetchArgs)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));
    }



})