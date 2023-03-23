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
      featuredSkinJSON = await cosmetics.getCosmeticJSON(FeaturedSkins[0].split(':')[1]);
    }
  }

  if (featuredSkinJSON.data.set != null) {
    console.log('Getting cosmetics from ' + featuredSkinJSON.data.set.value);
    skinSet = featuredSkinJSON.data.set.value;
  }

  var setJSON = await requests.getSetJSON(skinSet);

  // if setJSON is successful, get cosmetic list from it and assign it to a shop slot
  console.log("[Infinity Log] Starting set scrape");
  if (setJSON.status != 200) return console.log("Failed to get Cosmetic JSON");

  setJSON.data.forEach(async (cosmetic) => {
    switch (type.backendValue) {
      case "AthenaBackpack":
        if(Daily.length <= 5) {
          Daily.push("AthenaBackpack:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      case "AthenaCharacter": {
        if(Daily.length <= 1) {
          Featured.push("AthenaCharacter:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Featured is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaDance": {
        if(Daily.length <= 5) {
          Daily.push("AthenaDance:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaMusicPack": {
        if(Daily.length <= 5) {
          Daily.push("AthenaMusicPack:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaPetCarrier": {
        if(Daily.length <= 5) {
          Daily.push("AthenaPetCarrier:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaToy": {
        if(Daily.length <= 5) {
          Daily.push("AthenaToy:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaGlider": {
        if(Daily.length <= 5) {
          Daily.push("AthenaGlider:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaPickaxe": {
        if(Daily.length <= 5) {
          Daily.push("AthenaPickaxe:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaSkyDiveContrail": {
        if(Daily.length <= 5) {
          Daily.push("AthenaSkyDiveContrail:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaEmoji": {
        if(Daily.length <= 5) {
          Daily.push("AthenaEmoji:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaItemWrap": {
        if(Daily.length <= 5) {
          Daily.push("AthenaItemWrap:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaLoadingScreen": {
        if(Daily.length <= 5) {
          Daily.push("AthenaLoadingScreen:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      case "AthenaSpray": {
        if(Daily.length <= 5) {
          Daily.push("AthenaSpray:" + cosmetic.id);
        } else {
          console.log("[FortShop Warning] Daily is full, disregarding cosmetic");
        }
        break;
      }
      default: {
        console.log("[FortShop Warning] Unknown Cosmetic Type: " + type.backendValue);
      }
    }
  });
  console.log("[Infinity Log] Successfully completed!");

  // get prices

}


module.exports = {
  main
}