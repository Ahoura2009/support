var { Client, Intents } = require('discord.js');
var client = new Client({ intents: 32767 });
const { joinVoiceChannel } = require('@discordjs/voice');

client.once('ready', () => {
  console.log(`> ${client.user.username} Has Logged in !`)
  const voiceChannel = client.channels.cache.get("990341202274582588");
  joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    selfDeaf: false
  })
}) 

client.login('MTAzMjkwNzE5MjUxMDIwNTk3Mw.GVaB_y.tOi7v9EYS5NEE4uhVNDe83aShV_Y0tlFrUttj0'); 
