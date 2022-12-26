const TwitchBot = require('twitch-bot');
const { onJoin } = require('./events/join');

const { onMessage } = require('./events/message');
const { onSubscription } = require('./events/subscription');


const Bot = new TwitchBot({
  username: 'paulorievrs_bot',
  oauth: process.env.TWITCH_KEY,
  channels: ['paulorievrs']
})

const setupBot = () => {
  Bot.on('join', onJoin);
  
  Bot.on('error', err => {
    console.log(err);
  });

  Bot.on('message', (chatter) => onMessage(chatter, Bot));

  Bot.on('subscription' , (event) => onSubscription(event, Bot));
}


module.exports = {
  setupBot,
  Bot
}