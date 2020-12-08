const { words } = require("../data/words");

let WordId = (req, res) => {
  let { id } = req.params;
  const NewWord = words.find((word) => word.id === id);
  return res.status(200).json({ status: 200, NewWord });
};

let WordCount = (req, res) => {
  let randomNum = Math.floor(Math.random() * 10 + 2);
  const random = words.map((word) => {
    return `ID = ${word.id}, LetterCount = ${word.letterCount}`;
  });
  let randomWord = random[randomNum];

  return res.status(200).json({ status: 200, randomWord });
};

let HandlerStatus = (req, res) => {
  let answerArray = [];
  let  id  = req.params.id;
  let  letter  = req.params.letter;
  let NewWord = words.find((word) => {
      return word.id == id;
    });
  let splitLetters = NewWord.word.split("");

  splitLetters.forEach((ltr) => {
    if (ltr === letter) {
      answerArray.push(true);
    } else {
      answerArray.push(false);
    }
    return answerArray;
  });
  res.status(200).json( answerArray);
};

module.exports = { WordCount, WordId, HandlerStatus };
