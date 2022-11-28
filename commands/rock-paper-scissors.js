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

	/*/Add an interaction so the console knows the button is pressed
	async execute (interaction) {
		if (!interaction.isChatInputCommand()) return;

		if (interaction.isButton()) {
			if (interaction.component.customId.equals('rock-button') ) {
				console.log('Pressed Rock Button test');
			}
		};
	}
	*/
};
		


/*
module.exports = {
	data: new SlashCommandBuilder()
	    .setName('rock-paper-scissors')
        .setDescription('Play a game of Rock Paper Scissors!')
}

client.on(Events.InteractionCreate, interaction => {
	if (!interaction.isButton()) return;
	console.log(interaction);
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'rock-paper-scissors') {
		const row = new ActionRowBuilder()
            .setDescription('Play a game of Rock Paper Scissors!')
			.addComponents(
				new ButtonBuilder()
					.setCustomId('rock-button')
					.setLabel('Rock')
					.setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
					.setCustomId('paper-button')
					.setLabel('Paper')
					.setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
					.setCustomId('scissors-button')
					.setLabel('Scissors')
					.setStyle(ButtonStyle.Primary)
			);

		await interaction.reply({ content: 'Choose one!', components: [row] });
	}
});

*/