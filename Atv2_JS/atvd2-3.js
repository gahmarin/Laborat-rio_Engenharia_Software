function ehPalindromo(texto){
    const textoLimpo = texto
        .toLowerCase()
        .normalize("NFD") // Remove acentos
        .replace(/[\u0300-\u036f]/g, "")  // Remove caracteres de outras línguas
        .replace(/[^a-z0-9]/g, ""); // Remove caracteres não alfa-numéricos

    return textoLimpo === textoLimpo.split("").reverse().join("");
}

function verificarPalindromo(){
    const entradaTexto = document.getElementById("entradaTexto").value.trim();

    if (entradaTexto === ""){
        alert("Por favor, digite um texto.");
        return;
    }

    if (ehPalindromo(entradaTexto)){
        alert(`"${entradaTexto}" é um palíndromo.`);
    } else {
        alert(`"${entradaTexto}" NÃO é um palíndromo.`)
    }
}

document.getElementById("verificarBtn").addEventListener("click", verificarPalindromo);