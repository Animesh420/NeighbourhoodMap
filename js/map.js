function initMap() {
    var uluru = {lat: 12.9716, lng: 77.5946};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: uluru
    });
    var myLocation = {lat:12.961164339564075,lng :77.71227948924559}
    var marker = new google.maps.Marker({
      position: myLocation,
      map: map
    });
    
  }
