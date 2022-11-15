// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var timeDisplayEl = $('#currentDay');
var past = $('.past');
var present = $('.present');
var future = $('.future');
var hours = $('.hours');

var d = document.getElementById("div");
var tableDiv = document.querySelectorAll("div");
var saveButton = document.querySelectorAll("button");



$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    $(document).ready(function () {
        $(".saveBtn").on("click", function () {
          var text = $(this).siblings(".description").val();
          var time = $(this).parent().attr("id")
          localStorage.setItem(time, text);
        })
      });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    setTimeState();
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
     renderLastRegistered();
    // TODO: Add code to display the current date in the header of the page.
    setInterval(displayTime, 1000);
});

//displays current time 
var displayTime = function () {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
}

//sets the blocks to display if it's in future or the past 
var setTimeState = function () {
    for (let i = 0; i < tableDiv.length; i++) {
        if (dayjs().hour() == tableDiv[i].id) {
            tableDiv[i].classList.add('present');
        } else if (dayjs().hour() < tableDiv[i].id) {
            tableDiv[i].classList.add('future');
        } else {
            tableDiv[i].classList.add('past');
        }
    }
}

//function renders text from local storage 
var renderLastRegistered = function(){
    $("#9 .description").val(localStorage.getItem("9"))
    $("#10 .description").val(localStorage.getItem("10"))
    $("#11 .description").val(localStorage.getItem("11"))
    $("#12 .description").val(localStorage.getItem("12"))
    $("#13 .description").val(localStorage.getItem("13"))
    $("#14 .description").val(localStorage.getItem("14"))
    $("#15 .description").val(localStorage.getItem("15"))
    $("#16 .description").val(localStorage.getItem("16"))
    $("#17 .description").val(localStorage.getItem("17"))
}
