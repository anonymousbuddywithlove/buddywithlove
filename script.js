function checkPassword() {

    let answer = document.getElementById("password").value.trim();

    if(answer === "42"){

        document.getElementById("output").innerHTML = "ACCESS GRANTED";

        setTimeout(function(){

            window.location.href = "archive2.html";
 
      },1500);     

    if(answer === "7"){

        document.getElementById("output").innerHTML = "ACCESS GRANTED";

        setTimeout(function(){

            window.location.href = "archive3.html";

      },1500);

    } else {

        document.getElementById("output").innerHTML = "ACCESS DENIED";

    }

}
