// jkcoxson
// Official Discord Interface made by the CamelBot team

// Set up CamelBot core
const CamelBotJs = require('../CamelBot.js');
const CamelBot = new CamelBotJs('Discord');
console.debug = CamelBot.debug;
console.log = CamelBot.debug;
console.error = CamelBot.error;
console.info = CamelBot.info;
console.warn = CamelBot.warn;

const fs = require('fs');
const process = require('process');

const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });




// Determine if config.json exists
if (!fs.existsSync('./config.json')) {
    console.log('config.json does not exist. Please creating one...');
    fs.writeFileSync('./config.json', JSON.stringify({
        token: '',
    }));
    process.exit(1);
}

const config = require('./config.json');
client.login(config.token);

// Set up Discord events (thanks GitHub Copilot for generating this for me) 
client.on('messageCreate', message => {
    CamelBot.event('message', JSON.stringify(message.toJSON())); // This is 'message' on purpose to comply with CamelBot API
});
// Everything else isn't specified by the API so we're gucci
client.on('applicationCommandCreate', command => {
    CamelBot.event('applicationCommandCreate', JSON.stringify(command.toJSON()));
});
client.on('applicationCommandDelete', command => {
    CamelBot.event('applicationCommandDelete', JSON.stringify(command.toJSON()));
});
client.on('applicationCommandUpdate', (oldCommand, newCommand) => {
    CamelBot.event('applicationCommandUpdate', JSON.stringify({
        oldCommand: oldCommand.toJSON(),
        newCommand: newCommand.toJSON(),
    }));
});
client.on('applicationCreate', application => {
    CamelBot.event('applicationCreate', JSON.stringify(application.toJSON()));
});
client.on('applicationDelete', application => {
    CamelBot.event('applicationDelete', JSON.stringify(application.toJSON()));
});
client.on('applicationUpdate', (oldApplication, newApplication) => {
    CamelBot.event('applicationUpdate', JSON.stringify({
        oldApplication: oldApplication.toJSON(),
        newApplication: newApplication.toJSON(),
    }));
});
client.on('channelCreate', channel => {
    CamelBot.event('channelCreate', JSON.stringify(channel.toJSON()));
});
client.on('channelDelete', channel => {
    CamelBot.event('channelDelete', JSON.stringify(channel.toJSON()));
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    CamelBot.event('channelUpdate', JSON.stringify({
        oldChannel: oldChannel.toJSON(),
        newChannel: newChannel.toJSON(),
    }));
});
client.on('emojiCreate', emoji => {
    CamelBot.event('emojiCreate', JSON.stringify(emoji.toJSON()));
});
client.on('emojiDelete', emoji => {
    CamelBot.event('emojiDelete', JSON.stringify(emoji.toJSON()));
});
client.on('emojiUpdate', (oldEmoji, newEmoji) => {
    CamelBot.event('emojiUpdate', JSON.stringify({
        oldEmoji: oldEmoji.toJSON(),
        newEmoji: newEmoji.toJSON(),
    }));
});
client.on('guildBanAdd', (guild, user) => {
    CamelBot.event('guildBanAdd', JSON.stringify({
        guild: guild.toJSON(),
        user: user.toJSON(),
    }));
});
client.on('guildBanRemove', (guild, user) => {
    CamelBot.event('guildBanRemove', JSON.stringify({
        guild: guild.toJSON(),
        user: user.toJSON(),
    }));
});
client.on('guildCreate', guild => {
    CamelBot.event('guildCreate', JSON.stringify(guild.toJSON()));
});
client.on('guildDelete', guild => {
    CamelBot.event('guildDelete', JSON.stringify(guild.toJSON()));
});
client.on('guildEmojiCreate', (guild, emoji) => {
    CamelBot.event('guildEmojiCreate', JSON.stringify({
        guild: guild.toJSON(),
        emoji: emoji.toJSON(),
    }));
});
client.on('guildEmojiDelete', (guild, emoji) => {
    CamelBot.event('guildEmojiDelete', JSON.stringify({
        guild: guild.toJSON(),
        emoji: emoji.toJSON(),
    }));
});
client.on('guildEmojiUpdate', (guild, oldEmoji, newEmoji) => {
    CamelBot.event('guildEmojiUpdate', JSON.stringify({
        guild: guild.toJSON(),
        oldEmoji: oldEmoji.toJSON(),
        newEmoji: newEmoji.toJSON(),
    }));
});
client.on('guildMemberAdd', member => {
    CamelBot.event('guildMemberAdd', JSON.stringify(member.toJSON()));
});
client.on('guildMemberRemove', member => {
    CamelBot.event('guildMemberRemove', JSON.stringify(member.toJSON()));
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
    CamelBot.event('guildMemberUpdate', JSON.stringify({
        oldMember: oldMember.toJSON(),
        newMember: newMember.toJSON(),
    }));
});
client.on('guildRoleCreate', role => {
    CamelBot.event('guildRoleCreate', JSON.stringify(role.toJSON()));
});
client.on('guildRoleDelete', role => {
    CamelBot.event('guildRoleDelete', JSON.stringify(role.toJSON()));
});
client.on('guildRoleUpdate', (oldRole, newRole) => {
    CamelBot.event('guildRoleUpdate', JSON.stringify({
        oldRole: oldRole.toJSON(),
        newRole: newRole.toJSON(),
    }));
});
client.on('messageDelete', message => {
    CamelBot.event('messageDelete', JSON.stringify(message.toJSON()));
});
client.on('messageDeleteBulk', messages => {
    CamelBot.event('messageDeleteBulk', JSON.stringify(messages.toJSON()));
});
client.on('messageReactionAdd', (message, emoji, user) => {
    CamelBot.event('messageReactionAdd', JSON.stringify({
        message: message.toJSON(),
        emoji: emoji.toJSON(),
        user: user.toJSON(),
    }));
});
client.on('messageReactionRemove', (message, emoji, user) => {
    CamelBot.event('messageReactionRemove', JSON.stringify({
        message: message.toJSON(),
        emoji: emoji.toJSON(),
        user: user.toJSON(),
    }));
});
client.on('messageReactionRemoveAll', message => {
    CamelBot.event('messageReactionRemoveAll', JSON.stringify(message.toJSON()));
});
client.on('messageUpdate', (oldMessage, newMessage) => {
    CamelBot.event('messageUpdate', JSON.stringify({
        oldMessage: oldMessage.toJSON(),
        newMessage: newMessage.toJSON(),
    }));
});
client.on('presenceUpdate', (oldPresence, newPresence) => {
    CamelBot.event('presenceUpdate', JSON.stringify({
        oldPresence: oldPresence.toJSON(),
        newPresence: newPresence.toJSON(),
    }));
});
client.on('rateLimit', (rateLimitInfo, shardID) => {
    CamelBot.event('rateLimit', JSON.stringify({
        rateLimitInfo: rateLimitInfo.toJSON(),
        shardID: shardID,
    }));
});
client.on('ready', () => {
    CamelBot.event('ready', {});
    console.info('Discord Interface logged in as ' + client.user.tag);
});
client.on('reconnecting', () => {
    CamelBot.event('reconnecting', {});
});
client.on('resume', (replayedEvents, shardID) => {
    CamelBot.event('resume', JSON.stringify({
        replayedEvents: replayedEvents,
        shardID: shardID,
    }));
});
client.on('roleCreate', role => {
    CamelBot.event('roleCreate', JSON.stringify(role.toJSON()));
});
client.on('roleDelete', role => {
    CamelBot.event('roleDelete', JSON.stringify(role.toJSON()));
});
client.on('roleUpdate', (oldRole, newRole) => {
    CamelBot.event('roleUpdate', JSON.stringify({
        oldRole: oldRole.toJSON(),
        newRole: newRole.toJSON(),
    }));
});
client.on('shardDisconnect', (event, shardID) => {
    CamelBot.event('shardDisconnect', JSON.stringify({
        event: event,
        shardID: shardID,
    }));
});
client.on('shardError', (error, shardID) => {
    CamelBot.event('shardError', JSON.stringify({
        error: error,
        shardID: shardID,
    }));
});
client.on('shardReady', (shardID) => {
    CamelBot.event('shardReady', JSON.stringify({
        shardID: shardID,
    }));
});
client.on('shardReconnecting', (shardID) => {
    CamelBot.event('shardReconnecting', JSON.stringify({
        shardID: shardID,
    }));
});
client.on('shardResume', (replayedEvents, shardID) => {
    CamelBot.event('shardResume', JSON.stringify({
        replayedEvents: replayedEvents,
        shardID: shardID,
    }));
});
client.on('typingStart', (channel, user) => {
    CamelBot.event('typingStart', JSON.stringify({
        channel: channel.toJSON(),
        user: user.toJSON(),
    }));
});
client.on('userUpdate', (oldUser, newUser) => {
    CamelBot.event('userUpdate', JSON.stringify({
        oldUser: oldUser.toJSON(),
        newUser: newUser.toJSON(),
    }));
});
client.on('voiceStateUpdate', (oldMember, newMember) => {
    CamelBot.event('voiceStateUpdate', JSON.stringify({
        oldMember: oldMember.toJSON(),
        newMember: newMember.toJSON(),
    }));
});
client.on('warn', info => {
    CamelBot.event('warn', JSON.stringify(info));
});
client.on('webhookUpdate', (channel, oldWebhook, newWebhook) => {
    CamelBot.event('webhookUpdate', JSON.stringify({
        channel: channel.toJSON(),
        oldWebhook: oldWebhook.toJSON(),
        newWebhook: newWebhook.toJSON(),
    }));
});



// CameBot Core Events
CamelBot.on('send', (source, data) => {
    // All the types of packets are here
    // TODO make documentation for these
    switch (data.type) {
        case 'sendMessage': {
            console.debug('Sending ' + data.message + ' to Discord channel ' + data.channel);
            client.channels.cache.get(data.channel).send(data.message);
        }
    }
});
