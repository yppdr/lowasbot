
require('dotenv').config()
const tmi = require('tmi.js');


const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: process.env.USERNAME,
		password: process.env.OAUTH
	},
	channels: [ 'lowas' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	// CMD pour dire hello
	if(message.toLowerCase().includes("hello") === true) {
		client.say(channel, `Hello @${tags.username} !`);
	}

	// CMD pour 21
	if(message.toLowerCase() === '!21') {
		client.say(channel, `@${tags.username} 21JumpClick est un serveur GTARP public avec whitelist ! plus d'info ici : https://21jumpclick.fr`);
	}

});
	