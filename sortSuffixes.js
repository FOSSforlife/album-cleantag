// So far I've been manually sorting the suffixes file in the correct order, but
// once the file gets big enough I will write a method to do it.

// Sorting is necessary to ensure that the correct string is identified and replaced,
// since the '|' in regex matches the first string it sees.
// For example if 'remaster' comes before 'remastered', any instance of 'remastered' gets replaced with 'ed'.