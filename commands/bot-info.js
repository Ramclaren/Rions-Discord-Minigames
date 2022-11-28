const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bot-info')
		.setDescription('View the information about the bot!'),

	async execute (interaction) {
        if (!interaction.isChatInputCommand()) return { message: 'error' };

        if (interaction.commandName === 'bot-info') {
            const infoEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("Rion's Minigames Bot")
            .setURL('https://github.com/Ramclaren/Rions-Discord-Minigames')
            .setAuthor({ name: 'SER300 Open Source Development Project'})
            .setDescription('Click the name to see the github!')
            .setThumbnail('https://i.imgur.com/AfFp7pu.png')
            .addFields(
                { name: 'List of minigames', value: 'Work in progress!' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Dice Roller', value: 'Use /roll-any to roll any sized dice', inline: true },
                { name: 'Rock Paper Scissors', value: 'Use /rock-paper-scissors to play a game against the bot', inline: true },
                { name: 'Higher or lower', value: 'Not implemented!', inline: true },
            )
            // .setImage('https://i.imgur.com/AfFp7pu.png')
            .setTimestamp()
            .setFooter({ text: 'Made by Rion-Mark McLaren Jr.', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
            await interaction.reply({ embeds: [infoEmbed] });
        }
    }
}