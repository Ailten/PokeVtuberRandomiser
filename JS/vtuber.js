
const urlJson = "/JSON/vtuber.json"; //https://raw.githubusercontent.com/Ailten/PokeVtuberRandomiser/refs/heads/main/JSON/vtuber.json

// ask a random vtuber.
async function getRandomVtuber(){

    let vtuberObj = null;

    await fetch(urlJson)
        .then(response => {
            console.log(response);
            return response.json()
        })  
        .then(vtubers => {
            let randomIndex = Math.floor(Math.random() * vtubers.length);
            vtuberObj = vtubers[randomIndex];
        });  

    return vtuberObj;

}