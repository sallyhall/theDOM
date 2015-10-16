var clearBtn = document.getElementById("clear");
var equalsBtn = document.getElementById("equals");
var answerBox = document.getElementById("answer-box");
var calculator = document.getElementById("calculator");

function addText(button) {
  var text;
  switch (button.id){
    case "add":
      text = " + ";
      break;
    case "subtract":
      text = " - ";
      break;
    case "multiply":
      text = " * ";
      break;
    case "divide":
      text = " / ";
      break;
    default:
      text = button.innerHTML;
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

calculator.addEventListener("click", function(e) {
  var classes = e.target.className.split(" ");
  if (classes){
    classes.forEach(function(item) {
      if(item === "text"){
        addText(e.target);
      }
    });
  }
});

clearBtn.addEventListener("click",clearText);
equalsBtn.addEventListener("click",evaluateExpression);
