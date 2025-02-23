function formatarDataAtual(){
    const diasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
        "Quinta-feira", "Sexta-feira", "Sábado"];

    const mesesAno = ["janeiro", "fevereiro", "março", "abril", "maio", "junho",
        "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    const data = new Date();

    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = mesesAno[data.getMonth()];
    const ano = data.getFullYear();

    return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
}

function exibirData(){
    document.getElementById("data").textContent = formatarDataAtual();
}

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("btnMostrarData").addEventListener("click", exibirData);
});