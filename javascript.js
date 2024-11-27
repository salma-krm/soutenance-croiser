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
                <h5>`+ player.rating + `</h5>
                </div>
                <img  style="width: 70px;" src="`+ player.photo + `" alt="">
                </div>
              <h6> `+ player.name + `</h6>
              `
        if (player.position == "GK") {
            html += `  <div>
                
                <span>`+ player.rating + `</span>
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
                     <input type="number" placeholder=" rating ">
                   
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
// const playerGK =document.getElementById("player-GK");
const inputplay = document.getElementById("input-player");
// playerGK.addEventListener('click',function(){
//    {
//     inputplay.innerHTML=`<div  style="display: flex; flex-direction: column;gap: 5px; " >
//              <input type="number" placeholder="  salma">

//             <input type="number" placeholder="  pace">

//             <input type="number" placeholder="  shooting">

//             <input type="number" placeholder="  passing">

//             <input type="number" placeholder="  driblling">

//             <input type="number" placeholder="  defending">

//             <input type="number" placeholder="  physical">
//             </div> `

//    }

// })
const playernom = document.getElementById("player-nom");
const playernationalite = document.getElementById("player-nationalite");
const playerpace = document.getElementById("player-pace");
const playershooting = document.getElementById("player-shooting");
const playerpassing = document.getElementById("player-passing");
const playerdriblling = document.getElementById("player-driblling");
const playerdefending = document.getElementById("player-defending");
const playerphysical = document.getElementById("player-physical");
const playerclub = document.getElementById("player-club");
const playerrating = document.getElementById("player-rating");
const playerphoto = document.getElementById("player-photo");
const playerlogo = document.getElementById("player-logo");
const ajoutbtn = document.querySelector(".ajout-btn");


ajoutbtn.addEventListener('click', function () {

    let newPlayer = {};



    newPlayer.nom = playernom.value
    newPlayer.nationality = playernationalite.value
    newPlayer.pace = playerpace.value
    console.log(playerpace);
    
    newPlayer.physical = playerphysical.value
    newPlayer.club = playerclub.value
    newPlayer.dribbling = playerdriblling.value
    newPlayer.defending = playerdefending.value
    newPlayer.passing = playerpassing.value
    newPlayer.shooting = playershooting.value
    newPlayer.rating = playerrating.value
    newPlayer.photo = playerphoto.value
    newPlayer.logo = playerlogo.value
    newPlayer.position= pos.value
    console.log("ana hna");

    data.players.unshift(newPlayer)
    afficherData(data)
    console.log(data);



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
