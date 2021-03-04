// Heading

var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));

// Input & Save content
/*
$(".saveBtn").on("click", function() {
    let todo = $(this).siblings(".description").val();
    let rowTime = $(this).parent().attr("id");
    localStorage.setItem(rowTime, todo);
});
*/
// Set as Past, Present, or Future.

let hourlyTime = function() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var scheduleBlock = parseInt($(this).attr("id"));
        if (scheduleBlock === currentHour) {
            $(this).addClass("present");
        }
        else if (scheduleBlock < currentHour) {
            $(this).addClass("past");
        }
        else {
            $(this).addClass("future");
        }
    });
}

// Run hourlyTime function

hourlyTime();

/*
// Retrieve schedule items for each time block

$("#content-08").val(localStorage.getItem("08"));

$("#content-09").val(localStorage.getItem("09"));

$("#content-10").val(localStorage.getItem("10"));

$("#content-11").val(localStorage.getItem("11"));

$("#content-12").val(localStorage.getItem("12"));

$("#content-13").val(localStorage.getItem("13"));

$("#content-14").val(localStorage.getItem("14"));

$("#content-15").val(localStorage.getItem("15"));

$("#content-16").val(localStorage.getItem("16"));

$("#content-17").val(localStorage.getItem("17"));

*/