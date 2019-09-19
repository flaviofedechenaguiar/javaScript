const nome = require("./composicao/nome");
const sobrenome = require("./composicao/sobrenome.js");


let random = function (numero) {
    return Math.floor(Math.random() * numero);
}

let entrada = true;

while(entrada){

let name = "";
let lastName = "";
letNumLastName = 0;



if (random(nome.nomeMasc.length) > nome.nomeMasc.length / 2) {
    name += nome.nomeMasc[random(nome.nomeMasc.length)] + " ";

} else {
    name += nome.nomeFemi[random(nome.nomeFemi.length)] + " ";
}

numLastName = random(sobrenome.sobrenome.length);

if (random(3) > 1) {
    let plusName = 0;
    do {
        plusName = random(sobrenome.sobrenome.length);
    } while (plusName == numLastName);

    lastName += sobrenome.sobrenome[numLastName] + " " + sobrenome.sobrenome[plusName];

}else{
    lastName = sobrenome.sobrenome[numLastName];
}

name += lastName;

if(name === "FLAVIO FEDECHEN AGUIAR"){
    entrada = false;
}
console.log("-");
}

console.log(name);