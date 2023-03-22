const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = rl;