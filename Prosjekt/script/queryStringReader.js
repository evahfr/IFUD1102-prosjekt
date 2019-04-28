$(document).ready(function() {
    var queryString = window.location.search.substring(1);
    var queries = queryString.split("&");
    var cruiseDest = "";
    var cruiseId = "";

    console.log(queries);
    queries.forEach( function(element) {
        var paramName = element.split("=")[0].trim();
        var paramValue = element.split("=")[1].trim();

        if (paramName === "cruiseId") {
            cruiseId = paramValue;

            // Setter verdien på destinasjonsvalget i skjemaet
            $('#cruisetype').val(cruiseId);

            if (cruiseId === "1") {
                cruiseDest = "Lofoten";
            } else if (cruiseId === "2") {
                cruiseDest = "Henningsvær";
            } else if (cruiseId === "3") {
                cruiseDest = "Bodø";
            }

            // Definerer tekst øverst i bestillingsskjema om hvilken reise som er valgt
            $('#cruiseDestination').text("Du bestiller nå reise for " + cruiseDest + " Cruise");
        }
    });
});