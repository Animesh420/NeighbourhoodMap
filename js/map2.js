function initAutocomplete() {
    "use strict";
    // The styles array
    var mapStyles = {
        "night": [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }]
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }]
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }]
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }]
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }]
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }]
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }]
            }
        ],
        "dark": [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }],
        "dark_aqua": [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#15191b"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#2f373a"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#15191b"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#15191b"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#15191b"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#15191b"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#f45454"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ad2b2b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#eaeaea"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#15e181"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#8095a0"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#8095a0"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#0f252e"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#364350"
                    }
                ]
            }
        ]
    };

    // Default Image URL
    var noImageFound = "img/noImage.png";
    var photoUrl = "";
    var imarkerArray = [];
    var markersShow = [];
    var redMarker = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
    var blueMarker = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
    var orangeMarker = "http://maps.google.com/mapfiles/ms/icons/orange-dot.png";
    var greenMarker = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
    var CLIENT_ID_FOURSQUARE = configObject.fourSquare_client_id;
    var CLIENT_SECRET_FOURSQUARE = configObject.fourSquare_client_secret;
    // Setting up map,central location and some other commonly used variables.
    var bounds = new google.maps.LatLngBounds();
    var userMarkers = {};
    var appLat = cityObject.centerLat;
    var appLng = cityObject.centreLong;
    var city = cityObject.cityName;
    var appLocation = { lat: appLat, lng: appLng };
    var map = new google.maps.Map(document.getElementById("map"), {
        center: appLocation,
        zoom: 12,
        mapTypeId: "roadmap"
    });

    map.setOptions({markers:[]});

    // Keyboard shortcuts
    var trafficFlag = false;
    var bikeFlag = false;
    var transitFlag = false;
    var trafficLayer = new google.maps.TrafficLayer();
    var transitLayer = new google.maps.TransitLayer();
    var bikeLayer = new google.maps.BicyclingLayer();

    $(document).keydown(function (evt) { // Ctrl + alt + f
        if (evt.keyCode == 70 && (evt.ctrlKey) && (evt.altKey)) {
            evt.preventDefault();
            if (trafficFlag == false) {
                trafficLayer.setMap(map);
                trafficFlag = true;
            }
            else {
                trafficLayer.setMap(null);
                trafficFlag = false;
            }
        }

        if (evt.keyCode == 84 && (evt.ctrlKey) && (evt.altKey)) {
            evt.preventDefault();  // Ctrl + alt + t
            if (transitFlag == false) {
                transitLayer.setMap(map);
                transitFlag = true;
            }
            else {
                transitLayer.setMap(null);
                transitFlag = false;
            }
        }

        if (evt.keyCode == 66 && (evt.ctrlKey) && (evt.altKey)) {
            evt.preventDefault(); // Ctrl + alt + b
            if (bikeFlag == false) {
                bikeLayer.setMap(map);
                bikeFlag = true;
            }
            else {
                bikeLayer.setMap(null);
                bikeFlag = false;
            }
        }

        if (evt.keyCode == 67 && (evt.ctrlKey) && (evt.altKey)) {
            evt.preventDefault();
            map.setOptions(  // Ctrl + alt + c
                {
                    center: appLocation,
                    zoom: 12,
                    mapTypeId: "roadmap"
                }
            );
        }
    });



    function setMapOnAll(map) {
        for (let i = 0; i < markersShow.length; i += 1) {
            markersShow[i].setMap(map);
        }
    }

    // Map style changes

    function changeToNight() {
        map.setOptions({ styles: mapStyles.night });
    }
    function changeToDark() {
        map.setOptions({ styles: mapStyles.dark });
    }
    function changeToDarkAqua() {
        map.setOptions({ styles: mapStyles.dark_aqua });
    }
    function reloadWindow() {
        window.location.reload(true);
    }
    var nightButton = document.getElementById("night");
    var darkButton = document.getElementById("dark");
    var darkAquaButton = document.getElementById("dark_aqua");
    var reload = document.getElementById("self");
    var firstTenPlaces = [];
    function initialize() {


    }

    google.maps.event.addDomListener(window, "load", initialize);
    google.maps.event.addDomListener(nightButton, "click", changeToNight);
    google.maps.event.addDomListener(darkButton, "click", changeToDark);
    google.maps.event.addDomListener(darkAquaButton, "click", changeToDarkAqua);
    google.maps.event.addDomListener(reload, "click", reloadWindow);


    var isInfoOpen = function(arg){
        var map = arg.getMap();
        return (map !== null && typeof map !== "undefined");};
    // Creates marker by location
    function createMarkerByLocation(location, dont_zoom) {
        if (location === "") { return; }
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ "address": location }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                var picLocation = results[0].geometry.location;

                var additional_content = `<ul>`;
                var picUrl = ``;
                var noContent = true;
                // Using the foursquare API
                if (dont_zoom != false) {
                    $.ajax(
                        {
                            url: "https://api.foursquare.com/v2/venues/search",
                            type: "GET",
                            dataType: "json",
                            extra: additional_content,
                            data:
                            "&ll=" + results[0].geometry.location.lat() + "," + results[0].geometry.location.lng() +
                            "&client_id=" + CLIENT_ID_FOURSQUARE +
                            "&client_secret=" + CLIENT_SECRET_FOURSQUARE +
                            "&v=20161016",
                            async: true,
                            success: function (result) {
                                var tr = result.response.venues;
                                var temp = tr.slice(1, tr.length > 4 ? 4 : tr.length);
                                if (dont_zoom != false) {
                                    var interestPlaces = tr.slice(1, tr.length > 10 ? 10 : tr.length);

                                    interestPlaces.forEach(function (element) {
                                        var imarker = new google.maps.Marker({
                                            map: map,
                                            position: new google.maps.LatLng(element.location.lat, element.location.lng),
                                            icon: "https://maps.google.com/mapfiles/kml/pal3/icon55.png",
                                            title: element.name
                                        });
                                        imarkerArray.push(imarker);
                                    });
                                }
                                if (tr.length == 0) {
                                    noContent = true;
                                }
                                else {
                                    noContent = false;
                                }
                                temp.forEach(function (element) {
                                    additional_content += `<li>${element.name}</li>`;
                                });
                                additional_content += "</ul>";

                            },
                            error: function (error) { console.log(error); }
                        }

                    );
                }

                var locMarker = new google.maps.Marker({
                    map: map,
                    icon: orangeMarker,
                    title: location,
                    animation: google.maps.Animation.DROP,
                    draggable: true,
                    position: results[0].geometry.location
                });

                map.markers.push(locMarker);


                google.maps.event.addListener(locMarker, "click", function (locMarker, location, results) {
                    return function () {
                        toggleMarker(locMarker,orangeMarker,greenMarker);
                        locMarker.setAnimation(google.maps.Animation.DOWN);
                        picUrl = "img/noImage.png";
                        var serviceClick = new google.maps.places.PlacesService(map);
                        var myloc = new google.maps.LatLng(picLocation.lat(), picLocation.lng());
                        var clickRequest = {
                            location: myloc,
                            radius: "10",
                            types: ["point_of_interest"]
                        };
                        serviceClick.nearbySearch(clickRequest, function (result, status) {
                            if (status == google.maps.places.PlacesServiceStatus.OK) {
                                if (result[0]) {
                                    if (result[0].photos) {
                                        picUrl = result[0].photos[0].getUrl({ maxWidth: 640 });
                                    }
                                    else {
                                        picUrl = "img/noImage.png";
                                    }


                                }
                                let content_string = `<div class="card" style="width: 20rem;">
                        <img class="card-img-top" src="${picUrl}" height="10%" width="100%" >
                        <div class="card-block">
                          <h4 class="card-title">${location}</h4>
                          <p class="card-text">${results[0].formatted_address}.</p>
                        </div>
                      </div>`;
                                if (!noContent) {
                                    content_string += `<h5> Nearby Places (<small>Powered by Foursquare</small>) </h5>` + additional_content;
                                }
                                var infoUserWindow = new google.maps.InfoWindow({});
                                infoUserWindow.setContent(content_string);
                              if (locMarker.infoWindow)
                              {
                                locMarker.infoWindow.close();
                                locMarker.infoWindow = null;
                              }
                              else{
                                infoUserWindow.open(map, locMarker);
                                locMarker.setOptions({
                                    "infoWindow":infoUserWindow
                                });
                              }

                            }

                        });

                    };
                }(locMarker, location, results));

                userMarkers[location] = locMarker;
                imarkerArray.forEach(function (element) {
                    element.setMap(map);
                });
                vm.locMarkerArray[location] = locMarker;
                locMarker.setMap(map);
                if (dont_zoom !== false) {
                    map.setOptions(
                        {
                            center: results[0].geometry.location,
                            zoom: 18,
                            mapTypeId: "roadmap"
                        }
                    );
                }
            }
        });
    }


    // Showing some common places of interest such as restaurant, ATM etc.
    var restaurant = document.getElementById("restaurant");
    var atm = document.getElementById("atm");
    var bank = document.getElementById("bank");
    var airport = document.getElementById("airport");
    var hospital = document.getElementById("hospitals");

    // Knockout js to update the lists dynamically
    function Task(data) {
        this.title = ko.observable(data.title);
        this.isDone = ko.observable(data.isDone);

        this.isDone.subscribe(function (text) {
            for (var key in userMarkers) {
                if (key == `${data.title} ,${city}` && text == true) {
                    userMarkers[key].setIcon(greenMarker);
                }
                else if (key == `${data.title} ,${city}` && text == false) {
                    userMarkers[key].setIcon(redMarker);
                }
            }
        }, this);

    }


    function TaskListViewModel() {
        // Data

        var self = this;
        self.locMarkerArray = {};
        self.items = ko.observableArray([
            { name: "Lalabagh Botanical Gardens" },
            { name: "IISC Bangalore" },
            { name:"ISKCON Temple Bangalore" },
            { name:"Cubbon Park Bangalore" },
            { name: "Toit, Bangalore" },
            { name:"Novotel,Bangalore"}
        ]);
        self.items().forEach(function (element) {
            createMarkerByLocation(element.name, false);
        });

        self.filter = ko.observable("");

        self.stringStartsWith = function (string, startsWith) {
            string = string || "";
            if (startsWith.length > string.length)
                return false;
            return string.substring(0, startsWith.length) === startsWith;
        };

        self.filteredItems = ko.computed(function () {

            var filter = self.filter().toLowerCase();
            if (!filter) {
                return self.items();
            } else {

                return ko.utils.arrayFilter(self.items(), function (item) {
                    return self.stringStartsWith(item.name.toLowerCase(), self.filter().toLowerCase());
                });
            }
        }, self);

        self.filteredItems.subscribe(function () {
            // self.filteredItems().forEach(function (element) {
            //     console.log(element);
            // });
            for (var propt in self.locMarkerArray) {
                self.locMarkerArray[propt].setMap(null);
            }
            self.filteredItems().forEach(function (element) {
                createMarkerByLocation(element.name, false);
            });

        });
        self.nearPlaces = ko.observableArray([]);
        self.tasks = ko.observableArray([]);
        self.newTaskText = ko.observable();
        self.windowOpened = false;
        self.incompleteTasks = ko.computed(function () {
            return ko.utils.arrayFilter(self.tasks(),
                function (task) { return !task.isDone(); });
        });


        // Operations
        self.handleClick = function(event){
        var thisMarker = self.locMarkerArray[event.name];
           google.maps.event.trigger(thisMarker, "click");
        }

        self.addTask = function () {
            var pointOfInterest = self.newTaskText();
            self.tasks.push(new Task({ title: this.newTaskText() }));
            self.newTaskText("");
            createMarkerByLocation(pointOfInterest + ` ,${city}`);
        };
        self.removeTask = function (task) {
            self.taskName = task.title() + ` ,${city}`;
            self.tasks.remove(task);
            for (var key in userMarkers) {
                if (key == self.taskName) {
                    userMarkers[key].setMap(null);
                    imarkerArray.forEach(function (element) {
                        element.setMap(null);
                        imarkerArray = [];
                    });
                }
            }
        };
    }
    var vm = new TaskListViewModel();
    ko.applyBindings(vm);

    // Creating grouped markers
    function findLocations(service, request) {
        service.nearbySearch(request, function (results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    var place = results[i];
                    var newMarker = new google.maps.Marker({
                        map: map,
                        icon: redMarker,
                        position: place.geometry.location,
                        title: place.name,
                        animation: google.maps.Animation.DROP,
                        draggable: true
                    });
                    var infowindow = new google.maps.InfoWindow({});

                    google.maps.event.addListener(newMarker, "click", function (newMarker, place) {
                        return function () {
                            toggleMarker(newMarker,redMarker,blueMarker);
                            if (place.photos) {
                                photoUrl = place.photos[0].getUrl({ maxWidth: 640 });
                            }
                            else {
                                photoUrl = noImageFound;
                            }

                            var infoExtra = place.vicinity || place.name || place.formatted_address || "";
                            let content_string = `<div class="card" style="width: 20rem;">
                    <img class="card-img-top" src="${photoUrl}" height="10%" width="100%" >
                    <div class="card-block">
                      <h4 class="card-title">${place.name}</h4>
                      <p class="card-text">${infoExtra}.</p>
                      <a href="#" class="btn btn-primary">View in google maps</a>
                    </div>
                  </div>`;

                            infowindow.setContent(content_string);
                            infowindow.open(map, newMarker);
                        };
                    }(newMarker, place));
                    markersShow.push(newMarker);
                }
            }
        });

    }

    // Functionality to toggle markers
    function toggleMarker(marker,mcolor1,mcolor2) {
        if (marker.icon == mcolor1) {
            marker.setIcon(mcolor2);
        }
        else {
            marker.setIcon(mcolor1);
        }
    }

    // Helper method to get all restaurants
    function findAllRestaurant() {

        setMapOnAll(null); // Delete all the markers being showed
        markersShow = [];
        var service = new google.maps.places.PlacesService(map);
        var currLocation = new google.maps.LatLng(appLat, appLng);
        var request = {
            location: currLocation,
            radius: "100000",
            types: ["restaurant", "food", "bar", "establishment", "point_of_interest"]
        };
        findLocations(service, request);
    }

    // Helper method to get all ATM
    function findAllATM() {

        setMapOnAll(null); // Delete all the markers being showed
        markersShow = [];
        var service = new google.maps.places.PlacesService(map);
        var currLocation = new google.maps.LatLng(appLat, appLng);
        var request = {
            location: currLocation,
            radius: "100000",
            types: ["atm"]
        };
        findLocations(service, request);
    }

    // Helper method to get all hospitals
    function findAllMed() {

        setMapOnAll(null); // Delete all the markers being showed
        markersShow = [];
        var service = new google.maps.places.PlacesService(map);
        var currLocation = new google.maps.LatLng(appLat, appLng);
        var request = {
            location: currLocation,
            radius: "100000",
            types: ["hospital"]
        };
        findLocations(service, request);
    }

    // Helper method to get all transport stations
    function findAllAirport() {

        setMapOnAll(null); // Delete all the markers being showed
        markersShow = [];
        var service = new google.maps.places.PlacesService(map);
        var currLocation = new google.maps.LatLng(appLat, appLng);
        var request = {
            location: currLocation,
            radius: "100000",
            types: ["bus_station", "airport", "train_station"]
        };
        findLocations(service, request);
    }

    // Helper method to get all banks
    function findAllBank() {

        setMapOnAll(null); // Delete all the markers being showed
        markersShow = [];
        var service = new google.maps.places.PlacesService(map);
        var currLocation = new google.maps.LatLng(appLat, appLng);
        var request = {
            location: currLocation,
            radius: "100000",
            types: ["bank"]
        };
        findLocations(service, request);
    }
    //Attaching DOM methods to the google map.
    google.maps.event.addDomListener(restaurant, "click", findAllRestaurant);
    google.maps.event.addDomListener(atm, "click", findAllATM);
    google.maps.event.addDomListener(bank, "click", findAllBank);
    google.maps.event.addDomListener(hospitals, "click", findAllMed);
    google.maps.event.addDomListener(airport, "click", findAllAirport);

    // Implementing the serach box feature.
    // Create the search box and link it to the UI element.
    var input = document.getElementById("pac-input");
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map"s viewport.
    map.addListener("bounds_changed", function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        places.forEach(function (place) {
            if (!place.geometry) {
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            if (place.photos) {
                photoUrl = place.photos[0].getUrl({ maxWidth: 640 });
            }
            else {
                photoUrl = noImageFound;
            }
            var website;
            if (place.website) {
                website = ` <a href="${place.website}" class="btn btn-primary">Go to Website</a>`;
            }
            else {
                website = "";
            }
            var infoLocExtra = place.vicinity || place.formatted_address || "";
            var contentString = `<div class="card" style="width: 20rem;">
        <img class="card-img-top" src="${photoUrl}" height="10%" width="100%" >
        <div class="card-block">
          <h4 class="card-title">${place.name}</h4>
          <p class="card-text">${infoLocExtra}.</p>
          ${website}
        </div>
      </div>`;

            var infoMarker = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                map: map,
                draggable: true,
                title: place.name,
                position: place.geometry.location
            });

            marker.addListener("click", function () {
                this.setIcon(icon);
                // toggleBounce();
                infoMarker.open(map, marker);
            });


            markers.push(marker);



            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

}