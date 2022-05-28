// VARIABLES

var myTEXT = $("#myText");
var saveBtn = $(".saveBtn");
var DescriptionBox = $("input");


// Todays Date

var date = moment().format("MMMM Do, YYYY");
$("#currentDay").text(date);

// LOCAL STORAGE FUNCTION ------------------------------------------------------------------------------

$(document).ready(function () {
  // Save buttons job
  $(".saveBtn").on("click", function () {
    // Catch the value of 3rd 'dom' down, which is the user input value/class called description
    var myText = $(this).siblings(".description").val();

    // Catch the id of the 1st 'dom', which is the times, explained in the lines below(34-43)
    var timings = $(this).parent().attr("id");

    // Below saves users input on the planner even after refreshing in local storage..
    localStorage.setItem(timings, myText);

    // Logging the activity
    console.log("button is clicked");
    console.log(myText);
    console.log(timings);
  });

  // Below are timing lines, without these each value wont save

  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12pm .description").val(localStorage.getItem("12pm"));
  $("#1pm .description").val(localStorage.getItem("1pm"));
  $("#2pm .description").val(localStorage.getItem("2pm"));
  $("#3pm .description").val(localStorage.getItem("3pm"));
  $("#4pm .description").val(localStorage.getItem("4pm"));
  $("#5pm .description").val(localStorage.getItem("5pm"));
  $("#6pm .description").val(localStorage.getItem("6pm"));
});

// -----------------------------------------------------------------------------------------------------------

// COLOR CODE BASED ON TENSE

// Each 'input' box will get colour coded based on the below function
DescriptionBox.each(function (Color) {
  // "color" is 0, if "0" and counting + 9 is less than current hour, then create class PAST...
  if (CurrentHR > Color + 9) {
    // Find the 'past' class and colour GREY - CSS
    $(this).addClass("past");
  }

  // If the current hour is equals to hours counting it is PRESENT...
  if (CurrentHR == Color + 9) {
    // Find the 'present' class and colour RED - CSS
    $(this).addClass("present");
  }

  // If counting number + 9 is larger than current hour, then create class FUTURE...
  if (CurrentHR < Color + 9) {
    // Find the 'future' class and colour GREEN - CSS
    $(this).addClass("future");
  }
});
console.log(CurrentHR);