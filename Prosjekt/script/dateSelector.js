function DisableInvalidDates(date) {
    var cruiseType = $("#cruisetype")[0].value;

    // Det tilbys kun cruise i månedene april t.o.m. september
    var invalidMonths = [0,1,2,9,10,11];
    var invalidDays = [0,1,2,3,4,5,6];

    if (cruiseType == "1") {
        // Lofoten cruise går ikke på fredager, lørdager og søndager
        invalidDays = [0,5,6];
    } else if (cruiseType == "2") {
        // Henningsvær cruise går ikke på mandager til torsdager
        invalidDays = [0,1,2,3,4];
    } else if (cruiseType == "3") {
        invalidDays = [];
    }
    
    var day = date.getDay();
    var month = date.getMonth();

    if (invalidDays.includes(day) || invalidMonths.includes(month)) {
        return [false]; 
   
    } else { 
        return [true];
    }
    
}

function setDateRange(date) {
    var cruiseType = $("#cruisetype")[0].value;
    var validDays = [];

    if (cruiseType == "1") {
        // Gyldige dager for Lofoten cruise 
        validDays = [1,2,3,4];
    } else if (cruiseType == "2") {
        // Gyldige dager for Henningsvær cruise
        validDays = [5,6];
    } else if (cruiseType == "3") {
        // Gyldige dager for Bodø cruise
        validDays = [1,2,3,4,5,6,7];
    }

    var diffStart = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : validDays[0]);
    var diffEnd = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : validDays[validDays.length - 1]);
    var startDate = new Date(date.setDate(diffStart));
    var endDate = new Date(date.setDate(diffEnd));

    $("#start").val(startDate.getDate().toString().padStart(2, "0") + "/" + (startDate.getMonth() + 1).toString().padStart(2, "0") + "/" + startDate.getFullYear());
    $("#slutt").val(endDate.getDate().toString().padStart(2, "0") + "/" + (endDate.getMonth() + 1).toString().padStart(2, "0") + "/" +  endDate.getFullYear());
    $("#antall_dager").val(validDays.length);
}

$(function() {

    $(".datepicker").datepicker({
        dateFormat: "dd/mm/yy",
        firstDay: 1,
        changeMonth: true,
        changeYear: true,
        minDate: "+1w",
        maxDate: "+2yr",
        beforeShowDay: DisableInvalidDates,
        monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec" ],
        dayNamesMin: [ "Sø", "Ma", "Ti", "On", "To", "Fr", "Lø" ]
    });

    $(".datepicker").change(function() {
        var selectedDateString = $(".datepicker")[0].value.split("/");
        var date = new Date(parseInt(selectedDateString[2], 10), parseInt(selectedDateString[1], 10) - 1, parseInt(selectedDateString[0], 10));

        setDateRange(date);
    });
});