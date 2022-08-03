let code = document.querySelectorAll(".code");
let codes = [...code];
codes.forEach(c => {
    c.addEventListener('click', function () {
        console.log(c.innerText);
    });
})

const answers = [
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

let _code = new Array();
for (let v of answers) {
    let _answers = v.split(' ');
//    console.log(_answers);
    for (let word of _answers) {
//        console.log(char);
        for (let char of word) {
            _code.push(char);
        }
    }
    console.log(_code);
}
