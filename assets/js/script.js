let nombre = "mario";
let numero = 5;
let boolean = false;
const array = [];
const json = {}

let nombrecito = document.getElementById("nombre")
// nombrecito.textContent = nombre

console.log(nombre)

const text = document.getElementById("palabra")

text.addEventListener("input", () => {
    nombrecito.textContent = numero + parseInt(text.value)
})


let bool = document.getElementById("bool");
const booleano = document.getElementById("booleano");
booleano.addEventListener("click", () => {
    const tf = bool.innerText === "true";
    console.log(bool.innerText)
    bool.innerText = !tf
})