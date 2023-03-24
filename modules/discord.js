const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');

function sendEmbedJson(embed) {
    const config = require('../global');

    if (config.bDiscordEnabled == true) {
        axios.post(config.webhookUrl, { embeds: [embed] })
            .then(() => console.log('Embed sent successfully!'))
            .catch((error) => console.error('Error sending embed:', error));
    } else {
        console.log('[Discord] Discord Embed is disabled, skipping');
    }
}

module.exports = {
    sendEmbedJson
}