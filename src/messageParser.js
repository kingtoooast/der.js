function parseMessage(message, prefix) {
    if (!message.content.startsWith(prefix)) return null;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
  
    return { commandName, args };
  }
  
  module.exports = parseMessage;
  