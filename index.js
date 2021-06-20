const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('https://website.mczgodpiggy.repl.co'));



app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);

// ================= START BOT CODE ===================
// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
var prefix = 'MCZ';



client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
  game:{
    name:`bot maked by 𝔇ℜ𝔄𝔊𝔒𝔑ℌ𝔘𝔑𝔗𝔈ℜ-𝔪𝔠𝔷𝔤𝔬𝔡𝔭𝔦𝔤𝔤𝔶|see our website on https://website.mczgodpiggy.repl.co|bot version:BETA 1.4`,
  },
  status:'dnd'
});
});


client.on('message', msg => {
  if (msg.content === 'MCZ servers') {
    if (msg.author.bot) return;
    msg.channel.send(`<a:check:850724870282674189>bot is in ${client.guilds.cache.size} servers<a:check:850724870282674189><a:nitro:730356764243132436>
    can you guys invite me?? https://top.gg/bot/695922492027568176 <= here invite me`);
    
  }
});



client.on('message', async message => {

  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.startsWith('MCZ kick')) {
     if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you can not kick members because you don\'t have **kick members** perm');
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const guildname = message.guild.name;

    let reason = args.slice(2).join(' ');
    const user = message.mentions.users.first();
    if (!user) return message.reply("You didn't mention the user to kick!")
    if (!reason) return message.reply("you didn't provide a reason to kick the member please enter a vaild reason to kick the member")

    if (user) {

      const member = message.guild.member(user);

      if (member) {

        member
          .send(`you've been kicked from ${guildname} because of the reason ${reason}`)
          .then(() => {
          member.kick(reason)
          message.reply(`<a:check:850724870282674189>Successfully kicked ${user.tag}<a:check:850724870282674189> reason is ${reason}`);
          })
          .catch(err => {

            message.reply(`I was unable to kick the member or your trying to kick a server owner/admin/mod/staff error is ${err}`);

            console.error(err);
          });
      } else {

        message.reply("That user isn't in this guild!");
      }
      
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});



client.on('message', async (message, args) => {

  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.startsWith('MCZ ban')) {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you can not ban members because you don\'t have **ban members** perm');
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const guildname = message.guild.name;
    // Assuming we mention someone in the message, this will return the user
    let reason = args.slice(2).join(' ');
    const user = message.mentions.users.first();
    if (!user) return message.reply("You didn't mention the user to ban!")
    if (!reason) return message.reply("you didn't provide a reason to ban the member please enter a vaild reason to ban the member")
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {

        member
          .send(`you've been banned from ${guildname} because of the reason ${reason}`)
          .then(() => {
          member.ban({days: 7, reason})
          message.reply(`<a:check:850724870282674189>Successfully banned ${user.tag}<a:check:850724870282674189> reason is ${reason}`);
          })
          .catch(err => {

            message.reply(`I was unable to ban the member or your trying to ban a server owner/admin/mod/staff error is ${err}`);

            console.error(err);
          });
      } else {

        message.reply("That user isn't in this guild!");
      }
    } else {

      message.reply("You didn't mention the user to ban!");
    }
  }
});







client.on('message', message => {
  if (message.content === 'MCZ ping') {  
    if (message.author.bot) return;
    message.channel.send(`<a:check:850724870282674189>🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms {this is host 1}<a:check:850724870282674189>`);
  }
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || !message.guild) return;
  if (message.author.bot) return;
  const args = message.content
    .toLowerCase()
    .slice(prefix.length)
    .trim()
    .split(/\s+/);
  const [command, input] = args;

  if (command === 'clear' || command === 'c') {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel
        .send(
          "You cant use this command since you're missing `manage_messages` perm",
        );
    }

    if (isNaN(input)) {
      return message.channel
        .send('enter the amount of messages that you would like to clear')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    if (Number(input) < 0) {
      return message.channel
        .send('enter a positive number')
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    }

    // add an extra to delete the current message too
    const amount = Number(input) > 100
      ? 101
      : Number(input) + 1;

    message.channel.bulkDelete(amount, true)
    .then((_message) => {
      message.channel
        // do you want to include the current message here?
        // if not it should be ${_message.size - 1}
        .send(`<a:check:850724870282674189>Bot cleared \`${_message.size}\` messages :broom:<a:check:850724870282674189><a:nitro:730356764243132436>`)
        .then((sent) => {
          setTimeout(() => {
            sent.delete();
          }, 2500);
        });
    });
  }


});

client.on('message', msg => {
	if (msg.content === 'MCZ inv') {
		if (msg.author.bot) return;
    msg.channel.startTyping();
    msg.channel.send('<a:check:850724870282674189>https://discord.com/oauth2/authorize?client_id=695922492027568176&permissions=4265607167&scope=bot<a:check:850724870282674189>');
    msg.channel.stopTyping();
	}
});

client.on('message', msg => {
	if (msg.content === 'MCZ invite') {
		msg.channel.startTyping();
    msg.channel.send('<a:check:850724870282674189>https://discord.com/oauth2/authorize?client_id=695922492027568176&permissions=4265607167&scope=bot<a:check:850724870282674189>');
    msg.channel.stopTyping();
	}
});



client.on('message', msg => {
	if (msg.content === 'MCZ ...') {
    if (msg.author.bot) return;
    msg.channel.startTyping();
    msg.reply('......................................................');
    msg.channel.stopTyping();
	}
});

client.on('message', msg => {
	if (msg.content === 'MCZ website') {
    if (msg.author.bot) return;
    msg.reply('<a:check:850724870282674189>https://website.mczgodpiggy.repl.co<a:check:850724870282674189>');
  }
});









client.on('message', msg => {
	if (msg.content === 'MCZ air') {
    if (msg.author.bot) return;
    msg.channel.startTyping();
    msg.reply(
			'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
      msg.channel.stopTyping();
	}
});




client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`<a:check:850724870282674189>Welcome to the server, ${member}<a:check:850724870282674189><a:welcomenew:854934498454405140>`);
});
// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it
// feature to hide the token we got earlier.
client.login(process.env.DISCORD_TOKEN);