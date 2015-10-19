//set variable for answer box
var answerBox = document.getElementById("answer-box");

//add corresponding text for the button that was clicked to the answer box
function addText(button){
  var text;
  if (button.id==="multiply"){
    text=" * "
  }else if (button.classList.contains("operator")) {
    text = " "+ button.innerHTML +" ";
  }
  else{
    text = button.innerHTML;
  }
  answerBox.innerHTML = answerBox.innerHTML + text;
}

//if a button in the calculator that has the text class is clicked, call addtext
document.getElementById("calculator").addEventListener("click", function(e) {
  var classes = e.target.className.split(" ");
  if (classes){
    classes.forEach(function(item) {
      if(item === "text"){
        addText(e.target);
      }
    });
  }
});

//if the clear button is clicked, clear the answer box
document.getElementById("clear").addEventListener("click",function() {
  answerBox.innerHTML = "";
});

//if the equals button is clicked, evaluate the expression in the answer box
document.getElementById("equals").addEventListener("click",function(){
  answerBox.innerHTML = eval(answerBox.innerHTML);
});
