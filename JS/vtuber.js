
const urlJson = "/JSON/vtuber.json";

// ask a random vtuber.
async function getRandomVtuber(){

    let vtuberObj = null;

    await fetch(urlJson)
        .then(response => response.json())  
        .then(vtubers => {
            let randomIndex = Math.floor(Math.random() * vtubers.length);
            vtuberObj = vtubers[randomIndex];
        });  

    return vtuberObj;

}