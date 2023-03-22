const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const cosmetics = require('../modules/cosmetics');
const requests = rqeuire('../modules/requests');

async function main() {
  // USE FeaturedSkins[0].split(':')[1] (FeaturedSkins[1].split(':')[1] is backup)
  var FeaturedSkins = cosmetics.getRandomSkins();
  var featuredSkinJSON = await requests.getCosmeticJSON(FeaturedSkins[0].split(':')[1]);
  var skinSet = "";

  var Featured = [];
  var Daily = [];

  if (featuredSkinJSON.data.introduction.chapter) {
    if (featuredSkinJSON.data.introduction.chapter != "1") {
      console.log("This cosmetic is not chapter 1: " + FeaturedSkins[0]);
      FeaturedSkins[0] = FeaturedSkins[1];
      daily1json = await cosmetics.getCosmeticJSON(FeaturedSkins[0].split(':')[1]);
    }
  }

  if(featuredSkinJSON.data.set != null) {
    console.log('Getting cosmetics from ' + featuredSkinJSON.data.set.value);
    skinSet = featuredSkinJSON.data.set.value;
  }
  
  var setJSON = await requests.getSetJSON(skinSet);

  // if setJSON is successful, get cosmetic list from it and assign it to a shop slot
  if(setJSON.status == 200) {
    setJSON.data.forEach(async (cosmetic) =>{
      switch(type.backendValue) {
        case "AthenaBackpack":
            Daily.push("AthenaBackpack:" + cosmetic.id);
          break;
      }
    });
  }
}


module.exports = {
  main
}