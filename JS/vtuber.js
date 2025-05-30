
console.log("vtuber.js is load");

const urlJson = "https://raw.githubusercontent.com/Ailten/PokeVtuberRandomiser/refs/heads/main/JSON/vtuber.txt";

// ask a random vtuber.
async function getRandomVtuber(){

    let vtuberObj = null;

    await fetch(urlJson)
        .then(async response => {

            if(!response.ok)
                throw new Error(`fetch error ${response.status}`);
            
            let value = undefined;
            await response.text().then(result => {
                value = result;
            })

            return JSON.parse(value);
        }) 
        .then(vtubers => {
            let randomIndex = Math.floor(Math.random() * vtubers.length);
            vtuberObj = vtubers[randomIndex];
        });  

    return vtuberObj;

}