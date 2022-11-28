const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tic-tac-toe')
		.setDescription('Play a game of tic tac toe!'),

	async execute (interaction) {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'tic-tac-toe') {
			const row1 = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
						.setCustomId('row1-col1')
						.setLabel('1')
						.setStyle(ButtonStyle.Primary),
						//.setEmoji('rock'),
					new ButtonBuilder()
						.setCustomId('row1-col2')
						.setLabel('2')
						.setStyle(ButtonStyle.Primary),
						//.setEmoji(':newspaper:'),
					new ButtonBuilder()
						.setCustomId('row1-col3')
						.setLabel('3')
						.setStyle(ButtonStyle.Primary)
						//.setEmoji(':scissors:')
				);
			
            const row2 = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
						.setCustomId('row2-col1')
						.setLabel('4')
						.setStyle(ButtonStyle.Primary),
						//.setEmoji('rock'),
					new ButtonBuilder()
						.setCustomId('row2-col2')
						.setLabel('5')
						.setStyle(ButtonStyle.Primary),
						//.setEmoji(':newspaper:'),
					new ButtonBuilder()
						.setCustomId('row2-col3')
						.setLabel('6')
						.setStyle(ButtonStyle.Primary)
						//.setEmoji(':scissors:')
				);

            const row3 = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
						.setCustomId('row3-col1')
						.setLabel('7')
						.setStyle(ButtonStyle.Primary),
						//.setEmoji('rock'),
					new ButtonBuilder()
						.setCustomId('row3-col2')
						.setLabel('8')
						.setStyle(ButtonStyle.Primary),
						//.setEmoji(':newspaper:'),
					new ButtonBuilder()
						.setCustomId('row3-col3')
						.setLabel('9')
						.setStyle(ButtonStyle.Primary)
						//.setEmoji(':scissors:')
				);
                
			await interaction.reply({ content: 'Click a box to mark it!', components: [row1,row2,row3]})
		}
    }
}