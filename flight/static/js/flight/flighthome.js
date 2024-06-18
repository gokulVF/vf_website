// FLIGHT FROM
$(function () {
$("#from").autocomplete({
    source: function (request, response) {
        $.ajax({
            url: "/search_destinations_flight/",
            dataType: "json",
            data: {
                query: request.term
            },
            success: function (data) {
                response(data.data);
            }
        });
    },
    minLength: 2,
    select: function (event, ui) {
        // Update the hidden input fields with selected values
        $("#citycodeInput").val(ui.item.cityCode);
        $("#airportCodeInput").val(ui.item.AirportCode);
        $("#aircityname").val(ui.item.CityName);
    }
});
});

// FLIGHT TO
$(function () {
$("#to").autocomplete({
    source: function (request, response) {
        $.ajax({
            url: "/search_destinations_flight/",
            dataType: "json",
            data: {
                query: request.term
            },
            success: function (data) {
                response(data.data);
            }
        });
    },
    minLength: 2,
    select: function (event, ui) {
        // Update the hidden input fields with selected values
        $("#tocitycodeInput").val(ui.item.cityCode);
        $("#toairportCodeInput").val(ui.item.AirportCode);
        $("#toaircityname").val(ui.item.CityName);
    }
});
});

// SHOW PAX FORM
function showPaxForm() {
    var flightForm = document.getElementById("pas_form")
    if(flightForm.style.display === "none") {
        flightForm.style.display = "block";
    } else {
        flightForm.style.display = "none"
    }
}



// DATE
document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2); // Months are zero-based
    var day = ('0' + today.getDate()).slice(-2);

    var todayString = year + '-' + month + '-' + day;

    // Set the default value and minimum date to today for the start date input
    var startDateInput = document.getElementById('check-in');
    startDateInput.value = todayString;
    startDateInput.min = todayString;

    // Set the next date input based on the start date
    function setNextDate() {
        var startDate = new Date(startDateInput.value);
        if (!isNaN(startDate.getTime())) {
            var nextDate = new Date(startDate);
            nextDate.setDate(startDate.getDate() + 1); // Increment by one day

            var year = nextDate.getFullYear();
            var month = ('0' + (nextDate.getMonth() + 1)).slice(-2); // Months are zero-based
            var day = ('0' + nextDate.getDate()).slice(-2);

            var nextDateString = year + '-' + month + '-' + day;
            document.getElementById('check-out').value = nextDateString;
            document.getElementById('check-out').min = nextDateString;
        }
    }

    startDateInput.addEventListener('change', setNextDate);

    // Set the initial next date
    setNextDate(); 
});
                                        
function addFlight() {
    var container = document.getElementById("multitrip-container");

    // Create a new flight container
    var newFlight = document.createElement("div");
    newFlight.className = "multitrip-container-item";
    newFlight.style.display = "none";

    // Your existing code for the flight input fields (copy and paste from the original code)
    newFlight.innerHTML = `<div class="d-flex col-md-12">
                                        <fieldset class="scheduler-border col-md-3">
                                            <legend class="scheduler-border">From</legend>
                                            <div class="control-group">
                                                <div class="controls bootstrap-timepicker">
                                                    <input type="text"  id="from" placeholder="Enter The City" style="font-size: 14px;">
                                                    <i class="icon-time"></i>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset class="scheduler-border col-md-2">
                                            <legend class="scheduler-border">To</legend>
                                            <div class="control-group">
                                                <div class="controls bootstrap-timepicker">
                                                    <input type="text" id="to" placeholder="Enter The City" style="font-size: 14px;">
                                                    <i class="icon-time"></i>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset class="scheduler-border col-md-2">
                                            <legend class="scheduler-border">Departure</legend>
                                            <div class="control-group">
                                                <div class="controls bootstrap-timepicker">
                                                    <input type="date" id="checkOutDate"  class="check" data-date="" data-date-format="DD MMMM YYYY" value="2023-12-23" style="font-size: 14px;">
                                                    <i class="icon-time"></i>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset class="scheduler-border col-md-1 mb-3">
                                            <legend class="scheduler-border">Class</legend>
                                            <div class="control-group">
                                                <div class="controls bootstrap-timepicker">
                                                    <select style="border: none;padding: 2px 3px;" name= "classes">
                                                        <option value="All">All</option>
                                                        <option selected value="Econamy">Econamy</option>
                                                        <option value="Business">Business</option>
                                                        <option value="First">First</option>
                                                    </select>
                                                    <i class="icon-time"></i>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset class="scheduler-border col-md-3 mb-3">
                                            <legend class="scheduler-border">Travellers & Class</legend>
                                            <div class="control-group">
                                                <div class="controls bootstrap-timepicker">
                                                    <input type="text" placeholder="1 Room & 0 Adults" id="room" style="font-size: 14px;" onclick="showForm2()">
                                                    <input type="hidden" id="roomInfoInput" name="roomInfo">
                                                    <input type="hidden" id="totalRoomInfoInput" name="totalRoomInfo">
                                                    <i class="icon-time"></i>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div id="flight_inp_form4" >
                                            <div class="inp-form" >
                                                <div class="d-flex">
                                                    <div class="col_1">
                                                        <label for="Adults">Adults</label>
                                                        <select name="Adults" id="Adult_inp">
                                                            <option value="0">Select</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                    </div>
                                                    <div class="col_1"> 
                                                        <label for="Child">Child</label>
                                                        <select name="Childs" id="Child_inp">
                                                            <option value="0">Select</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                    </div>
                                                    <div class="col_1">
                                                        <label for="Infant">Infant</label>
                                                        <select name="Infants" id="Adult_inp">
                                                            <option value="0">Select</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    `;

    // Append the new flight container to the main container
    container.appendChild(newFlight);

    // Toggle the display of the new flight container
    if (newFlight.style.display === "none") {
        newFlight.style.display = "block";
    } else {
        newFlight.style.display = "none";
    }
}



function showFlightForm2() {
    var flightForm = document.getElementById("flight_inp_form2")
    if(flightForm.style.display === "none") {
        flightForm.style.display = "block";
    } else {
        flightForm.style.display = "none"
    }
}

function showForm() {
    var flightForm = document.getElementById("flight_inp_form3")
    if(flightForm.style.display === "none") {
        flightForm.style.display = "block";
    } else {
        flightForm.style.display = "none"
    }
}
function showForm2() {
    var flightForm = document.getElementById("flight_inp_form4")
    if(flightForm.style.display === "none") {
        flightForm.style.display = "block";
    } else {
        flightForm.style.display = "none"
    }

    var header = document.getElementById("myTab");
    var btns = header.getElementsByClassName("trip-btn");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}}