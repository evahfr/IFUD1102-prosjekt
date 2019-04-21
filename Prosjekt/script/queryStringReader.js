var queryString = window.location.search.substring(1);
var queries = queryString.split("&");
var startTravelDate = "";
var endTravelDate = "";
var cruiseId = "";
var priceClass = "";

console.log(queries);
queries.forEach( function(element) {
    var paramName = element.split("=")[0].trim();
    var paramValue = element.split("=")[1].trim();

    if (paramName === "fromDate") {
        startTravelDate = paramValue;

    } else if (paramName === "toDate") {
        endTravelDate = paramValue;

    } else if (paramName === "cid") {
        cruiseId = paramValue;

    } else if (paramName === "pcls") {
        priceClass = paramValue;

    }
});

$('#cruiseDestination').text(cruiseId);
$("#fromDate").text(startTravelDate);
$("#toDate").text(endTravelDate);
$("#price").text(priceClass);