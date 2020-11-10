
    const saisietxt = document.getElementById("result");
    /**récupère les donnée saisie par l'utilisateur */
    const value = document.getElementById("value").value;  
    /**écouteur d'événement sur la saisie texte  */
    ecoutesaisie = addEventListener ('input', updatesaisie);
    function updatesaisie(e){
        saisietxt.textContent = e.target.value;
    }

function send (){
    /**requete d'envoi JSON modifier en text */
    /**inscription des donnée récupérer par value et par écouteur d'événement */
    var request = new XMLHttpRequest();
    request.open("POST", "https://mockbin.com/request");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(value)); 

    saisietxt.innerHTML=value;

    /**requète de récupération de JSON  */

    request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.postData.text);
        console.log(this.responseText);
    }

};
}









