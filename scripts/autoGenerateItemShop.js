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
  const prices = require('../modules/pricing');

  // TODO: Rip prices right from fortnite
  var featured1CharacterJSON = await requests.getCosmeticJSON(Featured[0].split(':')[1]);
  var featured2CharacterJSON = await requests.getCosmeticJSON(Featured[1].split(':')[1]);

  var daily1CharacterJSON = await requests.getCosmeticJSON(Daily[0].split(':')[1]);
  var daily2CharacterJSON = await requests.getCosmeticJSON(Daily[1].split(':')[1]);
  var daily3CharacterJSON = await requests.getCosmeticJSON(Daily[2].split(':')[1]);
  var daily4CharacterJSON = await requests.getCosmeticJSON(Daily[3].split(':')[1]);
  var daily5CharacterJSON = await requests.getCosmeticJSON(Daily[4].split(':')[1]);
  var daily6CharacterJSON = await requests.getCosmeticJSON(Daily[5].split(':')[1]);


  var featured1a = {id: Featured[0], price: prices.getPrice(Featured[0], featured1CharacterJSON.data.rarity.displayValue)};
  var featured2a = {id: Featured[1], price: prices.getPrice(Featured[1], featured2CharacterJSON.data.rarity.displayValue)};

  var daily1a = {id: Daily[0], price: prices.getPrice(Daily[0], daily1CharacterJSON.data.rarity.displayValue)};
  var daily2a = {id: Daily[1], price: prices.getPrice(Daily[1], daily2CharacterJSON.data.rarity.displayValue)};
  var daily3a = {id: Daily[2], price: prices.getPrice(Daily[2], daily3CharacterJSON.data.rarity.displayValue)};
  var daily4a = {id: Daily[3], price: prices.getPrice(Daily[3], daily4CharacterJSON.data.rarity.displayValue)};
  var daily5a = {id: Daily[4], price: prices.getPrice(Daily[4], daily5CharacterJSON.data.rarity.displayValue)};
  var daily6a = {id: Daily[5], price: prices.getPrice(Daily[5], daily6CharacterJSON.data.rarity.displayValue)};

  var shop = require('../templates/shop').getShopJSON(featured1a, featured2a, daily1a, daily2a, daily3a, daily4a, daily5a, daily6a);

  fs.writeFileSync(path.join(__dirname, '../output/shop.json'), JSON.stringify(shop, null, 2));
  console.log('success!');
}


module.exports = {
  main
}