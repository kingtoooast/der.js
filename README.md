# Der.js

Der.js - A package to create Discord bots easily.

## Installation

To install der.js use:

```sh
npm install der.js
```

## Example

```js
const DerClient = require('der.js');

const client = new DerClient({
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
