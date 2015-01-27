var App = angular.module('MainApp', []);
App.controller('MainController', ['$scope', function($scope) {
    var xmlDoc, zone, address, type, incidentdate, incidenttime, age, gender, incidentnumber, description, point,html, icon, markers, pinDrop;

        function loadXMLDoc(filename)
        {
            if (window.XMLHttpRequest)
            {
                xhttp=new XMLHttpRequest();
            }
            else // code for IE5 and IE6
            {
                xhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.open("GET",filename,false);
            xhttp.send();
            return xhttp.responseXML;
        }
        xmlDoc = loadXMLDoc('blotter/TestFileName.xml');
        if(xmlDoc != null) {
            markers = xmlDoc.getElementsByTagName("marker");
            $("div.alert-danger").hide();
            for (var i = 0; i < markers.length; i++) {

                zone = markers[i].getAttribute("zone");
                address = markers[i].getAttribute("address");
                type = markers[i].getAttribute("type");
                incidentdate = markers[i].getAttribute("incidentdate");
                incidenttime = markers[i].getAttribute("incidenttime");
                if (incidenttime == null) {
                    incidenttime = "N/A";
                }
                age = markers[i].getAttribute("age");
                if (age === "") {
                    age = "N/A";
                }
                gender = markers[i].getAttribute("gender");
                if (gender === "") {
                    gender = "N/A";
                }
                incidentnumber = markers[i].getAttribute("incidentnumber");
                description = markers[i].getAttribute("description");
                //point = new google.maps.LatLng(
                //    parseFloat(markers[i].getAttribute("lat")),
                //    parseFloat(markers[i].getAttribute("lng")));
                html = "<b>" + incidentnumber + "</b> <br/>" + type + "<br/>" + incidentdate + " " + incidenttime + "<br/>" + zone + "<br/>" + address + "<br/>Age: " + age + " Gender: " + gender + "<br/>" + description;

                document.write(html);
                document.write("<br/>");
            }
        } else {
            $("div.alert-danger").show();
        }
}]);