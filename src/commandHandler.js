const Command = require('./command');

class CommandHandler {
  constructor() {
    this.commands = new Map();
  }

  registerCommand(name, code) {
    const command = new Command(name, code);
    this.commands.set(name, command);
  }

  getCommand(name) {
    return this.commands.get(name);
  }
}

module.exports = CommandHandler;