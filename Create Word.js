const fs = require('node:fs');

fs.readFile('JS.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    const wordCount = countWords(data);
    console.log("Word count:", wordCount);
});

function countWords(text) {
    const words = text.trim().split(/\s+/);
    return text.trim() === "" ? 0 : words.length;
}