// fs module is how node reads files, path constructs file paths
const fs = require('node:fs');
const path = require('node:path');

// Require the necessary discord.js classes, grabs the token from config
const { Client, Collection, Events, GatewayIntentBits, TextInputStyle, ButtonBuilder } = require('discord.js');
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + '\nThe bot played in slot ' +tictactoebot+ '!')
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + ' \nThe bot played in slot ' +tictactoebot+ '!')
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + ' \nThe bot played in slot ' +tictactoebot+ '!')
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + ' \nThe bot played in slot ' +tictactoebot+ '!')
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + ' \nThe bot played in slot ' +tictactoebot+ '!')
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + ' \nThe bot played in slot ' +tictactoebot+ '!')
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + ' \nThe bot played in slot ' +tictactoebot+ '!')
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + ' \nThe bot played in slot ' +tictactoebot+ '!')
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
			interaction.reply(board + '\nYou win!')
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
					interaction.reply(board + '\nThe bot beat you!')
				} else if (played === false) {
					board = "|" + s1 + "|" + s2 + "|" + s3 + "| \n" + "|" + s4 + "|" + s5 + "|" + s6 + "| \n" + "|" + s7 + "|" + s8 + "|" + s9 + "|"
					interaction.reply(board + ' \nThe bot played in slot ' +tictactoebot+ '!')
				}
			}
		} else {
			interaction.reply('That slot has already been played in! Choose a new one!')
		}
	}
	console.log('Tile 1 = ' + s1 + ' Tile 2 = ' + s2 + ' Tile 3 = ' + s3 + ' Tile 4 = ' + s4 + ' Tile 5 = ' + s5 + ' Tile 6 = ' + s6 + ' Tile 7 = ' + s7 + ' Tile 8 = ' + s8 + ' Tile 9 = ' + s9 + " Computer's Move " + tictactoebot)

	
	//Button Logic
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

	//Logic for other commands
	const command = client.commands.get(interaction.commandName);
	//console.log(client.commands.get(interaction.commandName));
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




//const TicTacToe = require('discord-tictactoe');

/*
const fs = require('node:fs');
const path = require('node:path');


const { Client, GatewayIntentBits, SystemChannelFlagsBitField } = require('discord.js');
const { token } = require('./config.json');


const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on('interactionCreate', interaction => {
	if (!interaction.isChatInputCommand()) return;
	console.log(interaction);
});

	const command = interaction.client.commands.get(interaction.commandName);
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
*/
	
	
/*
// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});
client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
		console.log('commandname:', commandName);
	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	} else if (commandName === 'hello') {
		await interaction.reply('World!');
	} else if (commandName === 'roll-6') {
		var diceRoll = Math.floor( Math.random() * 6 ) +1;
		await interaction.reply(`You rolled a ` + diceRoll);
	}
});
*/

