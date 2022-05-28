
//setting local storage;
//add event listeners to all save buttons, specify clicks
$(".saveBtn").on("click", function(){
    //grab values from text area
   const userInput = $(this).siblings(".textArea").val();
    //grab time from parent with data-attr
   const currentHour = $(this).parent().data("time");

    //set time and click events into local storage
    localStorage.setItem(currentHour,userInput)
});

//setting current day 
const date = moment().format("MMM Do YY"); 
$( "#date" ).append(`<h2>${date}</h2>`);
//getting local storage
$("#row1 .textArea").val(localStorage.getItem("9"));
$("#row2 .textArea").val(localStorage.getItem("10"));
$("#row3 .textArea").val(localStorage.getItem("11"));
$("#row4 .textArea").val(localStorage.getItem("12"));
$("#row5 .textArea").val(localStorage.getItem("13"));
$("#row6 .textArea").val(localStorage.getItem("14"));
$("#row7 .textArea").val(localStorage.getItem("15"));
$("#row8 .textArea").val(localStorage.getItem("16"));
$("#row9 .textArea").val(localStorage.getItem("17"));

//setting colors:

function timeColor(){
 //get current time / using moment
 const currentHour = moment().hour();
 //loop through time blocks to compare current time
 $(".timeDiv").each(function(){
 //get current div hour from data-
 const divTime = $(this).data("time")
    //create if else statements to add classes of past present and future
    if (currentHour === divTime) {
        //remove class
        $(this).removeClass
        //add class for current time
        $(this).addClass("present")
    } else if(currentHour > divTime) {
        //add class for past time
        $(this).addClass("past")
        
    } else{
        //add class for future time
        $(this).addClass("future")
    }
 });
};
timeColor()