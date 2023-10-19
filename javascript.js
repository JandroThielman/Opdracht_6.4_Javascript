var som1;
var som2;
var som3;

function calculate(p1, p2) {
    var som1 = 400 + 20;
    console.log(som1);
    document.getElementById("som1").innerHTML = som1;
  }

function multiplyByFive() {
    var som2 = Number * 5;
    Number = document.getElementById("Number").value;
    document.getElementById("result").innerHTML = som2;
    console.log(som2);
}

function calculateMinutes() {
    var som3 = Minutes / 60;
    Minutes = document.getElementById("Minutes").value;
    document.getElementById("result1").innerHTML = som3;
    console.log(som3);
}