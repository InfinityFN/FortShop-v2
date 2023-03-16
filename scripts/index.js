const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const config = require('../config');

function index() {
    console.clear();

    console.log("What script would you like to run?");
    console.log("1) Remove All C2+ Cosmetics");
    console.log("2) Item Shop Generator");

    config.rl.question('Option: ', (option) => {
        if (option == "1" || option == 1) {
            require('./removeAllNewCosmetics').start();
        } else {
            SendAlarm();
        }
        //rl.close();
    });
}

module.exports = {
    index
}
