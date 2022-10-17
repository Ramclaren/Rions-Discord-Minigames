// Require the necessary discord.js classes
const { Client, GatewayIntentBits, SystemChannelFlagsBitField } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

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



// Login to Discord with your client's token
client.login(token);
