# Album CleanTag
CleanTag is an npm module that uses regex to remove common unnecessary words from album and song tags, such as '(remastered)', '[deluxe edition]', etc.

This can be used to help make Last.fm scrobbling and library management more organized.

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

The list of suffixes can be found in suffixes.json. Suffix checking is case-sensitive, so (deluxe), (Deluxe), and (DELUXE) will all be filtered.

## Examples
Input: 'Moving Pictures (2011 Remaster)'
Output: 'Moving Pictures'

Input: 'All We Love We Leave Behind [Deluxe Edition]'
Output: 'All We Love We Leave Behind'

Input: 'Disintegration (Deluxe Edition [Remastered])'
Output: 'Disintegration'