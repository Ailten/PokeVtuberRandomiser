
const CountId = 1025;
const urlAPI = "https://pokeapi.co/api/v2/pokemon"


// ask API pokemon for get all pokemon.
async function getAllPokemon(){

    let pokemons = null;

    await fetch(urlAPI+"?offset=0&limit=10") //skip with offset, get a shorter list with limit.
        .then(response => response.json())  
        .then(allpokemon => {
            countPokemon = allpokemon.results;
        });  

    return pokemons;

}

// ask pokemon by his Id.
async function getPokemonById(id){

    let pokemonObj = null;

    await fetch(urlAPI+"/"+id+"")
        .then(response => response.json())  
        .then(pokemon => {
            pokemonObj = pokemon;
        });  

    return pokemonObj;

}

// ask a random pokemon.
async function getRandomPokemon(){

    let randomId = Math.floor(Math.random() * CountId);

    return await getPokemonById(randomId);

}