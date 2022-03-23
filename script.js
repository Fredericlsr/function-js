function imprimirNoConsole(){
    console.log('================================================================');
    console.log('=========================Seja Bemvindo==========================');
    console.log('================================================================');
}
imprimirNoConsole();

console.log();

console.log('================================================================');
console.log("Quantos Anos vc tem?");
console.log('================================================================');

function imprimirIdade(idade){
    console.log(`você tem ${idade} anos`)
}

imprimirIdade(12);
imprimirIdade(18);
imprimirIdade(36);


console.log('================================================================');
console.log("soma");
console.log('================================================================');

function soma(x,y){
    return x + y;
    
}
console.log(soma(10,19));

console.log('================================================================');
console.log("gerando numero aleatorio");
console.log('================================================================');


function numAleatorio(x){
    return Math.floor(Math.random() * x) +1;
   
}

console.log(numAleatorio(1000));
console.log(numAleatorio(300));

console.log('================================================================');
console.log("idade para dirigir");
console.log('================================================================');

function idadeCnh(cnh){
    if(cnh >= 18){
        console.log(`vc é maior de idade e pode tirar sua CNH`)
    } else{
        console.log('vc ainda não completou 18 anos, volte ano que vem!')
    }
}
idadeCnh(18);
idadeCnh(55);
idadeCnh(16);

console.log('================================================================');
console.log("verificando tipo de dado");
console.log('================================================================');

function verificarTipoDado(dado){
    if(typeof dado === 'string'){
        console.log('este dado é uma string');
    } else if(typeof dado === 'number'){
        console.log('este dado é um numero');
    } else{
        console.log('este dado é um boolean');
    }
}

verificarTipoDado('frederic');
verificarTipoDado(18);
verificarTipoDado(true);


console.log('================================================================');
console.log("retorno numero absoluto");
console.log('================================================================');

function numPos(numNeg){
    return Math.abs(numNeg)
}

console.log(numPos(-13));
console.log(numPos(-33.9))


console.log('================================================================');
console.log("Verificando quantidade de caracters");
console.log('================================================================');

function caracter(texto){
    if(texto.length > 10){
        console.log('texto muito longo');
    } else{
        console.log('texto dentro do limite');
    }
    console.log(texto);
    console.log(texto.length + ' caracteres');
}

caracter('eu sou mineiro e gosto de pão de queijo');
caracter('frederic')