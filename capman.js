// TO-DO:
// - How to keep track and know if all letters have been guessed correctly?
// - Should I convert null in object to space??

let chances = 6;
let guesses = [];
let sentence = ["There were three shepherd rocks congregating in a cubed room"];
sentence = sentence[0].split('');
let matches = [];
let correct = [];
let temp_word_sentence = [];
let minecraft = [];

// split setence to individual characters
// sentence[0].split('').forEach(letter => {
//     console.log(letter);
// })
// console.log(guesses);

// for (let i = 0; i < sentence.length; i++) {
//     console.log(typeof(sentence[i].toLowerCase()));
// }

let code = document.querySelectorAll(".code");
let codes = [...code];
codes.forEach(c => {
    c.addEventListener('click', function () {
        for (let i = 0; i < sentence.length; i++) {
            if (c.innerText.toLowerCase() == sentence[i].toLowerCase()) {
                matches[i] = {
                    index: i,
                    letter: sentence[i],
                    match: true
                };
                console.log('correct!');
            }
        }

        if (!guesses.includes(c.innerText)) {
            guesses.push(c.innerText);
            c.innerText = "\u0336" + c.innerText + "\u0336";
        }

        console.log('guesses: ' + guesses);
        console.log('matches: ' + JSON.stringify(matches));
    });
})

const sentences = [
    "There were three shepherd rocks congregating in a cubed room",
    "The murder hornet was disappointed by the preconceived ideas people had of him",
    "There was no telling what thoughts would come from the machine",
    "The tart lemonade quenched her thirst, but not her longing",
    "The Japanese yen for commerce is still well-known",
    "The sight of his goatee made me want to run and hide under my sister-in-law's bed",
    "The secret ingredient to his wonderful life was crime",
]



// Find answer's length without spaces:
// console.log(answers[4].length - answers[4].split(" ").length + 1);

// let _code = new Array();
// for (let v of answers) {
//     let _answers = v.split(' ');
// //    console.log(_answers);
//     for (let word of _answers) {
// //        console.log(char);
//         for (let char of word) {
//             _code.push(char);
//         }
//     }
//     console.log(_code);
// }
