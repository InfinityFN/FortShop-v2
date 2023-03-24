const path = require('path');
const fs = require('fs');
const moment = require('moment');
const axios = require('axios');
const cosmetics = require('../modules/random');
const requests = require('../modules/requests');
const date = require('../modules/date');

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

  console.log(setJSON);

  setJSON.data.forEach(async (cosmetic) => {
    //console.log(cosmetic);
    switch (cosmetic.type.backendValue) {
      case "AthenaBackpack":
        Daily.push("AthenaBackpack:" + cosmetic.id);
        break;
      case "AthenaCharacter": {
        Featured.push("AthenaCharacter:" + cosmetic.id);
        break;
      }
      case "AthenaDance": {
        Daily.push("AthenaDance:" + cosmetic.id);
        break;
      }
      case "AthenaMusicPack": {
        Daily.push("AthenaMusicPack:" + cosmetic.id);
        break;
      }
      case "AthenaPetCarrier": {
        Daily.push("AthenaPetCarrier:" + cosmetic.id);
        break;
      }
      case "AthenaToy": {
        Daily.push("AthenaToy:" + cosmetic.id);
        break;
      }
      case "AthenaGlider": {
        Daily.push("AthenaGlider:" + cosmetic.id);
        break;
      }
      case "AthenaPickaxe": {
        Daily.push("AthenaPickaxe:" + cosmetic.id);
        break;
      }
      case "AthenaSkyDiveContrail": {
        Daily.push("AthenaSkyDiveContrail:" + cosmetic.id);
        break;
      }
      case "AthenaEmoji": {
        Daily.push("AthenaEmoji:" + cosmetic.id);
        break;
      }
      case "AthenaItemWrap": {
        Daily.push("AthenaItemWrap:" + cosmetic.id);
        break;
      }
      case "AthenaLoadingScreen": {
        Daily.push("AthenaLoadingScreen:" + cosmetic.id);
        break;
      }
      case "AthenaSpray": {
        Daily.push("AthenaSpray:" + cosmetic.id);
        break;
      }
      default: {
        console.log("[FortShop Warning] Unknown Cosmetic Type: " + type.backendValue);
      }
    }
  });
  console.log("[Infinity Log] Successfully completed!");

  console.log(Featured);
  console.log(Daily);

  var featured1string;
  var featured2string;

  if (!Featured[0]) {
    Featured[0] = cosmetics.getRandomSkins()[0];
    featured1string = Featured[0].split(':')[1];
  } else {
    featured1string = Featured[0].split(':')[1];
  }

  if (!Featured[1]) {
    Featured[1] = cosmetics.getRandomSkins()[0];
    featured2string = Featured[1].split(':')[1];
  } else {
    featured2string = Featured[1].split(':')[1];
  }

  var daily1string;
  var daily2string;
  var daily3string;
  var daily4string;
  var daily5string;
  var daily6string;

  if (!Daily[0]) {
    Daily[0] = cosmetics.getRandomPickaxes()[0];
    daily1string = Daily[0].split(':')[1];
  } else {
    daily1string = Daily[0].split(':')[1];
  }

  if (!Daily[1]) {
    Daily[1] = cosmetics.getRandomBackblings()[0];
    daily2string = Daily[1].split(':')[1];
  } else {
    daily2string = Daily[1].split(':')[1];
  }

  if (!Daily[2]) {
    Daily[2] = cosmetics.getRandomBackblings()[0];
    daily3string = Daily[2].split(':')[1];
  } else {
    daily3string = Daily[2].split(':')[1];
  }

  if (!Daily[3]) {
    Daily[3] = cosmetics.getRandomWraps()[0];
    daily4string = Daily[3].split(':')[1];
  } else {
    daily4string = Daily[3].split(':')[1];
  }

  if (!Daily[4]) {
    Daily[4] = cosmetics.getRandomItem()[0];
    daily5string = Daily[4].split(':')[1];
  } else {
    daily5string = Daily[4].split(':')[1];
  }

  if (!Daily[5]) {
    Daily[5] = cosmetics.getRandomItem()[0];
    daily6string = Daily[5].split(':')[1];
  } else {
    daily6string = Daily[5].split(':')[1];
  }

  // get prices
  const prices = require('../modules/pricing');

  // TODO: Rip prices right from fortnite
  var featured1CharacterJSON = await requests.getCosmeticJSON(featured1string);
  var featured2CharacterJSON = await requests.getCosmeticJSON(featured2string);

  var daily1CharacterJSON = await requests.getCosmeticJSON(daily1string);
  var daily2CharacterJSON = await requests.getCosmeticJSON(daily2string);
  var daily3CharacterJSON = await requests.getCosmeticJSON(daily3string);
  var daily4CharacterJSON = await requests.getCosmeticJSON(daily4string);
  var daily5CharacterJSON = await requests.getCosmeticJSON(daily5string);
  var daily6CharacterJSON = await requests.getCosmeticJSON(daily6string);


  var featured1a = { id: Featured[0], price: prices.getPrice(Featured[0], featured1CharacterJSON.data.rarity.displayValue) };
  var featured2a = { id: Featured[1], price: prices.getPrice(Featured[1], featured2CharacterJSON.data.rarity.displayValue) };

  var daily1a = { id: Daily[0], price: prices.getPrice(Daily[0], daily1CharacterJSON.data.rarity.displayValue) };
  var daily2a = { id: Daily[1], price: prices.getPrice(Daily[1], daily2CharacterJSON.data.rarity.displayValue) };
  var daily3a = { id: Daily[2], price: prices.getPrice(Daily[2], daily3CharacterJSON.data.rarity.displayValue) };
  var daily4a = { id: Daily[3], price: prices.getPrice(Daily[3], daily4CharacterJSON.data.rarity.displayValue) };
  var daily5a = { id: Daily[4], price: prices.getPrice(Daily[4], daily5CharacterJSON.data.rarity.displayValue) };
  var daily6a = { id: Daily[5], price: prices.getPrice(Daily[5], daily6CharacterJSON.data.rarity.displayValue) };

  var shop = require('../templates/shop').getShopJSON(featured1a, featured2a, daily1a, daily2a, daily3a, daily4a, daily5a, daily6a, date.getRefreshDate());

  const embed = {
    title: 'New Item Shop!',
    description: "Infinity's Item shop has been reset! here is a overview of all of the new items! *Testing FortShop v2*",
    color: 0x98f000, // Hex color code
    fields: [
      {
        name: `${featured1CharacterJSON.data.name}:`,
        value: `Vbucks: ${featured1a.price}\nDescription: ${featured1CharacterJSON.data.description}`,
        inline: true,
      },
      {
        name: `${featured2CharacterJSON.data.name}`,
        value: `Vbucks: ${featured2a.price}\nDescription: ${featured2CharacterJSON.data.description}`,
        inline: true,
      },
      {
        name: `${daily1CharacterJSON.data.name}`,
        value: `Vbucks: ${daily1a.price}\nDescription: ${daily1CharacterJSON.data.description}`,
        inline: true,
      },
      {
        name: `${daily2CharacterJSON.data.name}`,
        value: `Vbucks: ${daily2a.price}\nDescription: ${daily2CharacterJSON.data.description}`,
        inline: true,
      },
      {
        name: `${daily3CharacterJSON.data.name}`,
        value: `Vbucks: ${daily3a.price}\nDescription: ${daily3CharacterJSON.data.description}`,
        inline: true,
      },
      {
        name: `${daily4CharacterJSON.data.name}`,
        value: `Vbucks: ${daily4a.price}\nDescription: ${daily4CharacterJSON.data.description}`,
        inline: true,
      },
      {
        name: `${daily5CharacterJSON.data.name}`,
        value: `Vbucks: ${daily5a.price}\nDescription: ${daily5CharacterJSON.data.description}`,
        inline: true,
      },
      {
        name: `${daily6CharacterJSON.data.name}`,
        value: `Vbucks: ${daily6a.price}\nDescription: ${daily6CharacterJSON.data.description}`,
        inline: true,
      }
    ],
    timestamp: new Date().toISOString(),
  };

  require('../modules/discord').sendEmbedJson(embed);
  fs.writeFileSync(path.join(__dirname, '../output/shop.json'), JSON.stringify(shop, null, 2));
  console.log('success!');


}


module.exports = {
  main
}