const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const config = require('../config');
const cosmetics = require('../modules/cosmetics');

function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getCosmeticJSON(cosmetic) {
    const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/${cosmetic}`);
    const data = response.data;
    var JsonString = JSON.stringify(data, null, 2);

    return JSON.parse(JsonString, null, 2);
}

async function start() {
    
}

module.exports = {
    start
}