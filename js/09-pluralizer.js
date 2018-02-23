/*eslint-env browser */

/*The Pluralizer

Write an application that prompts the user for two items: a noun and a number. The application should then evaluate the entries and write out into the browser window the number and pluralized form, like "5 cats" or "1 dog". Make sure to have the application handle a few collective nouns like "sheep" and "geese".*/

var nounP = window.prompt("Enter a singular noun:");
var numberP = parseInt(window.prompt("Enter a number:"));
var nounF;

if (nounP !== null) {
    if (numberP > 1) {
        switch (nounP) {
        case "sheep":
            window.document.write(numberP + " " + nounP);
            break;
        case "fish":
            window.document.write(numberP + " " + nounP);
            break;
        case "deer":
            window.document.write(numberP + " " + nounP);
            break;
        case "moose":
            window.document.write(numberP + " " + nounP);
            break;
        case "swine":
            window.document.write(numberP + " " + nounP);
            break;
        case "buffalo":
            window.document.write(numberP + " " + nounP);
            break;
        case "shrimp":
            window.document.write(numberP + " " + nounP);
            break;
        default:
            if (nounP.endsWith("f")) {
                nounF = nounP.substr(0, nounP.length - 1) + "ves";
                window.document.write(numberP + " " + nounF);
            } else if (nounP.endsWith("fe")) {
                nounF = nounP.substr(0, nounP.length - 2) + "ves";
                window.document.write(numberP + " " + nounF);
            } else if (nounP.endsWith("y")) {
                nounF = nounP.substr(0, nounP.length - 1) + "ies";
                window.document.write(numberP + " " + nounF);
            } else if (nounP.endsWith("ch") || nounP.endsWith("sh") || nounP.endsWith("s") || nounP.endsWith("x") || nounP.endsWith("Z")) {
                nounF = nounP.substr(0, nounP.length) + "es";
                window.document.write(numberP + " " + nounF);
            } else {
                nounF = nounP.substr(0, nounP.length) + "s";
                window.document.write(numberP + " " + nounF);
            }
        }
    } else {
        window.document.write("Try again");
    }
} else {
    window.document.write(numberP + " " + nounP);
}
