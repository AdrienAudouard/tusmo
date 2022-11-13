const read = require('read-file');
const fs = require('fs');

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function printProgress(progress){
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(progress);
}

read('src/assets/words.json', 'utf8', function(err, buffer) {
  const words = JSON.parse(buffer);
  shuffleArray(words);
  shuffleArray(words);
  shuffleArray(words);
  const wordsMapped = words.map((e) => {

    return ({
      word: e.trim(),
      size: e.trim().length
    });
  });

  const grouped = {};

  wordsMapped.forEach((word) => {
    if (!grouped[word.size]) {
      grouped[word.size] = [];
    }

    grouped[word.size].push(word.word);
  });

  const table = Object.keys(grouped).map((key) => {
    return { size: key, count: grouped[key].length };
  });

  console.log("Number of words per size:");
  console.table(table);

  fs.writeFile("src/assets/words-shuffle.json", JSON.stringify(wordsMapped), function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});
