const cleantag = require('./index');
let albumName = 'Godflesh - Post Self (Remastered)';
albumName = cleantag.clean(albumName);

console.log(albumName); // Godflesh - Post Self