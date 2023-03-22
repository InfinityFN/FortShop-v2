const cosmetics = require('./cosmetics.js');
function getEmotes() {
    const randomIndex1 = Math.floor(Math.random() * cosmetics.emotes.length);
    let randomIndex2 = Math.floor(Math.random() * cosmetics.emotes.length);

    // Make sure the second index is different from the first
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * cosmetics.emotes.length);
    }

    return [cosmetics.emotes[randomIndex1], cosmetics.emotes[randomIndex2]];
}

function getRandomSkins() {
    const randomIndex1 = Math.floor(Math.random() * cosmetics.skins.length);
    let randomIndex2 = Math.floor(Math.random() * cosmetics.skins.length);

    // Make sure the second index is different from the first
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * cosmetics.skins.length);
    }

    return [cosmetics.skins[randomIndex1], cosmetics.skins[randomIndex2]];
}

function getRandomBackblings() {
    const randomIndex1 = Math.floor(Math.random() * cosmetics.backblings.length);
    let randomIndex2 = Math.floor(Math.random() * cosmetics.backblings.length);

    // Make sure the second index is different from the first
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * cosmetics.backblings.length);
    }

    return [cosmetics.backblings[randomIndex1], cosmetics.backblings[randomIndex2]];
}

function getRandomPickaxes() {
    const randomIndex1 = Math.floor(Math.random() * cosmetics.pickaxes.length);
    let randomIndex2 = Math.floor(Math.random() * cosmetics.pickaxes.length);

    // Make sure the second index is different from the first
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * cosmetics.pickaxes.length);
    }

    return [cosmetics.pickaxes[randomIndex1], cosmetics.pickaxes[randomIndex2]];
}

function getRandomGliders() {
    const randomIndex1 = Math.floor(Math.random() * cosmetics.gliders.length);
    let randomIndex2 = Math.floor(Math.random() * cosmetics.gliders.length);

    // Make sure the second index is different from the first
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * cosmetics.gliders.length);
    }

    return [cosmetics.gliders[randomIndex1], cosmetics.gliders[randomIndex2]];
}

function getRandomWraps() {
    const randomIndex1 = Math.floor(Math.random() * cosmetics.wraps.length);
    let randomIndex2 = Math.floor(Math.random() * cosmetics.wraps.length);

    // Make sure the second index is different from the first
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * cosmetics.wraps.length);
    }

    return [cosmetics.wraps[randomIndex1], cosmetics.wraps[randomIndex2]];
}

function getRandomTrails() {
    const randomIndex1 = Math.floor(Math.random() * cosmetics.trails.length);
    let randomIndex2 = Math.floor(Math.random() * cosmetics.trails.length);

    // Make sure the second index is different from the first
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * cosmetics.trails.length);
    }

    return [cosmetics.trails[randomIndex1], cosmetics.trails[randomIndex2]];
}

function getRandomItem() {
    const randomIndex1 = Math.floor(Math.random() * cosmetics.rand.length);
    let randomIndex2 = Math.floor(Math.random() * cosmetics.rand.length);

    // Make sure the second index is different from the first
    while (randomIndex2 === randomIndex1) {
        randomIndex2 = Math.floor(Math.random() * cosmetics.rand.length);
    }

    return [cosmetics.rand[randomIndex1], cosmetics.rand[randomIndex2]];
}

module.exports = {
  getRandomItem,
  getRandomTrails,
  getRandomWraps,
  getRandomGliders,
  getRandomPickaxes,
  getRandomBackblings,
  getRandomSkins,
  getEmotes
}