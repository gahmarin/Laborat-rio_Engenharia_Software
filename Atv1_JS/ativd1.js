let numero;
do{
    numero=prompt("Digite um número inteiro positivo: ");
    numero=Number(numero);
} while (isNaN(numero) || !Number.isInteger(numero) || numero <= 0);

function ehParOuImpar(num){
    return num % 2 === 0 ? "par" : "ímpar";
}


function ehPrimo(num){
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i ++){
        if (num % i === 0) return false;
    }
    return true;
}

function calcularFatorial(num){
    let fatorial = 1;
    for (let i = 2; i <= num; i ++){
        fatorial *= i;
    }
    return fatorial;
}

let opcao = prompt("Escolha um opção:\n1- Verificar se é par ou ímpar?\n2- Verificar se é primo?\n3- Calcular o fatorial\n4- Verificar tipo de dado")
if (opcao === "1"){
    alert("O número " + numero + " é " + ehParOuImpar(numero + "."));
} else if (opcao === "2"){
    if (ehPrimo(numero)){
        alert("O número " + numero + " é primo.");
    }else{
        alert("O número " + numero + " não é primo.");
    }
} else if ( opcao === "3"){
    alert("O fatorial de " + numero + " é " + calcularFatorial(numero) + ".");
} else if (opcao === "4"){
    let dado = prompt("Digite um valor qualquer: ");
    let confirmar = confirm("Deseja verificar o tipo do dado informado? ");
    if (confirmar){
        document.body.innerHTML = "O tipo do dado informado é: " + (isNaN(dado) ? "String" : "Number");
    } else {
        document.body.innerHTML = "Obrigado por visitar esta página!";
    }
} else{
    alert("Opção inválida!")
}
