var saveBtn = $('.saveBtn');
$('#currentDay').text(moment().format('dddd MMMM do YYYY'));


function timeColor () {
    // Pulls hours for the planner
    var hour = moment().hours();

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
        }
    })
};

// Displays items from the user's local storage.
function planStuff () {
    $('.hour').each(function() {
        // Refers to a text object the user puts in.
        var currently = $(this).text();
        // Writes the user text into local storage
        var currentPlan = localStorage.getItem(currently);
    
        // If there is something in localstorage write it to the screen.
        if (currentPlan !== null) {
            $(this).siblings(".plan").val(currentPlan)
        }
    });
};

// Writes the user input and corresponding hour to local storage.
saveBtn.on('click', function () {
    //Lines up the time.
    var time = $(this).siblings('.hour').text();
    // Gets the value of the user input.
    var planner = $(this).siblings('.plan').val();

    //Save the text from the input event into local storage along with the time.
    localStorage.setItem(time, planner);
});

//Calls the functions.
timeColor();
planStuff();