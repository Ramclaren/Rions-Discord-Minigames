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
        /*
        const filter = i => i.customId === 'primary' && i.user.id === '364389750578348033';
        const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

        collector.on('collect', async i => {
	        await i.editReply({ content: 'A button was clicked!', components: [] });
        });

        collector.on('end', collected => console.log(`Collected ${collected.size} items`));*/
    },
};