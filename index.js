const express = require('express');
const { Client } = require('discord.js');
const app = express();
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}
const http = require('http');
app.get('/', (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require('discord.js');
const client = new Discord.Client();
const data = new Map();

client.on('ready', () => {
  console.log(
    `${client.user.username} ismi ile giriş yapıldı! ${
    client.guilds.size
    } Sunucu, ${client.users.size} Kullanıcı.`
  );
});

client.on('guildCreate', server => {
  sleep(1000);
  if (
    server.id === '864213969484513322' // spam sunucusunun idsi
  ) {
  } else {
    server.leave();
  }
});

client.on('ready', () => {
  setInterval(() => {
    let a = client.channels.get('1014900987623903342'); // spam kanalının id
    function owopray() {
  a.send("owo pray")
}

    a.send('owo pray <@853130594351317002>');
    console.log('Mesaj gönderildi');
    setTimeout(owopray, 300000);
  }, 600000);
});

client.login(process.env.token); // user tokeniniz
