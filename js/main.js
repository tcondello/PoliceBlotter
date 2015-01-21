/**
 * Created by Mac-astr010 on 1/20/15.
 */
var map;
var ShapeNameLocation = 1;
var ShapeName = new Array("json/CouncilDistrict.json", "json/Neighborhood.json", "json/PoliceZones.json");


function toggleLayer(i){
    shownLayer.setMap(null);
    this_layer.setMap(map);
    shownLayer = this_layer;
    ShapeNameLocation = i;
}
function initialize() {
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: new google.maps.LatLng(40.435467, -79.996404),
        zoom: 12,
        mapTypeId: 'roadmap'

    });
    map.data.loadGeoJson(ShapeName[ShapeNameLocation]);
    map.data.setStyle({
            fillColor: 'green',
            strokeWeight: 1
        });

}
google.maps.event.addDomListener(window, 'load', initialize);

//notes
//http://ec2-54-165-176-227.compute-1.amazonaws.com/PhpPittsburghBrigade/PoliceBlotterOutlineTest.html
//    http://ec2-54-165-176-227.compute-1.amazonaws.com/PhpPittsburghBrigade/PoliceBlotterIndex.html