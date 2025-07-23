let nomes = []

while(true){
    let nomes_digitado = prompt("Digite um Nome (ou Digite 'sair' para Encerrar):")

    if (nomes_digitado === null || nomes_digitado.toLowerCase() === "sair"){
        break
    }
    nomes.push(nomes_digitado.trim())
}

console.log("Nomes com Indice:")

for (let i=0; i<nomes.length; i++){
    console.log(`${i+1}: ${nomes[i]}`)
}

console.log("Menssagens:")

for(let nome of nomes){
    console.log(`Bem-vindo(a), ${nome}!`)
}