const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const scripts = require('./scripts/index');
const config = require('./config');

console.log("Welcome to FortShop v2 (created by ctrlkohl)!");
console.log("1) Run Script");
console.log("2) View Cosmetic");

config.rl.question('Option: ', (option) => {
    if (option == "1" || option == 1) {
        scripts.index();
    } else {
        SendAlarm();
    }
});