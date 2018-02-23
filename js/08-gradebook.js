/*eslint-env browser */
/*Gradebook

Breate an application that records the point totals for five students. The application should prompt the user to enter the points for Ursula. Then for Paul. Then for Henry. Then for Tabitha. Finally for Lucy. Then, these marks are used to determine the corresponding grade. The range for these grades is outlined below. All 5 students and their grades should be displayed within the console window along with the average grade for all 5 students:*/

var students = ["Ursula", "Paul", "Henry", "Tabitah", "Lucy"];
var grade;
var points = 0;
var studentsPoints = [0, 0, 0, 0, 0];
var i;
var totalPoints = 0;
var averagePoints;

for (i = 0; i <= 4; i += 1) {
    studentsPoints[i] = parseInt(window.prompt("Enter the point for " + students[i]));
}

window.document.write("<table>");
window.document.write("<tr><td>Students</td><td>Grades</td></tr>");

window.document.write("<tr><td>--------</td><td>------</td></tr>");



for (i = 0; i <= 4; i += 1) {
    points = studentsPoints[i];
    if (points < 60) {
        grade = "F";
    } else if (points < 70 &&  points >= 60) {
        grade = "D";
    } else if (points < 80 &&  points >= 70) {
        grade = "C";
    } else if (points < 90 &&  points >= 80) {
        grade = "B";
    } else if (points <= 100 &&  points >= 90) {
        grade = "A";
    }

    totalPoints = totalPoints + points;
    window.document.write("<tr><td>" + students[i] + "</td><td>" + grade + "<td></tr>");
}
averagePoints = totalPoints / 5;

window.document.write("<tr><td>--------</td><td>------</td><br>");
window.document.write("<tr><td>Average Points</td><td>" + averagePoints + "</td></tr>");


window.document.write("</table>");





       

