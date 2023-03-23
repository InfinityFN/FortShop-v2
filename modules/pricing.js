function getPrice(cosmetic, rarity) {
    switch (cosmetic.split(':')[0]) {
        case "AthenaCharacter": {
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
            break;
        }
        case "AthenaBackpack": {
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
            break;
        }
        case "AthenaDance": {
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
            break;
        }
        case "AthenaGlider": {
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
            break;
        }
        case "AthenaPickaxe": {
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
            break;
        }
        case "AthenaItemWrap": {
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
            break;
        }
        case "AthenaSkyDiveContrail": {
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
            break;
        }
        default: {
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
    }
}

module.exports = {
    getPrice
}