const MetadataFilter = require('./filter');

// Documentation
const ALL_FIELDS = MetadataFilter.ALL_FIELDS; // ['artist', 'track', 'album', 'albumArtist']

const exampleFilters = [MetadataFilter.removeRemastered];
const exampleFilterSet = {
  [ALL_FIELDS[0]]: exampleFilters,
  [ALL_FIELDS[1]]: exampleFilters,
  [ALL_FIELDS[2]]: exampleFilters,
}

// const exampleFilterSet = {
//   artist: exampleFilters,
//   album: exampleFilters,
// }

module.exports.clean = function (name, options = {}) {
  let filter = MetadataFilter.getDefaultFilter();

  filter = filter.extend(new MetadataFilter(exampleFilterSet));

  return MetadataFilter.removeRemastered(name).trim();
  return filter.filterField('album', name).trim();
}