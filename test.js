const cleantag = require('./index');
let albumName = 'Godflesh - Post Self - sdf - sdf - sdf - - Remastered';
albumName = cleantag.clean(albumName);

console.log(albumName); // Godflesh - Post Self