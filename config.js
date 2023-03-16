const readline = require('readline');

// if we should log anything
const isDebug = true;

// where it should go
const host = "";

// what is the endpoint
const endpoint = "";

// if it should send to backend
const sendToBackend = false;

// enable discord webhook msg
const sendWebhook = false;

// webhook url
const webhookUrl = "https://discord.com/api/webhooks/1084651314102927451/1hQ3z31TDO7hb-xjuaPpEUycHKELrR-it2vpFBTOH0PuWkHN9SD4nwogbZqGaNAbwsnb";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

module.exports = {
    isDebug,
    host,
    endpoint,
    sendWebhook,
    webhookUrl,
    rl,
    sendToBackend
}