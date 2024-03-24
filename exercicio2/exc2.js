// Criar um array e percorrê-lo utilizando o loop for of
// a. Crie um array com o nome "numeros" e adicione 5 números de
// sua escolha
// b. Utilize o loop for of para percorrer o array e exibir a soma dos
// números na tela

let numbers = [29, 18, 34, 43, 55];

let soma = 0;

for(let i of numbers){
    soma += i;
}

document.write(`a soma é: ${soma}`);