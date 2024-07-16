const { Client, GatewayIntentBits } = require('discord.js');
const { handleCommand } = require('./commandHandler');
const { parseMessage } = require('./messageParser');

class DerClient {
  constructor({ token, prefix, intents }) {
    this.token = token;
    this.prefix = prefix;
    this.client = new Client({ intents: intents.map(intent => GatewayIntentBits[intent]) });
    this.commands = [];
  }

  command({ name, code }) {
    this.commands.push({ name, code });
  }

  start() {
    this.client.on('messageCreate', message => {
      if (!message.content.startsWith(this.prefix) || message.author.bot) return;
      handleCommand(this, message);
    });

    this.client.login(this.token);
  }
}

module.exports = DerClient;
