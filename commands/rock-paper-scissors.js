const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rock-paper-scissors')
		.setDescription('Play a game of Rock Paper Scissors!'),

	async execute (interaction) {
		if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'rock-paper-scissors') {
			const row = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
						.setCustomId('rock-button')
						.setLabel('Rock')
						.setStyle(ButtonStyle.Primary),
						//.setEmoji('rock'),
					new ButtonBuilder()
						.setCustomId('paper-button')
						.setLabel('Paper')
						.setStyle(ButtonStyle.Primary),
						//.setEmoji(':newspaper:'),
					new ButtonBuilder()
						.setCustomId('scissors-button')
						.setLabel('Scissors')
						.setStyle(ButtonStyle.Primary)
						//.setEmoji(':scissors:')
				);
			
			
			await interaction.reply({ content: 'Choose one!', components: [row] });

			
		}
	},
};
