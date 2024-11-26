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
        html += ` <div class="players-contain" >
            <div  class ="player-contain1">
               
                <div class="d-flex flex-">
                <div >
                <h6>`+ player.position + `</h6>
                <h4>`+ player.rating + `</h4>
                </div>
                <img src="`+ player.photo + `" alt="">
                </div>
              <h6> `+ player.name + `</h6>
              `
        if (player.position == "GK") {
            html += `  <div>
                
                <span>`+ player.rating + `</span>
                <span>`+ player.diving+ `</span>
                <span>`+ player.handling + `</span>
                <span>`+ player.kicking + `</span>
                <span>`+ player.reflexes + `</span>
                <span>`+ player.speed +`</span>
                <span>`+ player.positioning+`</span>
                
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
           
    </div>`

    });
    document.getElementById("players-container").innerHTML = html



}