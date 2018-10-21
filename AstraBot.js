const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = process.env.PREFIX
const bot = client
const embed = new Discord.RichEmbed();
const newUsers = [];
const api = "WwOa3mj8OdMHL050GaUZwohBxL19HhgC"

bot.on('ready', () => {
    console.log(`${bot.user.username} is online!`);

    bot.user.setActivity(`over ${bot.guilds.size} server!`, {type: "WATCHING"});
    bot.user.setStatus('dnd');
  });

  bot.on("message", (message) => {
      if (message.content === prefix + "ping")
      message.channel.send("<:smug:453529634668019712>").then(function(m) {
          const embed = new Discord.RichEmbed()
          message.channel.send({embed:{
              color:0x1017ff,
              description: `${m.createdTimestamp - message.createdTimestamp} ms`,
      }})
      })
  });

  bot.on("message", (message) => {
  if (message.content.startsWith(prefix + 'shoot')) {

    const user = message.mentions.users.first();

    if (user) {

      const member = message.guild.member(user);

      if (member) {

          message.member.send(`you were shot by **${message.author.username}** <:right_gun:503630737241669643>`)
      }}
      }
    });
  client.on('message', message => {

      if (!message.guild) return;


      if (message.content.startsWith(prefix + 'kick')) {
          if(!message.member.hasPermission("KICK_MEMBERS")) return

        const user = message.mentions.users.first();

        if (user) {

          const member = message.guild.member(user);

          if (member) {

            member.kick('Optional reason that will display in the audit logs').then(() => {

              message.reply(`Successfully kicked ${member}`);
            }).catch(err => {

              message.reply('I was unable to kick the member');

              console.error(err);
            });
          } else {

            message.reply('That user isn\'t in this server!');
          }

        } else {
          message.reply('You didn\'t mention the user to kick!');
        }
      }
    });

  client.on('message', message => {

      if (!message.guild) return;

      if (message.content.startsWith(prefix + 'ban')) {
          if(!message.member.hasPermission("BAN_MEMBERS")) return

        const user = message.mentions.users.first();

        if (user) {

          const member = message.guild.member(user);

          if (member) {

            member.ban({
              reason: 'They were bad!',
            }).then(() => {

              message.reply(`Successfully banned ${member}`);
              message.channel.sendfile(`https://i.imgur.com/Ih4bNpr.png`)
            }).catch(err => {

              message.reply('I was unable to ban the member');

              console.error(err);
            });
          } else {

            message.reply('That user isn\'t in this server!');
          }
        } else {

          message.reply('You didn\'t mention the user to ban!');
        }
      }
  });

  client.login(process.env.BOT_TOKEN);

  // Web app (Express + EJS)
  const http = require('http');
  const express = require('express');
  const app = express();

  // set the port of our application
  // process.env.PORT lets the port be set by Heroku
  const port = process.env.PORT || 5000;

  // set the view engine to ejs
  app.set('view engine', 'ejs');

  // make express look in the `public` directory for assets (css/js/img)
  app.use(express.static(__dirname + '/public'));

  // set the home page route
  app.get('/', (request, response) => {
      // ejs render automatically looks in the views folder
      response.render('index');
  });

  app.listen(port, () => {
      // will echo 'Our app is running on http://localhost:5000 when run locally'
      console.log('Our app is running on http://localhost:' + port);
  });

  // pings server every 15 minutes to prevent dynos from sleeping
  setInterval(() => {
   http.get('http://discordjs-heroku.herokuapp.com');
  }, 900000);
