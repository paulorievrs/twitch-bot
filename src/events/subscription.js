
const onSubscription = (event, Bot) => {
  Bot.say(`Obrigado ${event.display_name} por se inscrever no canal!`);
}

module.exports = {
  onSubscription
}