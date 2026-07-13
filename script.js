function checkPassword(correctPassword, successAction) {

    const answer = document.getElementById("password").value.trim();
    const output = document.getElementById("output");

    if (answer === correctPassword) {

        output.textContent = "ACCESS GRANTED";

        setTimeout(function () {

            if (successAction.endsWith(".html")) {

                window.location.href = successAction;

            } else {

                document.body.innerHTML = successAction;

            }

        }, 1500);

    } else {

        output.textContent = "ACCESS DENIED";

    }

}
