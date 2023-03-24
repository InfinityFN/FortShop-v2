const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');

function getRefreshDate() {
    // Get today's date
    const today = moment();

    // Add one day to today's date
    const tomorrow = today.add(1, 'day');

    // Format tomorrow's date in ISO 8601 format
    const isoDate = tomorrow.format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z';

    //console.log(isoDate);
    return isoDate;
}

module.exports = {
    getRefreshDate
}