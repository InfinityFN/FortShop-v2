function GetSkinPrice(rarity) {
    // Common (Uncommon, Rare, Epic, Legendary)
    var prices = ["800", "900", "1,200", "1,500", "2,000"];

    switch (rarity) {
        case "Uncommon": {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
        case "Rare": {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
        case "Epic": {
            const intPrice = parseInt(prices[3].replace(/,/g, ''));
            return intPrice;
        }
        case "Legendary": {
            const intPrice = parseInt(prices[4].replace(/,/g, ''));
            return intPrice;
        }
        default: {
            const intPrice = parseInt(prices[4].replace(/,/g, ''));
            return intPrice;
        }
    }
}

function GetBackblingPrice(rarity) {
    // Common (Uncommon, Rare), Epic, Legendary
    var prices = ["200", "400"];

    switch (rarity) {
        case "Uncommon": {
            const intPrice = parseInt(prices[0].replace(/,/g, ''));
            return intPrice;
        }
        case "Rare": {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
        default: {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
    }
}

function GetEmotePrice(rarity) {
    // Common Uncommon, (Rare, Epic), Legendary
    var prices = ["200", "500", "800"];

    switch (rarity) {
        case "Uncommon": {
            const intPrice = parseInt(prices[0].replace(/,/g, ''));
            return intPrice;
        }
        case "Rare": {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
        case "Epic": {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
        default: {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
    }
}

function GetGliderPrice(rarity) {
    // Common (Uncommon, Rare, Epic, Legendary)
    var prices = ["300", "500", "1,200"];

    switch (rarity) {
        case "Uncommon": {
            const intPrice = parseInt(prices[0].replace(/,/g, ''));
            return intPrice;
        }
        case "Rare": {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
        case "Epic": {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
        default: {
            const intPrice = parseInt(prices[0].replace(/,/g, ''));
            return intPrice;
        }
    }
}

function GetPickaxePrice(rarity) {
    // Common (Uncommon, Rare, Epic, Legendary)
    var prices = ["500", "800", "1,200", "1,500"];

    switch (rarity) {
        case "Uncommon": {
            const intPrice = parseInt(prices[0].replace(/,/g, ''));
            return intPrice;
        }
        case "Rare": {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
        case "Epic": {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
        case "Legendary": {
            const intPrice = parseInt(prices[3].replace(/,/g, ''));
            return intPrice;
        }
        default: {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
    }
}

function GetWrapPrice(rarity) {
    // Common Uncommon, (Rare, Epic), Legendary
    var prices = ["200", "500", "800"];

    switch (rarity) {
        case "Uncommon": {
            const intPrice = parseInt(prices[0].replace(/,/g, ''));
            return intPrice;
        }
        case "Rare": {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
        case "Epic": {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
        default: {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
    }
}

function GetTrailPrice(rarity) {
    // Common Uncommon, (Rare, Epic), Legendary
    var prices = ["200", "500", "800"];

    switch (rarity) {
        case "Uncommon": {
            const intPrice = parseInt(prices[0].replace(/,/g, ''));
            return intPrice;
        }
        case "Rare": {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
        case "Epic": {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
        default: {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
    }
}

function GetRandPrice(rarity) {
    // Common Uncommon, (Rare, Epic), Legendary
    var prices = ["100", "200", "500", "800", "1,200"];

    switch (rarity) {
        case "Common": {
            const intPrice = parseInt(prices[0].replace(/,/g, ''));
            return intPrice;
        }
        case "Uncommon": {
            const intPrice = parseInt(prices[1].replace(/,/g, ''));
            return intPrice;
        }
        case "Rare": {
            const intPrice = parseInt(prices[2].replace(/,/g, ''));
            return intPrice;
        }
        case "Epic": {
            const intPrice = parseInt(prices[3].replace(/,/g, ''));
            return intPrice;
        }
        default: {
            const intPrice = parseInt(prices[4].replace(/,/g, ''));
            return intPrice;
        }
    }
}

module.exports = {
  GetRandPrice,
  GetBackblingPrice,
  GetEmotePrice,
  GetGliderPrice,
  GetPickaxePrice,
  GetSkinPrice,
  GetTrailPrice,
  GetWrapPrice
}