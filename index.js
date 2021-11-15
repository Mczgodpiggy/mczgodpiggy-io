const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('https://website.mczgodpiggy.repl.co'));



app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);

// ================= server ends here ===================

const Discord = require('discord.js');
const MessageEmbed = require('discord.js');
const talkedRecently = new Set();

const client = new Discord.Client({
 presence: {
  activity: {
  status: "dnd",
   name: 'bot made by 𝔇ℜ𝔄𝔊𝔒𝔑ℌ𝔘𝔑𝔗𝔈ℜ-𝔪𝔠𝔷𝔤𝔬𝔡𝔭𝔦𝔤𝔤𝔶|see our website on https://website.mczgodpiggy.repl.co|bot version:BETA 1.6',
   type: 'PLAYING',
  },
 },
});
var prefix = 'MCZ';
const disbut = require('discord-buttons');
disbut(client);


client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
});





client.on('message', async (message, args) => {

  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.startsWith('MCZ kick')) {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you can not kick members because you don\'t have **kick members** perm');
    if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply('I can not kick members because i don\'t have **kick members** perm');
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const guildname = message.guild.name;
    

    let reason = args.slice(2).join(' ');
    let user = message.mentions.users.first();
    if (!user) return message.reply("You didn't mention the user to kick!")
    if(message.author.id === user.id) return message.channel.send("bruh, why would you want to kick yourself")
    
    if (!reason) return message.reply("you didn't provide a reason to kick the member please enter a vaild reason to kick the member")
    if (user.id === client.user.id) return message.reply("i can't kick my self")
    if (user.id === message.guild.owner.id) return message.reply("you can't kick guild owner")
    if(message.mentions.members.first().roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position || message.mentions.members.first().roles.highest.position === message.guild.members.resolve(client.user).roles.highest.position)
    return message.reply("I was unable to kick the member because the bot's role is lower then the user you want to kick's role");
    
    
    if (user) {
      
      const member = message.guild.member(user);
      if (member) {

        member
        .kick({reason})
          .catch(err => console.log(err))
          .then(message.reply(`<a:check:850724870282674189>Successfully kicked ${user.tag}<a:check:850724870282674189> reason is ${reason}`))
      }  
        
        
      
    } else {

      message.reply("That user isn't in this guild!");
    }
  }
});



client.on('message', async (message, args) => {

  if (!message.guild) return;
  if (message.author.bot) return;
  if (message.content.startsWith('MCZ ban')) {
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply('you can not ban members because you don\'t have **ban members** perm');
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply('I can not ban members because i don\'t have **ban members** perm');
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const guildname = message.guild.name;
    

    let reason = args.slice(2).join(' ');
    let user = message.mentions.users.first();
    if (!user) return message.reply("You didn't mention the user to ban!")
    if(message.author.id === user.id) return message.channel.send("bruh, why would you want to ban yourself")
    
    if (!reason) return message.reply("you didn't provide a reason to ban the member please enter a vaild reason to ban the member")
    if (user.id === client.user.id) return message.reply("i can't ban my self")
    if (user.id === message.guild.owner.id) return message.reply("you can't ban guild owner")
    if(message.mentions.members.first().roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position || message.mentions.members.first().roles.highest.position === message.guild.members.resolve(client.user).roles.highest.position)
    return message.reply("I was unable to ban the member because the bot's role is lower then the user you want to ban's role");
    
    if (user) {
      
      const member = message.guild.member(user);
      if (member) {

        member
        .kick({reason})
          .catch(err => console.log(err))
          .then(message.reply(`<a:check:850724870282674189>Successfully banned ${user.tag}<a:check:850724870282674189> reason is ${reason}`))
      }  
        
        
      
    } else {

      message.reply("That user isn't in this guild!");
    }
  }
});







client.on('message', message => {
  if (message.content === 'MCZ ping') {  
    if (message.author.bot) return;
    if (talkedRecently.has(message.author.id)) {
            return;
    } else {

           

        
          message.channel.send(`<a:check:850724870282674189>🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms {this is host 1}<a:check:850724870282674189>`);
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 60000);
    }
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
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) {
      return message.channel
        .send(
          "i can't clear message since i'm missing `manage_messages` perm",
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

    
    const amount = Number(input) > 100
      ? 101
      : Number(input) + 1;

    message.channel.bulkDelete(amount, true)
    .then((_message) => {
      message.channel
        
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
	if (msg.content === 'MCZ invite') {
    let addbot = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('add 𝔪𝔠𝔷𝔤𝔬𝔡𝔭𝔦𝔤𝔤𝔶.𝓘𝓞 to your servers') 
        .setURL("https://top.gg/bot/695922492027568176")
    const inviteembed = new Discord.MessageEmbed()
    .setTitle(`add ${client.user.tag}`)
    .setAuthor(client.user.tag, client.user.displayAvatarURL())
    .setDescription(`add ${client.user.tag} to your servers`)
    .addField(`add ${client.user.tag}`, "[click here](https://top.gg/bot/599050023669334037)")
		msg.channel.startTyping();
    msg.channel.send(inviteembed, addbot);
    msg.channel.stopTyping();
	}
});

client.on('message', async message => {
  if (message.channel.name.includes("poll")) {
    if (message.author.bot) return;
    message.react("<a:check:850724870282674189>").then(message.react("<a:check_no:867066462027907072>")).catch()
  }
})

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
    msg.channel.send(
			'**                                            **');
      msg.channel.stopTyping();
	}
});




client.on('guildMemberAdd', member => {
  if (member.guild.id === "873937627039010816") return
  
  const channel = member.guild.channels.cache.find(ch => ch.name.includes('welcome'));
  
  if (!channel) return;
  const joinembed = new Discord.MessageEmbed()
  .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true}))
  .setTitle(`<a:check:850724870282674189>**${member.displayName} joined**<a:check:850724870282674189>`)
  .setColor("GOLD")
  .setDescription(`<a:check:850724870282674189>**${member} has joined now ${member.guild.name} have ${member.guild.memberCount} members**<a:check:850724870282674189>`)
  .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true}))
  channel.send(joinembed);
});
client.login(process.env.DISCORD_TOKEN);