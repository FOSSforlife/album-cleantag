const fs = require('fs');

let redFlags = 'bonus|deluxe|edition|expanded|explicit|remaster|version';

let regex = new RegExp('(\\(|\\[)(.*)(' + redFlags + ')(.*)(\\)|\\])(\\)|\\])?', 'gi');
let regex2 = new RegExp('(- )(.*)(' + redFlags + ')(.*)', 'gi');

module.exports.clean = function (name) {
    // filters parentheses and brackets
    name = name.replace(regex, '');

    // searches for hyphens (e.g. 'Title - Remastered')
    if(name.match(/-/g) === null) {
        return name;
    }
    else {
        if(name.match(/-/g).length === 1) {
            return name.replace(regex2, '').trim();
        }
        else {
            const lastHyphen = name.lastIndexOf('-');
            const firstBit = name.substring(0, lastHyphen);
            return firstBit + name.substr(lastHyphen).replace(regex2, '').trim();
        }
    }
    
};