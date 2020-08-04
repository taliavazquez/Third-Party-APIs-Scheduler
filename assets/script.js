//function for time
function setDate() {
  const todaysDate = $("#currentDay");
  const date = moment().format("dddd, MMMM Do YYYY, h:mm a");
  todaysDate.html(date);
}
function hourList() {
  var containerDiv = $(".container");
  //hours loop
  for (let i = 10; i <= 18; i++) {
    var currentDiv = $("<div " + "class=flex-container;'>" + "</div>");
    if (i <= 11) var labelHour = $("<p id='hourLabel'>" + i + "00" + "</p>");
    else var labelHour = $("<p id='hourLabel'>" + i + "00" + "</p>");
    var inputText = $("<input id=" + "txt" + i + " class='inputText'></input>");
    var saveBtn = $(
      "<button id=" + i + " class='buttonColor'>" + "Save" + "</button>"
    );
    currentDiv.append(labelHour);
    currentDiv.append(inputText);
    currentDiv.append(saveBtn);
    containerDiv.append(currentDiv);
  }
  //after creating the elements, fill out with the input text
  displayStorage();
}
//pull/edit/push (w/ parameters)
function saveStorage(index, textInput) {
  //pull/declare
  if (JSON.parse(localStorage.getItem("todo")))
    var arrayTodo = JSON.parse(localStorage.getItem("todo"));
  else var arrayTodo = [9];
  //info to save, edit
  arrayTodo[index - 10] = textInput;
  //push/save
  localStorage.setItem("todo", JSON.stringify(arrayTodo));
  console.log(JSON.parse(localStorage.getItem("todo")));
}
//pull/display (recorded information shown) (w/o parameters)
function displayStorage() {
  if (JSON.parse(localStorage.getItem("todo"))) {
    var arrayTodo2 = JSON.parse(localStorage.getItem("todo"));
    console.log(arrayTodo2);
    for (let i = 10; i <= 18; i++) {
      var inputTextId = "#txt" + i;
      $(inputTextId).val(arrayTodo2[i - 10]);
    }
  }
  //validate
  else console.log("Talia, local storage not found");
}

//every element with this class will call this function using jQuery (saveButton)
$(document).ready(function() {
  $(".buttonColor").click(function(event) {
    event.preventDefault();
    var textId = "#txt" + this.id;
    var textInput = $(textId).val();
    saveStorage(this.id, textInput);
  });
});

setDate();
hourList();
