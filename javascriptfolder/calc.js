var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var answer = document.getElementById("answer");
var form = document.getElementById("form")
form.addEventListener("submit", function (event) {
    var x = parseFloat(numField1.value);
    var y = parseFloat(numField2.value);

    var solve = x / y;
    var percent = solve * 100;

    var result = answer.innerText = "Answer: " + percent + "%"
    event.preventDefault()

})