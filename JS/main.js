
window.addEventListener("load", () => { main(); });

//for run from github : https://raw.githack.com/Ailten/PokeVtuberRandomiser/main/index.html

async function main(){

    let inputPokemon = document.querySelector("#pokemon input[value=\"Randomise\"]");

    let inputVtuber = document.querySelector("#vtuber input[value=\"Randomise\"]");

    if(inputPokemon !== null){
        inputPokemon.addEventListener("click", () => { randomisePokemon(); });
    }

    if(inputVtuber !== null){
        inputVtuber.addEventListener("click", () => { randomiseVtuber(); });
    }

}


async function randomisePokemon(){

    let pokemonObj = await getRandomPokemon();

    let imgPokemon = document.querySelector("#pokemon img");
    imgPokemon.src = pokemonObj.sprites.front_default;

    let namePokemon = document.querySelector("#pokemon .name");
    namePokemon.innerText = pokemonObj.name;


}


async function randomiseVtuber(){

    let vtuberObj = await getRandomVtuber();
    
    let imgVtuber = document.querySelector("#vtuber img");
    imgVtuber.src = vtuberObj.img;

    let nameVtuber = document.querySelector("#vtuber .name");
    nameVtuber.innerText = vtuberObj.name;


}