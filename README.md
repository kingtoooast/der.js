# Neb.js

Neb.js - A package to create Discord bots easily.

## Installation

To install neb.js use:

```sh
npm install neb.js
```

## Example

```js
const NebClient = require('neb.js');

const client = new NebClient({
  token: 'your bot token here',
  prefix: 'you bot prefix here',
  intents: ['Guilds', 'GuildMessages', 'MessageContent']
});

client.command({
  name: 'ping',
  code: 'Pong! My ping is: $ping'
});

client.start();
```
