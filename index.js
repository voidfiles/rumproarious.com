import Typography from 'typography'
import fs from 'fs';

const typography = new Typography()

// Output CSS as string.
var typography_css = typography.toString()

fs.writeFile('assets/css/typography.css', typography_css, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});
