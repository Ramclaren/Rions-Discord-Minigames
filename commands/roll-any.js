const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
	    .setName('roll-any')
        .setDescription('Rolls any dice')
        .addIntegerOption(option =>
            option.setName('sides')
                .setDescription('The amount of sides on the dice')
                .setRequired(true)
                .setMaxValue(1000)),
	async execute(interaction) {
        var side = interaction.options.getInteger('sides')
        var diceRoll = Math.floor( Math.random() * side ) + 1;
        //console.log('Rolling dice!' + side);
		await interaction.reply(`You rolled a ` + diceRoll);
	},
};
