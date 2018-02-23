/*eslint-env browser */

/*Countdown

Write an application that counts down to 0 based on the number that a user passes into a prompt. If the number is 10, it should count down from 10 to 0. If the number is 100, it should count down from 100 to 0 and so on.  */

var countdown = parseInt(window.prompt("Enter a number to the countdown:"));

if (countdown > 0) {
    do {
        window.document.write(countdown + "<br>");
        countdown -= 1;
    } while (countdown >= 0);
} else {
    window.document.write("Try again");
}


