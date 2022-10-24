// fs module is how node reads files, path constructs file paths
const fs = require('node:fs');
const path = require('node:path');

// Require the necessary discord.js classes, grabs the token from config
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
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
