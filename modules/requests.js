const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');

async function getCosmeticJSON(cosmetic) {
    const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/${cosmetic}`);
    const data = response.data;
    var JsonString = JSON.stringify(data, null, 2);

    return JSON.parse(JsonString, null, 2);
}

async function getSetJSON(set) {
    const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/?set=${set}`);
    const data = response.data;
    var JsonString = JSON.stringify(data, null, 2);

    return JSON.parse(JsonString, null, 2);
}

module.exports = {
  getCosmeticJSON,
  getSetJSON
}