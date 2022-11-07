// fs module is how node reads files, path constructs file paths
const fs = require('node:fs');
const path = require('node:path');

// Require the necessary discord.js classes, grabs the token from config
const { Client, Collection, Events, GatewayIntentBits, TextInputStyle } = require('discord.js');
const { token } = require('./config.json');

// Creates a new instance of the client 
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Javascript's map equivalent
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Set a new item in the Collection with the key as the command name and the value as the exported module
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

//Reports when the bot is ready to run
client.once(Events.ClientReady, () => {
	console.log('Ready!');
});

client.on(Events.InteractionCreate, async interaction => {
	var selector = Math.floor( Math.random() * 3 ) + 1;
	if (interaction.customId == "primary") {
		interaction.reply('You pressed me!');
    }

	if (interaction.customId == "rock-button") {
		if(selector === 1) {
			interaction.reply('I chose rock too! Guess we tied.');
		}
		if (selector === 2) {
			interaction.reply('I chose scissors! You win!');
		}
		if (selector === 3) {
			interaction.reply('I chose paper! You lose!');
		}
		
    }

	if (interaction.customId == "paper-button") {
		if(selector === 1) {
			interaction.reply('I chose paper too! Guess we tied.');
		}
		if (selector === 2) {
			interaction.reply('I chose rock! You win!');
		}
		if (selector === 3) {
			interaction.reply('I chose scissors! You lose!');
		}
    }

	if (interaction.customId == "scissors-button") {
		if(selector === 1) {
			interaction.reply('I chose scissors too! Guess we tied.');
		}
		if (selector === 2) {
			interaction.reply('I chose paper! You win!');
		}
		if (selector === 3) {
			interaction.reply('I chose rock! You lose!');
		}
    }

	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);
	//console.log(client.commands.get(interaction.commandName));
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

//Login to Discord with your client's token
client.login(token);




//const TicTacToe = require('discord-tictactoe');

/*
const fs = require('node:fs');
const path = require('node:path');


const { Client, GatewayIntentBits, SystemChannelFlagsBitField } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on('interactionCreate', interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);
});

	const command = interaction.client.commands.get(interaction.commandName);
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
*/
	
	
/*
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
		console.log('commandname:', commandName);
	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'hello') {
		await interaction.reply('World!');
	} else if (commandName === 'roll-6') {
		var diceRoll = Math.floor( Math.random() * 6 ) +1;
		await interaction.reply(`You rolled a ` + diceRoll);
	}
});
*/

