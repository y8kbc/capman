// TO-DO:
// - Should I convert null in object to space??
// *** how to print out sentence after guessing it right
let secret_codes = [
    "There were three shepherd rocks congregating in a cubed room",
    "The murder hornet was disappointed by the preconceived ideas people had of him",
    "There was no telling what thoughts would come from the machine",
    "The tart lemonade quenched her thirst, but not her longing",
    "The Japanese yen for commerce is still well-known",
    "The sight of his goatee made me want to run and hide under my sister-in-law's bed",
    "The secret ingredient to his wonderful life was crime",
];

let answer = '';
let maxTries = 6;
let mistakes = 0;
let guessed = []
let codeStatus = null;

function setSecretCode() {
    answer = secret_codes[Math.floor(Math.random() * secret_codes.length)];
}

function buildKeyboard() {
    let keyboardHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
    `
        <button id='` + letter + `'
        >
        ` + letter + `
        </button>
    `).join('');
    
    document.getElementById('keyboard').innerHTML = keyboardHTML;
}


setSecretCode();
buildKeyboard();
// let chances = 6;
// let guesses = [];
// let sentence = ["There"];
// sentence = sentence[0].split('');
// let matches = [];
// let correct = [];
// let temp_word_sentence = [];
// let minecraft = [];
// let win = 0;


// console.log('length: ' + win);
// while (win > 0) {
//     for (let i = 0; i < sentence.length; i++) {
//         win = win - 1;
//         console.log(win);
//     }
// }
let answers = {
    a: {
        exist: false,
        guessed: false,
        value: 'a',
        index: []
    },
    b: {
        exist: false,
        guessed: false,
        value: 'b',
        index: []
    },
    c: {
        exist: false,
        guessed: false,
        value: 'c',
        index: []
    },
    d: {
        exist: false,
        guessed: false,
        value: 'd',
        index: []
    },
    e: {
        exist: false,
        guessed: false,
        value: 'e',
        index: []
    },
    f: {
        exist: false,
        guessed: false,
        value: 'f',
        index: []
    },
    g: {
        exist: false,
        guessed: false,
        value: 'g',
        index: []
    },
    h: {
        exist: false,
        guessed: false,
        value: 'h',
        index: []
    },
    i: {
        exist: false,
        guessed: false,
        value: 'i',
        index: []
    },
    j: {
        exist: false,
        guessed: false,
        value: 'j',
        index: []
    },
    k: {
        exist: false,
        guessed: false,
        value: 'k',
        index: []
    },
    l: {
        exist: false,
        guessed: false,
        value: 'l',
        index: []
    },
    m: {
        exist: false,
        guessed: false,
        value: 'm',
        index: []
    },
    n: {
        exist: false,
        guessed: false,
        value: 'n',
        index: []
    },
    o: {
        exist: false,
        guessed: false,
        value: 'o',
        index: []
    },
    p: {
        exist: false,
        guessed: false,
        value: 'p',
        index: []
    },
    q: {
        exist: false,
        guessed: false,
        value: 'q',
        index: []
    },
    r: {
        exist: false,
        guessed: false,
        value: 'r',
        index: []
    },
    s: {
        exist: false,
        guessed: false,
        value: 's',
        index: []
    },
    t: {
        exist: false,
        guessed: false,
        value: 't',
        index: []
    },
    u: {
        exist: false,
        guessed: false,
        value: 'u',
        index: []
    },
    v: {
        exist: false,
        guessed: false,
        value: 'v',
        index: []
    },
    w: {
        exist: false,
        guessed: false,
        value: 'w',
        index: []
    },
    x: {
        exist: false,
        guessed: false,
        value: 'x',
        index: []
    },
    y: {
        exist: false,
        guessed: false,
        value: 'y',
        index: []
    },
    z: {
        exist: false,
        guessed: false,
        value: 'z',
        index: []
    }
};

// for (const key in answers) {
//     if (answers.hasOwnProperty(key)) {
//         for (let i = 0; i < sentence.length; i++) {
//             if (key === sentence[i].toLowerCase()) {
//                 answers[key].exist = true;
//             }
//         }
//     }
// }

// for (const key in answers) {
//     if (answers[key].exist) {
//         console.log(answers[key]);
//     }
// }

// console.log(answers.a.value);
// for (let i = 0; i < sentence.length; i++) {
//
// }

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
                for (const key in answers) {
                    if (!answers[key].guessed) {
                        if (answers[key].exist) {
                            console.log('win: ' + win + ' & ' + 'sentence.length: ' + sentence.length);
                            // HOW TO NOT COUNT THE SAME LETTER GUESSED RIGHT MORE THAN 1 TIME
                            answers[c.innerText.toLowerCase()].guessed = true;
                            answers[c.innerText.toLowerCase()].index.push(i);
                            win++;
                            if (win >= sentence.length) {
                                console.log("You Win!");
                                console.log("Guesses: " + guesses);
                            }
                        }
                    }
                }
            }

            if (!guesses.includes(c.innerText)) {
                guesses.push(c.innerText);
                c.innerText = "\u0336" + c.innerText + "\u0336";
            }
        }

        // console.log(answers);
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
