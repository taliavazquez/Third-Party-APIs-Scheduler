//function for time
function setDate() {
    const todaysDate = $("#currentDay");
    const date = moment().format("dddd, MMMM Do YYYY, h:mm a");
    todaysDate.html(date)
  }
  function hourList(){
    var containerDiv = $(".container");
    
    for(let i=9; i<=17; i++){
    var currentDiv = $("<div " + "style='display:flex;'>" + "</div>");
    if(i<=11)
        var labelHour = $("<p id='hourLabel'>" +(i)+":00am"+ "</p>");
    else 
        var labelHour = $("<p id='hourLabel'>" +(i)+":00pm"+ "</p>");
    var inputText = $("<input id="+"txt"+i+" class='inputText'></input>");
    var saveBtn = $("<button id="+i+" class='buttonColor'>" + "Save" + "</button>");
    currentDiv.append(labelHour);
    currentDiv.append(inputText);
    currentDiv.append(saveBtn);
    containerDiv.append(currentDiv);
    }
  }
  function todoStorage(index, textInput){
        //pull/declare
        if (JSON.parse(localStorage.getItem("todo")))
            var arrayTodo= JSON.parse(localStorage.getItem("todo"));
        else 
            var arrayTodo= [8];    
            //info to save, edit
            arrayTodo[index-9] = textInput;
            //push/save
            localStorage.setItem("todo", JSON.stringify(arrayTodo));
            console.log(JSON.parse(localStorage.getItem("todo")));
  }

    function saveStorage

  //every element with this class will call this function using jQuery
  $(document).ready(function () {
    $(".buttonColor").click(function(event){
        event.preventDefault();
        var textId=("#txt" + this.id);
        var textInput=$(textId).val();
        todoStorage(this.id, textInput);
    });
});
  setDate();
  hourList();



  //every element with this class will call this function using JavaScript ln 37 &38
//   var clickedButton= document.querySelector ("button");
//   clickedButton.addEventListener("click",function(event){
//     console.log(event.target);

//   });
// $(document).ready(function () {
//     $(".buttonColor").click(function (e) {
//       e.preventDefault();
//       console.log(this.id);
//     });
//   });
