function checkPassword() {

    let answer = document.getElementById("password").value.toUpperCase();

    if(answer === "CROWSNEST"){

        document.getElementById("output").innerHTML = "ACCESS GRANTED";

        setTimeout(function(){

            window.location.href = "level2.html";

        },1500);

    } else {

        document.getElementById("output").innerHTML = "ACCESS DENIED";

    }

}
