const { model, Schema } = require('mongoose');

module.exports = model('GuildSchema',
    new Schema({
        guildId: { type: String, required: true },
    })
);
