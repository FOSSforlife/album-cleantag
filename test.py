#!/usr/bin/env python3
import json
import cleantag

albumName = 'Monolord - Vaenir'

with open('sampleSuffixes.json') as f:
    unwantedSuffixes = json.load(f)

formats = [
    lambda name, suffix: '{0} ({1})'.format(name, suffix),
    lambda name, suffix: '{0} [{1}]'.format(name, suffix),
    lambda name, suffix: '{0} ({1} ({1}))'.format(name, suffix),
    lambda name, suffix: '{0} ({1} [{1}])'.format(name, suffix),
    lambda name, suffix: '{0} [{1} ({1})]'.format(name, suffix),
    lambda name, suffix: '{0} [{1} [{1}]]'.format(name, suffix),
    lambda name, suffix: '{0} - {1}'.format(name, suffix),
]

for addSuffix in formats:
    for suffix in unwantedSuffixes:
        albumWithSuffix = addSuffix(albumName, suffix)
        print('Testing', albumWithSuffix)
        assert cleantag.clean(albumWithSuffix) == albumName

# exclude flags
assert cleantag.clean('ObZen (anniversary edition)', {'excludeRedFlags': ['anniversary', 'edition']}) == 'ObZen'
print('options.excludeRedFlags works')

assert cleantag.clean('ObZen (delux)', {'customRedFlags': ['delux']}) == 'ObZen'
print('options.excludeRedFlags works')

print('All tests succeeded')