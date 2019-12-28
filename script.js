$(document).ready(function() {
    $('.load').hide();
});

function sleep (time) {
    $('.load').show();
    return new Promise((resolve) => setTimeout(resolve, time));
}

function teste(){
    var login = document.getElementById("login").value;
    alert("CLICO " + login);
    sleep(2000).then(() => {
        $(document).ready(function() {

        });
        window.location.assign("index.html");   
    });
    

}

