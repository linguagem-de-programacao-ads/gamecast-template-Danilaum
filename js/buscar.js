async function buscar(){
    console.log("passei por aqui")
    const resposta = await fetch("https://660f44cb356b87a55c511007.mockapi.io/agendas")
const respostaDadosAgenda = await resposta.json();
    console.log("Resposta", respostaDadosAgenda)

    const cards = document.getElementById("cards_games");


cards.innerHTML= respostaDadosAgenda.map((itemAgenda)=>{
return "TESTE "
    });
}
console.log("Antes de passar")
buscar();
console.log("depois de passar")