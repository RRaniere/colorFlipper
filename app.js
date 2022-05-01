const colors = ["green", "red", "rgba(133,122,200)", 
"#f15025"];
const btn = document.getElementById("btn simple");
const color = document.querySelector(".color");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btnh = document.getElementById("btn hex");
const btnc = document.getElementById("btn clean");
const btnr = document.getElementById("btn return");
const corDigitada = document.getElementById("corDigitada")
const btnConfirmaCorDigitada = document.getElementById("confirmaCorDigitada")
let arrayColors = []

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber()
    ;
    document.body.style.backgroundColor = colors [randomNumber];
    color.textContent = colors[randomNumber];
    arrayColors.push(colors[randomNumber])
    window.alert(arrayColors)
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
};

btnh.addEventListener("click", function () {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandomNumberH()];
    }

function getRandomNumberH() {
    return Math.floor(Math.random() * hex.length);
};

    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
    arrayColors.push(hexcolor)
    window.alert(arrayColors)
});

btnc.addEventListener("click", function () {
    document.body.style.backgroundColor = 'white';
    color.textContent = '#FFFFFF';
    arrayColors.push('#FFFFFF')
    window.alert(arrayColors)
});

btnr.addEventListener("click", function() {
    document.body.style.backgroundColor = arrayColors[arrayColors.length - 2]
    color.textContent = arrayColors[arrayColors.length - 2]
    window.alert(arrayColors)
})


btnConfirmaCorDigitada.addEventListener("click", function(){
    document.body.style.backgroundColor = corDigitada.value
    color.textContent = corDigitada.value
    arrayColors.push(corDigitada.value)
    window.alert(arrayColors)
})
 