const assert = require('assert');
const fs = require('fs');
const cleantag = require('./cleantag');

let albumName = 'Converge - Jane Doe';

let unwantedSuffixes = JSON.parse(fs.readFileSync('./sampleSuffixes.json'));

let formats = [
    (name, suffix) => `${name} (${suffix})`,
    (name, suffix) => `${name} [${suffix}]`,
    (name, suffix) => `${name} (${suffix} (${suffix}))`,
    (name, suffix) => `${name} (${suffix} [${suffix}])`,
    (name, suffix) => `${name} [${suffix} (${suffix})]`,
    (name, suffix) => `${name} [${suffix} [${suffix}]`,
    (name, suffix) => `${name} - ${suffix}`,
]

formats.forEach(addSuffix => {
    unwantedSuffixes.forEach(suffix => {
        let albumWithSuffix = addSuffix(albumName, suffix); 
        console.log(`Testing ${albumWithSuffix}`);
        assert.strictEqual(cleantag.clean(albumWithSuffix), albumName);
    });
});

// exclude flags
assert.strictEqual(cleantag.clean('Starspawn (anniversary edition)', {excludeRedFlags: ['anniversary', 'edition']}), 'Starspawn (anniversary edition)');
console.log('options.excludeRedFlags works');

assert.strictEqual(cleantag.clean('Starspawn (delux)', {customRedFlags: ['delux']}), 'Starspawn');
console.log('options.customRedFlags works');

console.log('All tests succeeded');