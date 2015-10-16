
var clearBtn = document.getElementById("clear");
var addBtn = document.getElementById("add");
var subtractBtn = document.getElementById("subtract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");
var decimalBtn = document.getElementById("decimal")
var equalsBtn = document.getElementById("equals");
var answerBox = document.getElementById("answer-box");

var oneBtn = document.getElementById("one");
var twoBtn = document.getElementById("two");
var threeBtn = document.getElementById("three");
var fourBtn = document.getElementById("four");
var fiveBtn = document.getElementById("five");
var sixBtn = document.getElementById("six");
var sevenBtn = document.getElementById("seven");
var eightBtn = document.getElementById("eight");
var nineBtn = document.getElementById("nine");
var zeroBtn = document.getElementById("zero");

function addText() {
  var text;
  switch (this){
    case addBtn:
      text = " + ";
      break;
    case subtractBtn:
      text = " - ";
      break;
    case multiplyBtn:
      text = " * ";
      break;
    case divideBtn:
      text = " / ";
      break;
    default:
      text = this.innerHTML;
      break;
      }
  answerBox.innerHTML = answerBox.innerHTML + text;
}

function clearText() {
  answerBox.innerHTML = "";
}

function evaluateExpression(){
  answerBox.innerHTML = eval(answerBox.innerHTML);
}


oneBtn.addEventListener("click",addText);
twoBtn.addEventListener("click",addText);
threeBtn.addEventListener("click",addText);
fourBtn.addEventListener("click",addText);
fiveBtn.addEventListener("click",addText);
sixBtn.addEventListener("click",addText);
sevenBtn.addEventListener("click",addText);
eightBtn.addEventListener("click",addText);
nineBtn.addEventListener("click",addText);
zeroBtn.addEventListener("click",addText);

addBtn.addEventListener("click",addText);
subtractBtn.addEventListener("click",addText);
multiplyBtn.addEventListener("click",addText);
divideBtn.addEventListener("click",addText);
decimalBtn.addEventListener("click",addText);

clearBtn.addEventListener("click",clearText);
equalsBtn.addEventListener("click",evaluateExpression);
