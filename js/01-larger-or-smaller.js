/*eslint-env browser */
/*Larger or Smaller?
Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.*/

var int1;
var int2;

int1 = parseInt(window.prompt("Enter a number"));
int2 = parseInt(window.prompt("Enter a number"));

if (int1 > int2) {
        window.document.write("Number: " + int1 + "is greather than " + int2);
} 
else if (int2 > int1) {
          window.document.write("Number: " + int2 + "is greather than " + int1);     
} 
else {                  
    window.document.write("The numbers are equals");
}
