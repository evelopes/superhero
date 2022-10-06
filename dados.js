//DOM
let primeiro = {
    foto: document.getElementById("personagemUm"),
    nome: document.getElementById("nomeUm"),
    combate: document.getElementById("combate"),
    durabilidade: document.getElementById("durabilidade"),
    inteligencia: document.getElementById("inteligencia"),
    poder: document.getElementById("poder"),
    velocidade: document.getElementById("velocidade"),
    forca: document.getElementById("forca"),
    sorteia: random(),
    total: document.getElementById("total")
}
let segundo = {
    foto: document.getElementById("personagemDois"),
    nome: document.getElementById("nomeDois"),
    combate: document.getElementById("combate2"),
    durabilidade: document.getElementById("durabilidade2"),
    inteligencia: document.getElementById("inteligencia2"),
    poder: document.getElementById("poder2"),
    velocidade: document.getElementById("velocidade2"),
    forca: document.getElementById("forca2"),
    sorteia: random(),
    total: document.getElementById("total2")
}

//Dados API
const url = "https://www.superheroapi.com/api.php/";
const chave = "10217730441332824/";
const dados = url + chave;
let options = {}

function random() {
    return Math.floor(Math.random() * 731) + 1;
}

passaPersonagens(dados, primeiro.sorteia, primeiro)
passaPersonagens(dados, segundo.sorteia, segundo)
function passaPersonagens(dados, personagem, valor) {
    let url = dados + personagem;
    fetch(url, options)
        .then(response => mostraDados(response, valor))
        .catch(error => console.log(error))
}

function mostraDados(response, personagem) {
    response.json().then(
        json => {
            personagem.foto.src = json.image.url;
            personagem.nome.textContent = json.name;
            personagem.combate.value = json.powerstats.combat;
            personagem.durabilidade.value = json.powerstats.durability;
            personagem.inteligencia.value = json.powerstats.intelligence;
            personagem.poder.value = json.powerstats.power;
            personagem.velocidade.value = json.powerstats.speed;
            personagem.forca.value = json.powerstats.strength;
            personagem.total.textContent = parseInt(json.powerstats.combat) + parseInt(json.powerstats.durability) + parseInt(json.powerstats.intelligence) + parseInt(json.powerstats.power) + parseInt(json.powerstats.speed) + parseInt(json.powerstats.strength);
            datass.personagem(personagem.total.textContent);
        })
    mostraDados.preventDefault();

}

function somaPontos(perso, person) {
    if (perso.total.textContent > person.total.textContent) {
        alert(perso.nome.textContent + " vence a luta!")
    }
    else {
        alert(person.nome.textContent + " vence a luta!")
    }
}