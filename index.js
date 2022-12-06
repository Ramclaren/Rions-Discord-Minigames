// fs module is how node reads files, path constructs file paths
const fs = require('node:fs');
const path = require('node:path');

// Require the necessary discord.js classes, grabs the token from config
const { Client, Collection, Events, GatewayIntentBits, TextInputStyle, ButtonBuilderconst, EmbedBuilder, Message } = require('discord.js');
const { token } = require('./config.json');

// Creates a new instance of the client 
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Javascript's map equivalent
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Set a new item in the Collection with the key as the command name and the value as the exported module
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

//Reports when the bot is ready to run
client.once(Events.ClientReady, () => {
	console.log('Ready!');
});


//Variables for Tic Tac Toe
var s1 =  "N";
var s2 =  "N";
var s3 =  "N";
var s4 =  "N";
var s5 =  "N";
var s6 =  "N";
var s7 =  "N";
var s8 =  "N";
var s9 =  "N";
var board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
var played = true;
var tictactoebot = 1;

//Why would I try coding tic tac toe without array
client.on(Events.InteractionCreate, async interaction => {

	//Tic Tac Toe Logic
	if (interaction.customId === "row1-col1") {
		if (s1 === "N") {
			s1 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	if (interaction.customId === "row1-col2") {
		if (s2 === "N") {
			s2 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	if (interaction.customId === "row1-col3") {
		if (s3 === "N") {
			s3 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	if (interaction.customId === "row2-col1") {
		if (s4 === "N") {
			s4 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	if (interaction.customId === "row2-col2") {
		if (s5 === "N") {
			s5 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	if (interaction.customId === "row2-col3") {
		if (s6 === "N") {
			s6 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			} 
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	if (interaction.customId === "row3-col1") {
		if (s7 === "N") {
			s7 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	if (interaction.customId === "row3-col2") {
		if (s8 === "N") {
			s8 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	if (interaction.customId === "row3-col3") {
		if (s9 === "N") {
			s9 = "X";
			played = true;
		if (s1 === s2 && s2 === s3 && s1 === "X" || s4 === s5 && s5 === s6 && s4 === "X" || s7 === s8 && s8 === s9 && s7 === "X" || s1 === s4 && s4 === s7 && s1 === "X" || s2 === s5 && s5 === s8 && s2 === "X" || s3 === s6 && s6 === s9  && s3 === "X" || s1 === s5 && s5 === s9 && s1 === "X" || s3 === s5 && s5 === s7 && s3 === "X") {
			board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
			interaction.update({content: board + '\nYou win!', embeds: [updateBoardEmbed]})
played = false;
		}
			while (played) {
				tictactoebot = Math.floor( Math.random() * 9 ) + 1;
				if (tictactoebot === 1 && s1 === "N") {
					s1 = "O";
					played = false;
				} else if (tictactoebot === 2 && s2 === "N") {
					played = false;
					s2 = "O";
				} else if (tictactoebot === 3 && s3 === "N") {
					played = false;
					s3 = "O";
				} else if (tictactoebot === 4 && s4 === "N") {
					played = false;
					s4 = "O";
				} else if (tictactoebot === 5 && s5 === "N") {
					played = false;
					s5 = "O";
				} else if (tictactoebot === 6 && s6 === "N") {
					played = false;
					s6 = "O";
				} else if (tictactoebot === 7 && s7 === "N") {
					played = false;
					s7 = "O";
				} else if (tictactoebot === 8 && s8 === "N") {
					played = false;
					s8 = "O";
				} else if (tictactoebot === 9 && s9 === "N") {
					played = false;
					s9 = "O";
				}
				
				if (s1 === s2 && s2 === s3 && s1 === "O" || s4 === s5 && s5 === s6 && s4 === "O" || s7 === s8 && s8 === s9 && s7 === "O" || s1 === s4 && s4 === s7 && s1 === "O" || s2 === s5 && s5 === s8 && s2 === "O" || s3 === s6 && s6 === s9 && s3 === "O" || s1 === s5 && s5 === s9 && s1 === "O" || s3 === s5 && s5 === s7 && s3 === "O") {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot beat you!', embeds: [updateBoardEmbed]})
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					const updateBoardEmbed = new EmbedBuilder()
						.setTitle('Tic Tac Toe Board')
						.setDescription('This is the board for the current game')
						.addFields(
							{ name: s1, value: 'Slot 1', inline: true },
							{ name: s2, value: 'Slot 2', inline: true },
							{ name: s3, value: 'Slot 3', inline: true },
						)
						.addFields(
							{ name: s4, value: 'Slot 4', inline: true },
							{ name: s5, value: 'Slot 5', inline: true },
							{ name: s6, value: 'Slot 6', inline: true },
						)
						.addFields(
							{ name: s7, value: 'Slot 7', inline: true },
							{ name: s8, value: 'Slot 8', inline: true },
							{ name: s9, value: 'Slot 9', inline: true },
						)
					interaction.update({content: board + '\nThe bot played in slot ' +tictactoebot+ '!', embeds: [updateBoardEmbed]})
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	//945 lines of code for tic tac toe...

	//Update Embed Button in bot-info Logic
	// if (interaction.customId === "embedChanger") {
	// 	console.log("Updating Embed")
		
	// 	const updateBoardEmbed = new EmbedBuilder()
	// 		.setTitle('Tic Tac Toe Board')
	// 		.setDescription('This is the board for the current game')
	// 		.addFields(
    //             { name: s1, value: 'Slot 1', inline: true },
    //             { name: s2, value: 'Slot 2', inline: true },
    //             { name: s3, value: 'Slot 3', inline: true },
	// 		)
	// 		.addFields(
	// 			{ name: s4, value: 'Slot 4', inline: true },
    //             { name: s5, value: 'Slot 5', inline: true },
    //             { name: s6, value: 'Slot 6', inline: true },
	// 		)
	// 		.addFields(
	// 			{ name: s7, value: 'Slot 7', inline: true },
    //             { name: s8, value: 'Slot 8', inline: true },
    //             { name: s9, value: 'Slot 9', inline: true },
	// 		)
		
	// 	const newBoardEmbed = EmbedBuilder.from(updateBoardEmbed)
	// //Externally store board data, update when button is pressed
	// 	interaction.update({ embeds: [newBoardEmbed]})
    // }


	//Button.js Logic
	if (interaction.customId === "primary") {
		interaction.reply('You pressed me!');
    }

	//Rock Paper Scissors Logic
	var selector = Math.floor( Math.random() * 3 ) + 1;
	if (interaction.customId === "rock-button") {
		if(selector === 1) {
			interaction.reply('I chose rock too! Guess we tied.');
		}
		if (selector === 2) {
			interaction.reply('I chose scissors! You win!');
		}
		if (selector === 3) {
			interaction.reply('I chose paper! You lose!');
		}
    }
	if (interaction.customId === "paper-button") {
		if(selector === 1) {
			interaction.reply('I chose paper too! Guess we tied.');
		}
		if (selector === 2) {
			interaction.reply('I chose rock! You win!');
		}
		if (selector === 3) {
			interaction.reply('I chose scissors! You lose!');
		}
    }
	if (interaction.customId === "scissors-button") {
		if(selector === 1) {
			interaction.reply('I chose scissors too! Guess we tied.');
		}
		if (selector === 2) {
			interaction.reply('I chose paper! You win!');
		}
		if (selector === 3) {
			interaction.reply('I chose rock! You lose!');
		}
    }

	if (!interaction.isChatInputCommand()) return;

	//Logic to verify commands work
	const command = client.commands.get(interaction.commandName);
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

//Login to Discord with your client's token
client.login(token);
