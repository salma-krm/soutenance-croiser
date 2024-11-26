
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
 
function afficherData(data){
    let html
data.forEach((e) => {
     html+=` <div class="players-contain" >
        
    </div>`
});
document.getElementById("players-container").innerHTML=html



}