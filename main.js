console.log("Welcome to the DOM");

var addButton = document.getElementById("addBtn");
var subtractButton = document.getElementById("subtractBtn");
var multiplyButton = document.getElementById("multiplyBtn");
var divideButton = document.getElementById("divideBtn");
var answer = document.getElementById('answer');

var input1 = document.getElementById('num_one');
var input2 = document.getElementById('num_two');


addButton.addEventListener('click', function() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);
  answer.innerHTML = num1+num2;
  input1.value = '';
  input2.value = '';
});
subtractButton.addEventListener('click', function() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);
  answer.innerHTML = num1-num2;
  input1.value = '';
  input2.value = '';
});

multiplyButton.addEventListener('click', function() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);
  answer.innerHTML = num1*num2;
  input1.value = '';
  input2.value = '';
});

divideButton.addEventListener('click', function() {
  var num1 = Number(input1.value);
  var num2 = Number(input2.value);
  answer.innerHTML = num1/num2;
  input1.value = '';
  input2.value = '';
});
