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
            .setThumbnail('https://i.imgur.com/gJ7PN5i.png')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'List of Minigames', value: 'Dice Roller, Rock Paper Scissors, Tic Tac Toe' },
                { name: 'Dice Roller', value: 'Use /roll-any to roll any sized dice', inline: true },
                { name: 'Rock Paper Scissors', value: 'Use /rock-paper-scissors to play a game against the bot', inline: true },
                { name: 'Tic Tac Toe', value: 'Use /tic-tac-toe to play against a random bot', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Other Commands', value: "Avatar, Hello, Button, Ping, Roll-6", inline: false },
                { name: 'Avatar', value: 'Displays an image file of your profile picture', inline: true },
                { name: 'Hello', value: 'Replies with world', inline: true },
                { name: 'Button', value: 'Test Button. Replies with "You Pressed Me"', inline: true },
                { name: 'Ping', value: 'Replies with pong', inline: true },
                { name: 'Roll-6', value: 'Rolls a 6 sided die', inline: true },
            )
            //.setImage('https://i.imgur.com/gJ7PN5i.png')
            .setTimestamp()
            .setFooter({ text: 'Made by Rion-Mark McLaren Jr.', iconURL: 'https://i.imgur.com/gJ7PN5i.png' });

            const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('embedChanger')
                        .setLabel('Click me to update the embed')
                        .setStyle(ButtonStyle.Primary),
                );
            await interaction.reply({ embeds: [infoEmbed], components: [row] });
        }
    }
}