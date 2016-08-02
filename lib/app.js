var red = [0, 100, 63];
var orange = [40, 100, 40];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];


var user = prompt("Draw your name here to see the animation!").valueOf();

var myName = user;
var letterColors = [red, orange, green, blue, purple];


if (15 > 5) bubbleShape = "circle";
else bubbleShape = "square";

drawName(myName, letterColors);
bounceBubbles();