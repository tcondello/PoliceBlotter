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

function changeActive(){
  $(document).ready(function () {
        $('ul.nav > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });            
    });  
}
function setMouseover (layer){
    layer.addListener('mouseover', function (event) {
        layer.revertStyle();
        layer.overrideStyle(event.feature, {
              strokeColor: "#FF0000",
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: "#FF0000",
              fillOpacity: 0.1
        });
    });
    layer.addListener('mouseout', function (event) {
        layer.revertStyle();
    });
}
function clearLayer(){
  Councilmap.setMap(null);
  Neighbormap.setMap(null);
  PoliceZmap.setMap(null);
}
function toggleLayer(this_layer){ 
  changeActive();
  clearLayer();
  this_layer.setStyle(style);
  this_layer.setMap(map);
  setMouseover(this_layer);
}
function initialize() {
    map = new google.maps.Map(document.getElementById("map-canvas"), {
        center: new google.maps.LatLng(40.435467, -79.996404),
        zoom: 12,
        mapTypeId: 'roadmap',
    });    

}
google.maps.event.addDomListener(window, 'load', initialize);



//notes
//
//
//http://ec2-54-165-176-227.compute-1.amazonaws.com/PhpPittsburghBrigade/PoliceBlotterOutlineTest.html
//    http://ec2-54-165-176-227.compute-1.amazonaws.com/PhpPittsburghBrigade/PoliceBlotterIndex.html
   
   
   