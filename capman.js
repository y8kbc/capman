let code = document.querySelectorAll(".code");
let codes = [...code];
codes.forEach(c => {
    c.addEventListener('click', function () {
        console.log(c.innerText);
    });
})
