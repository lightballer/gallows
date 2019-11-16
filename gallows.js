'use strict';

const inGame = true;
let letter = '';
let counter = 5;
const outputWord = [];


const words = ['АРТЕМ', 'МАКБУК'];
const indexOfRandomWord = wordsArray => wordsArray[Math.floor(Math.random()*wordsArray.length)];
const generateWord = indexOfRandomWord(words);
const randomWord = generateWord.split('');

for(let i = 0; i < randomWord.length; i++) {
    outputWord.push('_ ');
}

alert('Aloha! You have ' + counter + ' attempts');

while(inGame) {
    letter = prompt('Write down the letter: ');
    
    if(letter.length == 1 && typeof letter == 'string') {
        if(randomWord.includes(letter) == false) --counter;
        for(let i = 0; i < randomWord.length; i++) {
        if(randomWord[i] === letter) {
            outputWord[i] = letter;
        } 
    }
}

    if (outputWord.includes('_ ') === false) {
            alert('Congratulations! Word was ' + outputWord.join(''));
            inGame = false;
        } else if (counter == 0) {
            alert('You lose :(');
            inGame = false;
        } 
    alert(outputWord.join('') + ' ' + counter + ' attempts left');
}
