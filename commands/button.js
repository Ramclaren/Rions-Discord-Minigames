const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Lets you press a fun button!'),
    
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'button') {
            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('primary')
                        .setLabel('Click me!')
                        .setStyle(ButtonStyle.Primary),
                );
    
            await interaction.reply({ content: 'I think you should,', components: [row] });
        }
    },
};