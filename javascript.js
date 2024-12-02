let conatiner = document.getElementById("container");
var clickedCardPosition = null;
var editedPlayer = "";
var data = [];
var playerInTheLineUp = []
async function getData() {
    try {
        const response = await fetch('data.json');
        data = await response.json();

        afficherData(data);

    } catch (error) {

        console.error("Error fetching json file", error);


    }
}
getData();


function addEventListenerToDeleteButtons() {
    Array.from(document.getElementsByClassName("deleteFromData")).forEach(e => {
        e.addEventListener("click", e => {
            let name_player = e.currentTarget.value;
            data.players = data.players.filter(e =>
                e.name !== name_player
            )
            afficherData(data);
        })
    })
}


function afficherData(data) {
    let html = "";

    data.players.forEach((player) => {
        html += `<div class="card-contain-player" >
        <button class="deleteFromData" value="${player.name}"   >x</button>
        <div class="palyerCard" playe_name="${player.name}" position="${player.position}" style="display: flex;flex-direction: column;
    justify-self: center;
    align-items: center;"
     >
            <div class="card-container" >
            <div   class ="player-contain1">
            <div class="player-info" >
                <div class="d-flex  ">
                <div >
                <p id"player-position">`+ player.position + `</p>
                <h6>`+ player.rating + `</h6>
                </div>
                <img  style="width: 70px;" src="`+ player.photo + `" alt="">
                <button style="display:none" class="button-supprimer " playe="${player.name}"   >X</button>
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
    </div>
    <button class="edditbutton" value="${player.name}" >eddit</button>
   
    </div>
    `

    });
    document.getElementById("players-container").innerHTML = html;
    addEventToCardPositionPlace();
    addEventClickToCardWithValues();
    addEventListenerToDeleteButtons();
    addEventEditedPlayer();
}



const formulairePlayers = document.getElementById("formulaire-players");
const addPlayer = document.querySelector(".button-add-player");
const formationPlayers = document.getElementById("formation-players");

addPlayer.addEventListener('click', function () {
    formulairePlayers.style.display = 'block';
    formationPlayers.style.display = 'none';
    document.getElementById("btn2modifier").style.display='none';

});

const pos = document.getElementById("position");
const GKPlayer = document.getElementById("GK-player");
const STPlayer = document.getElementById("ST-player");

pos.addEventListener('change', (event) => {
    if (event.target.value === 'GK') {
        STPlayer.style.display = 'none';
        GKPlayer.style.display = 'block';

    }
});



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
const playerdiving = document.getElementById("player-diving1");
const playerhandling = document.getElementById("player-handling1");
const playerkicking = document.getElementById("player-kicking1");
const playerreflexes = document.getElementById("player-reflexes1");
const playerspeed = document.getElementById("player-speed1");
const playerpositioning = document.getElementById("player-positioning1");
// ajouter nouvelle players

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
    const driblling = playerdriblling.value.trim();
    const defending = playerdefending.value.trim();
    const nationality = playernationalite.value.trim();
    const diving = playerdiving.value.trim();
    const handling = playerhandling.value.trim();
    const kicking = playerkicking.value.trim();
    const reflexes = playerreflexes.value.trim();
    const speed = playerspeed.value.trim();
    const positioning = playerpositioning.value.trim();






    let status = true;
    let nameRegex = /^[a-zA-Z\s]+$/;
    let numberRegex = /^[0-9]{2}$/;
    let photoregex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;

    if (name.length == 0 || !nameRegex.test(name) || name.length < 2 || name.length > 50) {
        if (name.length == 0) {
            playernom.nextElementSibling.style.display = "block"
            playernom.nextElementSibling.style.color = "red"
            playernom.style.border = 'solid 2px red';
            status = false
        }
        else {
            playernom.nextElementSibling.style.display = "block"
            playernom.nextElementSibling.style.color = "red"
            playernom.nextElementSibling.textContent = "the value you enter not much the requerment"
            playernom.style.border = 'solid 2px red';
            status = false

        }
    }


    if (nationality.length == 0 || !nameRegex.test(nationality) || nationality.length < 2 || nationality.length > 50) {
        if (nationality.length == 0) {
            playernationalite.nextElementSibling.style.display = "block"
            playernationalite.nextElementSibling.style.color = "red"
            playernationalite.style.border = 'solid 2px red';
            status = false

        }
        else {
            playernationalite.nextElementSibling.style.display = "block"
            playernationalite.nextElementSibling.style.color = "red"
            playernationalite.nextElementSibling.textContent = "the value you enter not much the requerment"
            playernationalite.style.border = 'solid 2px red';
            status = false

        }
    };
    if (photo.length == 0 || !photoregex.test(photo)) {
        playerphoto.nextElementSibling.style.display = "block"
        playerphoto.nextElementSibling.style.color = "red"
        playerphoto.style.border = 'solid 2px red';
        status = false
    };
    if (pace.length == 0) {
        playerpace.nextElementSibling.style.display = "block"
        playerpace.nextElementSibling.style.color = "red"
        playerpace.style.border = 'solid 2px red';
        status = false
    }
    else if (!numberRegex.test(pace)) {
        playerpace.nextElementSibling.style.display = "block"
        playerpace.nextElementSibling.style.color = "red"
        playerpace.nextElementSibling.textContent = "the value you enter not much the requerment"
        playerpace.style.border = 'solid 2px red';
        status = false

    }
    if (rating.length == 0) {
        playerrating.nextElementSibling.style.display = "block"
        playerrating.nextElementSibling.style.color = "red"
        playerrating.style.border = 'solid 2px red';
        status = false
    }
    if (physical.length == 0) {
        playerphysical.nextElementSibling.style.display = "block"
        playerphysical.nextElementSibling.style.color = "red"
        playerphysical.style.border = 'solid 2px red';
        status = false
    }
    if (club.length == 0) {
        playerclub.nextElementSibling.style.display = "block"
        playerclub.nextElementSibling.style.color = "red"
        playerclub.style.border = 'solid 2px red';
        status = false
    }
    if (logo.length == 0) {
        playerlogo.nextElementSibling.style.display = "block"
        playerlogo.nextElementSibling.style.color = "red"
        playerlogo.style.border = 'solid 2px red';
        status = false
    }
    if (flag.length == 0) {
        playerflag.nextElementSibling.style.display = "block"
        playerflag.nextElementSibling.style.color = "red"
        playerflag.style.border = 'solid 2px red';
        status = false
    }
    if (passing.length == 0) {
        playerpassing.nextElementSibling.style.display = "block"
        playerpassing.nextElementSibling.style.color = "red"
        playerpassing.style.border = 'solid 2px red';
        status = false
    }
    if (defending.length == 0) {
        playerdefending.nextElementSibling.style.display = "block"
        playerdefending.nextElementSibling.style.color = "red"
        playerdefending.style.border = 'solid 2px red';
        status = false
    }
    if (shooting.length == 0) {
        playershooting.nextElementSibling.style.display = "block"
        playershooting.nextElementSibling.style.color = "red"
        playershooting.style.border = 'solid 2px red';
        status = false
    }
    if (driblling.length == 0) {
        playerdriblling.nextElementSibling.style.display = "block"
        playerdriblling.nextElementSibling.style.color = "red"
        playerdriblling.style.border = 'solid 2px red';
        status = false
    }


    if (pos.value === "GK") {
        

        newPlayer.name = playernom.value
        newPlayer.rating = playerrating.value
        newPlayer.nationality = playernationalite.value
        newPlayer.handling = playerhandling.value
        newPlayer.physical = playerphysical.value
        newPlayer.club = playerclub.value
        newPlayer.kicking = playerkicking.value
        newPlayer.reflexes = playerreflexes.value
        newPlayer.positioning = playerpositioning.value
        newPlayer.speed = playerspeed.value
        newPlayer.photo = playerphoto.value
        newPlayer.logo = playerlogo.value
        newPlayer.flag = playerflag.value
        newPlayer.diving =playerdiving.value
        newPlayer.position = pos.value



    }
    else {
        newPlayer.name = playernom.value
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

    }



    if (status) {
        data.players.unshift(newPlayer)
        afficherData(data)
    }
});
const players = document.getElementById("players-container");
var selectedPosition;
function addEventToPlayersCard() {
}

function addEventToCardPositionPlace() {
    let cardsPosition = document.querySelectorAll(".cardposition");


    cardsPosition.forEach(card => {
        card.addEventListener('click', (element) => {
            clickedCardPosition = element.currentTarget;
            console.log(clickedCardPosition);
        })
    })
};

function addEventClickToCardWithValues() {
    let cardsplayerwithvalues = document.querySelectorAll(".palyerCard");
    cardsplayerwithvalues.forEach(card => {
        card.addEventListener('click', element => {

            if (clickedCardPosition != null) {

                let position = clickedCardPosition.getAttribute("position");
                let playerposition = element.currentTarget.getAttribute("position");

                let name = element.currentTarget.getAttribute("playe_name")
                if (position == playerposition) {

                    document.getElementById(clickedCardPosition.id).innerHTML = element.currentTarget.innerHTML;
                    document.getElementById(clickedCardPosition.id).setAttribute("name_player", name);
                    let filteredPlayers = data.players.filter((e) => e.name !== name);

                    let playerToMove = data.players.filter((e) => e.name === name)[0];

                    if (playerToMove) {
                        clickedCardPosition.previousElementSibling.style.display = "block";
                        data.players = filteredPlayers;
                        playerInTheLineUp.push(playerToMove);
                    } else {
                        console.log(`Player with name "${name}" not found.`);
                    }
                    afficherData(data)
                } else {
                    console.log("not work")
                }
            }
            clickedCardPosition == null


            console.log(playerInTheLineUp)
        });
    })

};


Array.from(document.getElementsByClassName("button_remove_player_from_the_lineup")).forEach((e) => {
    e.addEventListener("click", (event) => {

        const nextElem = event.currentTarget.nextElementSibling

        if (nextElem) {

            let playeName = nextElem.getAttribute("name_player")
            nextElem.removeAttribute("name_player")
            let filteredPlayers = playerInTheLineUp.filter((e) => e.name === playeName)[0];
              data.players.unshift(filteredPlayers);
            afficherData(data)


            nextElem.innerHTML = ` 
                <button class="cardid1" id="card-contain-id0">
                    <div class="card-1">+</div>
                </button>`;
        }


        event.currentTarget.style.display = "none";
    });
});



