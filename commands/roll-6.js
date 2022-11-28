const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	    .setName('roll-6')
        .setDescription('Rolls a 6 sided die')
        .addUserOption(option => option.setName('sides').setDescription('The size of the dice')),
	async execute(interaction) {
        var diceRoll = Math.floor( Math.random() * 6 ) +1;
		await interaction.reply(`You rolled a ` + diceRoll);
	},
};
