const basket = ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'];
// melancia: 3, abacate: 1, uva: 1

let quantidadeSomada = []


function quantidadeNaCesta(lista){
    basket.sort()
    console.log(basket)
    for(fruta in lista){
        let indice = 0;
        for(proximaFruta in lista){
            if (lista[fruta] !== lista[proximaFruta]){
                indice = proximaFruta;
                console.log(indice)
            }
        }
    }

    console.log(basket)
}

quantidadeNaCesta(basket)