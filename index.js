
/**EXERCICE OPEN CLASS ROOM JAVASCRIPT SAUVEGARDE ET RECEPTION DONNEE JSON */

const saisietxt = document.getElementById("result");
/**récupère les donnée saisie par l'utilisateur */

function send() {

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            saisietxt.innerHTML = response.postData.text;
        }
        /**requete d'envoi JSON modifier en text */
        /**inscription des donnée récupérer par value et par écouteur d'événement */  
    };
/**requète de récupération de JSON apres modif saisie txt user  */
    request.open("POST", "https://mockbin.com/request");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify({ value: document.getElementById("value").value }));
}
/**écouteur d'événement sur la saisie texte et requete d'envoi et de réception  */
var ecouteform = document.getElementById("form");
ecouteform.addEventListener('submit', function (event) {
    send();
    event.preventDefault();
});











