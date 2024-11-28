let conatiner = document.getElementById("container");
var data = []
async function filtrejson() {
    try {
        const response = await fetch('data.json');
        data = await response.json();
        afficherData(data);
    } catch (error) {
        console.error("Error fetching json file", error);
    }
}
filtrejson()
function afficherData(data) {
    let html = " "

    data.players.forEach((player) => {
        html += `
            <div class="card-container" >
            <div   class ="player-contain1">
            <div class="player-info" >
                <div class="d-flex flex-">
                <div >
                <p>`+ player.position + `</p>
                <h6>`+ player.rating + `</h6>
                </div>
                <img  style="width: 70px;" src="`+ player.photo + `" alt="">
                </div>
              <p> `+ player.name + `</p>
              `
        if (player.position == "GK") {
            html += `  <div>
                
                
                <span>`+ player.diving + `</span>
                <span>`+ player.handling + `</span>
                <span>`+ player.kicking + `</span>
                <span>`+ player.reflexes + `</span>
                <span>`+ player.speed + `</span>
                <span>`+ player.positioning + `</span>
                
            </div>`

        } else {
            html += `  <div>
                
                <span>`+ player.pace + `</span>
                <span>`+ player.shooting + `</span>
                <span>`+ player.passing + `</span>
                <span>`+ player.dribbling + `</span>
                <span>`+ player.defending + `</span>
                <span>`+ player.physical + `</span>
            </div>`
        }

        html += ` 
          
              <p>`+ player.nationality + `</p> 
              <div style="padding-bottom: 30px;">
              <img style="border-radius: 50%; width:20px; height:20px"  src="`+ player.flag + `" alt="">
              <img style="border-radius: 50%; width:20px; height:20px"  src="`+ player.logo + `" alt="">
              </div>       
           </div>
        </div>
    </div>
    `

    });
    document.getElementById("players-container").innerHTML = html



}
const formulairePlayers = document.getElementById("formulaire-players");
const addPlayer = document.querySelector(".button-add-player");
const formationPlayers = document.getElementById("formation-players");

addPlayer.addEventListener('click', function () {
    formulairePlayers.style.display = 'block';
    formationPlayers.style.display = 'none';
});

const pos = document.getElementById("position");

pos.addEventListener('change', (event) => {
    if (event.target.value === 'GK') {
        inputplay.innerHTML = `<div  style="display: flex; flex-direction: column;gap: 5px; " >

                    
                   
                    <input type="number" placeholder="  diving">
         
                    <input type="number" placeholder="  handling">
                    
                    <input type="number" placeholder="  kicking ">
                   
                    <input type="number" placeholder="  reflexes">
        
                    <input type="number" placeholder="  speed">
             
                    <input type="number" placeholder="  positioning">
                    </div> `
    }
    if (event.target.value === 'ST') {
        inputplay.innerHTML = `<div  style="display: flex; flex-direction: column;gap: 5px; " >
             
           
            <input type="number" placeholder="  pace">

             <input type="number" placeholder="  shooting">
            
            <input type="number" placeholder="  passing">
           
            <input type="number" placeholder="  driblling">

            <input type="number" placeholder="  defending">
     
            <input type="number" placeholder="  physical">
            </div> `
    }
});

const inputplay = document.getElementById("input-player");

const playernom = document.getElementById("player-nom");
const playernationalite = document.getElementById("player-nationalite");
const playerpace = document.getElementById("player-pace");
const playershooting = document.getElementById("player-shooting");
const playerpassing = document.getElementById("player-passing");
const playerdriblling = document.getElementById("player-driblling");
const playerdefending = document.getElementById("player-defending");
const playerphysical = document.getElementById("player-physical");
const playerclub = document.getElementById("player-club");
const playerrating = document.getElementById("rates");
const playerphoto = document.getElementById("player-photo");
const playerlogo = document.getElementById("player-logo");
const playerflag = document.getElementById("player-flag");
const ajoutbtn = document.querySelector(".ajout-btn");



ajoutbtn.addEventListener('click', function () {

    let newPlayer = {};
    const name = playernom.value.trim();
    const pace = playerpace.value.trim();
    const rating = playerrating.value.trim();
    const photo = playerphoto.value.trim();
    const physical = playerphysical.value.trim();
    const club = playerclub.value.trim();
    const logo = playerlogo.value.trim();
    const flag = playerflag.value.trim();
    const passing = playerpassing.value.trim();
    const shooting = playershooting.value.trim();
    const dribbling = playerdriblling.value.trim();
    const defending = playerdefending.value.trim();
    const nationality = playernationalite.value.trim();

    let status = true;
    let child;
    if (name.length == 0) {
        child = playernom.nextElementSibling;
        child.style.display = "block"
        child.style.color = "red"

        playernom.style.border = 'solid 2px red';
        status = false
    }

    if (nationality.length == 0) {
        child =playernationalite.nextElementSibling;
        child.style.display = "block"
        child.style.color = "red"
        playernationalite.style.border = 'solid 2px red';
        status = false
    }

    if (photo.length == 0) {
        playerphoto.nextElementSibling.style.display = "block"
        playerphoto.nextElementSibling.style.color = "red"
        playerphoto.style.border = 'solid 2px red';
        status = false
    }


    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
        
        playernom.nextElementSibling.style.display = "block"
        playernom.nextElementSibling.style.color = "red"
        playernom.nextElementSibling.textContent = "the value you enter not much the requerment"
        playernom.style.border = 'solid 2px red';
        status = false

    }

    if (name.length < 2 || name.length > 50) {
        
        status = false

    }

    console.log(playerrating.value)

    newPlayer.name = playernom.value
    console.log(playernom.value)
    newPlayer.rating = playerrating.value
    newPlayer.nationality = playernationalite.value
    newPlayer.pace = playerpace.value
    newPlayer.physical = playerphysical.value
    newPlayer.club = playerclub.value
    newPlayer.dribbling = playerdriblling.value
    newPlayer.defending = playerdefending.value
    newPlayer.passing = playerpassing.value
    newPlayer.shooting = playershooting.value
    newPlayer.photo = playerphoto.value
    newPlayer.logo = playerlogo.value
    newPlayer.flag = playerflag.value
    newPlayer.position = pos.value


    if (status) {
        data.players.unshift(newPlayer)
        afficherData(data)
    }



});
const card = document.getElementsByClassName("cardid1");
const cards = Array.from(card)
console.log(card)
const players = document.getElementById("players-container");


cards.forEach(item => {
    item.addEventListener('click', function () {
        players.style.display = 'flex';
    })
})
