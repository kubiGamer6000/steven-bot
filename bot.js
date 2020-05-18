const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', async () => {
	await bot.user.setActivity(`porn`, { type: 3 });
});


const messages = [
	`im horny`,
	`i overdosed on boner pills`,
	`simon cwoell is not hot`,
	'i masturbait to buggs bunny when he put on a dress and acted like a girl',
	'my pp hard',
	'i lost my virginity at 1 years old',
	'lgbtq kinda gey',
	'my eyeball gets hard',
	'i have boobs collection',
	'i know where nelson lives'
];

const db = require('./db.json');

const chance = 25;

bot.on('message', async (msg) => {
	if(msg.author.bot || msg.channel.id = "711567340646563862" || msg.channel.id = "711840377086148660") return;
	
	if (msg.author.id == '531939564437241856' && msg.content.includes('gay' || 'gei' || 'gey' || 'gai' || 'gya'))
		db.count = parseInt(db.count, 10) + 1;

	if (msg.content.startsWith('-cc'))
		msg.channel.send(
			new Discord.MessageEmbed()
				.setColor('#eb4d4b')
				.setTitle('How many times has Caladius said gay?')
				.setAuthor('Caladius', (await bot.users.fetch('531939564437241856')).avatarURL())
				.setDescription('See how homophobic is he..')
				.setThumbnail((await bot.users.fetch('531939564437241856')).avatarURL())
				.addField('Count:', db.count)
				.setTimestamp()
				.setFooter('Made by dolanbright')
		);

	if (Math.floor(Math.random() * chance) == 1)
		msg.channel.send(messages[Math.floor(Math.random() * messages.length)]);
});

bot.login(process.env.BOT_TOKEN)
