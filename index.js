


function send (){

    var request = new XMLHttpRequest();
request.open("POST", "https://mockbin.com/request");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(value));

value=document.getElementById("value").value;
resultat=document.getElementById("result");
resultat.innerHTML=value;

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        var response = JSON.parse(this.postData.text);
        console.log(this.responseText);
    }

};
}









