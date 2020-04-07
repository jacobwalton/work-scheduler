function getDate() {
  var today = moment();
  var getDate = $("#currentDay");
  getDate.addClass("description");
  $(".description").text(today.format("MM-DD-YYYY"));
  $("#currentDay").append(getDate);
}
// append text to jumbotron to display current day (day of week, month, date)

//create conditional to see if time is past present or future(Use moment.js momentjs.com)
//create using empty string
//assign to appropriate class

var hour = parseInt($("#hour").text());
var timeBlock = moment();
var now = moment(timeBlock.format("hh"));
console.log(now);
if (hour > now) {
  $("textarea").addClass("future");
} else if (hour == now) {
  $("textarea").addClass("present");
} else {
  $("textarea").addClass("past");
}

//save input to local storage when save btn is clicked
