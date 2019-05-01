$(document).ready(function() {

    // Henter URL paramenterne og splitter dem opp i et array av strenger
    var queryString = window.location.search.substring(1);
    var queries = queryString.split("&");
    var cruiseDest = "";
    var cruiseId = "";

    // Går igjennom alle URL parametrene
    queries.forEach( function(element) {

        // Hvis det ikke er noen URL parametre returner
        if (element === "") {
            return;
        }

        var paramName = element.split("=")[0].trim();
        var paramValue = element.split("=")[1].trim();

        // Sjekker etter ønsket parameter; "cruiseId"
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