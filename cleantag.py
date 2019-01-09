#!/usr/bin/env python3
import json
import re

with open('suffixes.json') as f:
    unwantedSuffixes = '(' + '|'.join(json.load(f)) + ')'

regex = re.compile(r'(\(|\[|- )' + unwantedSuffixes + r'(\)|\])?(\)|\])?', re.I)

def clean(name):
    return regex.sub('', name, 2).strip()