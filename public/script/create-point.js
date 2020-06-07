function populateUFs() {

    const ufSelect = document.querySelector("select[name=uf]"); // chama o select com name=uf
    
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") //site do ibge que pega os estados
    .then( res => res.json() ) // res => res.json   é uma abreviação de (res) => {return res.json()}, isto é uma função anonima
    .then( states => {

        for(const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs();

function getCities(event) {

    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.value = event.target.options[indexOfSelectedState].text;

    const ufValue = event.target.value;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value> Selecione a Cidade</option>"; // começa como vazio ou com algo, para resetar caso vc mude de estado
    citySelect.disabled = true;

    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for(const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

//itens de coleta
//pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)

}

const collectedItems = document.querySelector("input[name=items]");
let selectedItems = [];


function handleSelectedItem(event) {
    //add ou tirar uma classe com JS
    const itemLi = event.target;
    itemLi.classList.toggle("selected"); //toggle remove OU adiciona; se tem selected, retira, se não tem, coloca

    const itemId = itemLi.dataset.id;
    

    //verificar se existem itens selecionados
    //se sim, pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex( function(item) {
        const itemFound = item == itemId;
        return itemFound;
    })

    // se já estiver selecionado, tirar da seleção

    if (alreadySelected >= 0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDiferent = item != itemId;
            return itemIsDiferent;
            
        })

        selectedItems = filteredItems;

    } else {
        // se não estiver selecionado, add à seleção
        selectedItems.push(itemId);

    }

    //atualizar o campo escondido com os iten selecionados
    collectedItems.value = selectedItems;

}