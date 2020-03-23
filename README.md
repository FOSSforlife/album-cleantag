**V3 UPDATE**: This library is currently being rewritten from scratch to utilize the filters from [WebScrobbler](https://github.com/web-scrobbler/web-scrobbler) instead of using my own regex. This will result in a more robust filtering system. (The Python version will still use the regex for now.)

# Album CleanTag
CleanTag is an npm/python module that uses regex to remove common unnecessary words from album and song tags, such as '(remastered)', '[deluxe edition]', etc.

This can be used to help make Last.fm scrobbling and library management more organized.


## Pattern Matching
The program looks at the input string and detects any common unnecessary words (red flags) that are in the suffix of the string, formatted as such:
- Title (suffix)
- Title [suffix]
- Title (suffix (suffix))
- Title (suffix [suffix])
- Title [suffix (suffix)]
- Title [suffix [suffix]]
- Title - suffix

The "red flags" it searches for include: 'anniversary', 'bonus', 'deluxe', 'edition', 'expanded', 'explicit', 'reissue', 'remaster', 'version'. If a suffix contains one or more of these, the entire suffix is deleted.

For example, if you give it `Swans - Filth (Deluxe Version)`, it will return `Swans - Filth`.


## Usage

### Node
Install using npm:
```
npm i album-cleantag
```


```
const cleantag = require('album-cleantag');

let albumName = 'Godflesh - Post Self (Remastered)';
albumName = cleantag.clean(albumName);

console.log(albumName); // Godflesh - Post Self
```

### Python
Python users can download the cleantag.py file and use it in your code:
```
import cleantag

print(cleantag.clean('Yeezus (Explicit Version)')) # Yeezus
```

### Options
The options object can be passed to the second parameter. It can contain the following parameters:
```
const options = {
    addRedFlags: // add red flags to the list
    excludeRedFlags: // remove red flags from the list
    customRedFlags: // replace my red flags with your own list (don't use with the other two options)
}

cleantag.clean(albumName, options);
```
