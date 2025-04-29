const { Transform } = require('node:stream');
const fs = require('node:fs');

const readFile = fs.createReadStream('pg75369.txt', {encoding: 'utf8', highWaterMark: 16384});
const writeFile = fs.createWriteStream('new-file.txt');

const myTransform = new Transform({
    transform(chunk, encoding, callback){
        const newData = chunk.toString().split(' ');
        const reversedWords = [];

        for (let i = 0; i < newData.length; i++){
            const word = newData[i]
            let reversedWord = '';
            for (let i = word.length - 1; i >= 0; i--){
                revertedWord += word[i]
            }


            reversedWord.push(revertedWord);
        }
        callback(null, reversedWords.join('\n'));
    }

    
});


readFile.pipe(myTransform).pipe(writeFile);