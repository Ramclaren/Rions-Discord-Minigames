const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('secret-ping')
		.setDescription('Discretly replies with Pong!'),
	async execute(interaction) {
		await interaction.reply({ content: 'Secret Pong!', ephemeral: true });
	},
};