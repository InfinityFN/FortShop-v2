// this script will remove all c2 and above scripts <3
const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const readline = require('readline');
const cosmetics = require('../modules/cosmetics');
const FortLog = require('../modules/console');

async function getChapter(cosmetic) {
    const response = await axios.get(`https://fortnite-api.com/v2/cosmetics/br/${cosmetic}`);
    const data = response.data;
    await console.log(data);
    var JsonString = JSON.stringify(data, null, 2);

    return JSON.parse(JsonString, null, 2);
}


async function start() {
    console.clear();
    console.log('everything that is c2+ will appear in the log!');

    // loop through skins
    cosmetics.skins.forEach(async (skin) => {
        console.log(skin.split(':')[1]);
        var chapter = await getChapter(skin.split(':')[1]);
        if(chapter.data.introduction.chapter != "1") {
            FortLog.warning(skin + " is not a valid c1 cosmetic");
        }
    });

    // loop through backblings
    cosmetics.backblings.forEach(async (backbling) => {
        console.log('testing ' + backbling.split(':')[1]);
        var chapter = await getChapter(backbling.split(':')[1]);
        if(chapter.introduction.chapter != "1") {
            FortLog.warning(backbling + " is not a valid c1 cosmetic");
        }
    });

    // loop through gliders
    cosmetics.gliders.forEach(async (glider) => {
        console.log('testing ' + glider.split(':')[1]);
        var chapter = await getChapter(glider.split(':')[1]);
        if(chapter.data.introduction.chapter != "1") {
            FortLog.warning(glider + " is not a valid c1 cosmetic");
        }
    });

    // loop through emotes
    cosmetics.emotes.forEach(async (emote) => {
        console.log('testing ' + emote.split(':')[1]);
        var chapter = await getChapter(emote.split(':')[1]);
        if(chapter.data.introduction.chapter != "1") {
            FortLog.warning(emote + " is not a valid c1 cosmetic");
        }
    });
    
    // loop through wraps
    cosmetics.wraps.forEach(async (wrap) => {
        console.log('testing ' + wrap.split(':')[1]);
        var chapter = await getChapter(wrap.split(':')[1]);
        if(chapter.data.introduction.chapter != "1") {
            FortLog.warning(wrap + " is not a valid c1 cosmetic");
        }
    });

    // loop through pickaxes
    cosmetics.pickaxes.forEach(async (pickaxe) => {
        console.log('testing ' + pickaxe.split(':')[1]);
        var chapter = await getChapter(pickaxe.split(':')[1]);
        if(chapter.data.introduction.chapter != "1") {
            FortLog.warning(pickaxe + " is not a valid c1 cosmetic");
        }
    });

    // loop through trails
    cosmetics.trails.forEach(async (trail) => {
        console.log('testing ' + trail.split(':')[1]);
        var chapter = await getChapter(trail.split(':')[1]);
        if(chapter.data.introduction.chapter != "1") {
            FortLog.warning(trail + " is not a valid c1 cosmetic");
        }
    });
    
    console.log('finished!');
}

module.exports = {
    start
}