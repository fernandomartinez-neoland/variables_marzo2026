let nombre="mario";
let numero=145656156156;
let boolean=false;
const array=[];
const json={}

let nombrecito=document.getElementById("nombre")
nombrecito.textContent=nombre

console.log(nombre)

const text=document.getElementById("palabra")

text.addEventListener("input",()=>{
    nombrecito.textContent=text.value+nombre
})