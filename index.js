


const saisietxt = document.getElementById("result");
const value = document.getElementById("value").value;  /**récupère les donnée saisie par l'utilisateur */

/**écouteur d'événement sur la saisie texte  */

ecoutesaisie = addEventListener ('input', updatesaisie);
function updatesaisie(e){
    
}

function send (){

    var resultat = document.getElementById("result");
    var request = new XMLHttpRequest();
    
request.open("POST", "https://mockbin.com/request");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(value)); /**requete d'envoi JSON modifier en text */

resultat.innerHTML=value; /**inscription des donnée récupéré par value et par écouteur d'événement */


request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.postData.text);
        console.log(this.responseText);
    }

};
}









