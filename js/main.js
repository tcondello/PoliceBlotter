/**
 * Created by Mac-astr010 on 1/20/15.
 */
var map;
function initialize() {
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: new google.maps.LatLng(40.435467, -79.996404),
        zoom: 12,
        mapTypeId: 'roadmap'

    });
}
google.maps.event.addDomListener(window, 'load', initialize);

//notes
//http://ec2-54-165-176-227.compute-1.amazonaws.com/PhpPittsburghBrigade/PoliceBlotterOutlineTest.html
//    http://ec2-54-165-176-227.compute-1.amazonaws.com/PhpPittsburghBrigade/PoliceBlotterIndex.html