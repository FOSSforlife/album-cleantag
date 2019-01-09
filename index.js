const fs = require('fs');

let unwantedSuffixes = JSON.parse(fs.readFileSync('./suffixes.json'));
unwantedSuffixes = '(' + unwantedSuffixes.join('|') + ')';

let regex = new RegExp('(\\(|\\[|- )' + unwantedSuffixes + '(\\)|\\])?(\\)|\\])?', 'gi');

module.exports.clean = function (name) {
    return name.replace(regex, '').trim();
};