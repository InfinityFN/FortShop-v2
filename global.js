const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const readline = require('readline');

const chapter = "1"; // The Chapter the backend is running on
const season = "X"; // The season the backend is running on

const bDiscordEnabled = true; // Sends Discord Embed of item shop refresh
const webhookUrl = 'https://discord.com/api/webhooks/1087872131410436136/xgxASiQkIeJIlMbenAgXvtRvnQffPqzYkONi_-pqu3nR2tuscuZsXTrBxek1AgQTqMTL'; // Discord Webhook URL (if Discord Embed Sending is enabled)


module.exports = {
  chapter,
  season,
  bDiscordEnabled,
  webhookUrl
};