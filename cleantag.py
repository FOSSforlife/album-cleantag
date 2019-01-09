#!/usr/bin/env python3
import re

def clean(name, options={}):
    redFlags = ['anniversary', 'bonus', 'deluxe', 'edition', 'expanded', 'explicit', 'reissue', 'remaster', 'version']

    if 'customRedFlags' in options:
        redFlags = options['customRedFlags']
    elif 'excludeRedFlags' in options:
        redFlags = filter(lambda f: f in options['excludeRedFlags'], redFlags)

    redFlags = '(' + '|'.join(redFlags) + ')'
    bracketsRegex = re.compile(r'(\(|\[)(.*)' + redFlags + r'(.*)(\)|\])(\)|\])?', re.I)
    hyphenRegex = re.compile('(- )(.*)' + redFlags + '(.*)', re.I)

    # filters parentheses and brackets
    name = bracketsRegex.sub('', name, 2)

    if '-' in name:
        if name.find('-') == name.rfind('-'):
            name = hyphenRegex.sub('', name, 1)
        else:
            # if multiple hyphens, only checks the phrase after the last hyphen
            lastHyphen = name.rfind('-')
            firstBit = name[0:lastHyphen]
            name = firstBit + hyphenRegex.sub('', name[lastHyphen:], 1)

    return name.strip();