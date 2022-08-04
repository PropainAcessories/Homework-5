// Save button
var saveBtn = $('.saveBtn');
// Displays the current date.
$('#currentDay').text(moment().format('dddd MMMM do YYYY'));


function timeColor () {
    // Pulls hours for the planner
    var hour = moment().hours();
    // Runs the function for each time-block column.
    $('.time-block').each(function() {
        // Compares Hours in the HTML to the current time.
        var rightNow = parseInt($(this).attr("id"));

        // Makes future times green
        if (rightNow > hour) {
            $(this).addClass('future');
        // Makes the current hour red
        } else if (rightNow === hour) {
            $(this).addClass('present');
        // Makes the past grey
        } else {
            $(this).addClass('past');
        };
    });
};

// Displays items from the user's local storage.
function planStuff () {
    //Runs the function for every hour column.
    $('.hour').each(function() {
        // Refers to a text object the user puts in.
        var currently = $(this).text();
        // Writes the user text into local storage
        var currentPlan = localStorage.getItem(currently);
    
        // Writes relevant local storage to the plan column.
        if (currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan);
        };
    });
};

// Writes the user input and corresponding hour to local storage.
saveBtn.on('click', function () {
    //Gets the element for the time in the hour column.
    var time = $(this).siblings('.hour').text();
    // Gets the value of the user input in the plan column.
    var planner = $(this).siblings('.plan').val();

    //Sets the time and the plan in the local storage.
    localStorage.setItem(time, planner);
});

//Calls the functions.
timeColor();
planStuff();