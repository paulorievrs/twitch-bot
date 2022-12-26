const { help } = require("../commands/help");
const { pc } = require("../commands/pc");
const { social } = require("../commands/social");
const { onError } = require("./error");


const commands = {
  ...social,
  ...pc,
  ...help
}

const getCommand = (message) => {
  if(message in commands) {
    return commands[message]
  }
}

const handleArrayCommand = (command, Bot) => {
  command.forEach(c => Bot.say(c));
}

const onMessage = (chatter, Bot) => {
  const command = getCommand(chatter.message);
    if(command) {
      if(Array.isArray(command)) return handleArrayCommand(command, Bot);
      return Bot.say(command);
    }

    if(chatter.message === '!test') {
      onError('Teste de erro');
    }
}

module.exports = {
  onMessage
}