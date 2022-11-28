const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('Replies with Hello World!'),
	async execute(interaction) {
		await interaction.reply('Hello World!');
	},
};