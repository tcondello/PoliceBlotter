/**
 * Created by Mac-astr010 on 1/20/15.
 */
var map;
var style = {
    fillColor: 'green',
    strokeWeight: 1    
}

var Councilmap = new google.maps.Data();
Councilmap.loadGeoJson('json/CouncilDistrict.json');
var Neighbormap = new google.maps.Data();
Neighbormap.loadGeoJson('json/Neighborhood.json');
var PoliceZmap = new google.maps.Data();
PoliceZmap.loadGeoJson('json/PoliceZones.json');

function toggleLayer(this_layer){
  Councilmap.setMap(null);
  Neighbormap.setMap(null);
  PoliceZmap.setMap(null);
  this_layer.setStyle(style);
  this_layer.setMap(map);
}

function initialize() {
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: new google.maps.LatLng(40.435467, -79.996404),
        zoom: 12,
        mapTypeId: 'roadmap',

    });
    
    Councilmap.setMap(map);
    Councilmap.setStyle(style);
    
}
google.maps.event.addDomListener(window, 'load', initialize);

//notes
//
//http://stackoverflow.com/questions/23071775/how-to-remove-arbitrary-layers-of-geojson-in-google-maps
//
//http://ec2-54-165-176-227.compute-1.amazonaws.com/PhpPittsburghBrigade/PoliceBlotterOutlineTest.html
//    http://ec2-54-165-176-227.compute-1.amazonaws.com/PhpPittsburghBrigade/PoliceBlotterIndex.html