let bri = document.querySelector(".bri");

let recommendation = document.querySelector(".recommendation");
let briInfo = ["Deadpool","Grownups","Friday","White Chicks"];

bri.onclick = function(){
    recommendation.innerHTML="";
   briInfo.forEach(function(comedyMovie){
      recommendation.insertAdjacentHTML("beforeend", `<p>${comedyMovie}</p>`);
   });
};