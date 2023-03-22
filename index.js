const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to Kohl's Item Shop Generator!");
console.log("1) Auto-Generate Item shop");
console.log("2) Manual Generate Item shop");
console.log("3) Execute Custom Script");

rl.question('Option: ', async (option) => {
    switch(parseInt(option)) {
      case 1:
        const autoGenScript = require('./scripts/autoGenerateItemShop');
        autoGenScript.main();
        break;
    }
    rl.close();
});