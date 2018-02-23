/*eslint-env browser */
/*Looping a Triangle
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######*/

var i;
var str = '';
for (i = 1; i <= 7; i += 1) {
    str = str + "#";
    window.console.log(str);
}
