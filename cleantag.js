module.exports.clean = function (name, options = {}) {
    let redFlags = ['anniversary', 'bonus', 'deluxe', 'edition', 'expanded', 'explicit', 'reissue', 'remaster', 'version'];

    if(options.customRedFlags) {
        redFlags = options.customRedFlags;
    }
    else {
        if(options.excludeRedFlags) {
            redFlags = redFlags.filter(f => options.excludeRedFlags.indexOf(f) === -1);
        }
        if(options.addRedFlags) {
            redFlags = redFlags.concat(options.addRedFlags);
        }
    } 

    redFlags =  '(' + redFlags.join('|') + ')';
    let bracketsRegex = new RegExp('(\\(|\\[)(.*)' + redFlags + '(.*)(\\)|\\])(\\)|\\])?', 'gi');
    let hyphenRegex = new RegExp('(- )(.*)' + redFlags + '(.*)', 'gi');

    // filters parentheses and brackets
    name = name.replace(bracketsRegex, '');

    if(name.indexOf('-') !== -1) {
        if(name.indexOf('-') === name.lastIndexOf('-')) {
            name = name.replace(hyphenRegex, '');
        }
        else {
            // if multiple hyphens, only checks the phrase after the last hyphen
            const lastHyphen = name.lastIndexOf('-');
            const firstBit = name.substring(0, lastHyphen);
            name = firstBit + name.substr(lastHyphen).replace(hyphenRegex, '');
        }
    }
    return name.trim();
};