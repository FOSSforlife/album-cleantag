# Album CleanTag
CleanTag is an npm/python module that uses regex to remove common unnecessary words from album and song tags, such as '(remastered)', '[deluxe edition]', etc.

This can be used to help make Last.fm scrobbling and library management more organized.

## Usage
```
const cleantag = require('cleantag');

let albumName = 'Godflesh - Post Self (Remastered)';
albumName = cleantag.clean(albumName);

console.log(albumName); // Godflesh - Post Self

```

## Pattern Matching
The regex pattern I used is: `(\(|\[|- ) (remastered|explicit|...) (\)|\])?(\)|\])?`
This will catch the three following patterns:
- Title (suffix)
- Title [suffix]
- Title (suffix (suffix))
- Title (suffix [suffix])
- Title [suffix (suffix)]
- Title [suffix [suffix]]
- Title - suffix

The list of suffixes (38 as of 1/8/19) can be found in [https://github.com/FOSSforlife/album-cleantag/blob/master/suffixes.json](suffixes.json). Suffix checking is case-sensitive, so (deluxe), (Deluxe), and (DELUXE) will all be filtered.

## Examples
Input: 'Moving Pictures (2011 Remaster)'
Output: 'Moving Pictures'

Input: 'All We Love We Leave Behind [Deluxe Edition]'
Output: 'All We Love We Leave Behind'

Input: 'Disintegration (Deluxe Edition [Remastered])'
Output: 'Disintegration'