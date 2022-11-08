function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 55,
            lng: 15
        }
    });
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [ 
    {lat: 58.8911695, lng: 17.9462096},
    {lat: 58.90359314376223, lng: 17.945951366453624},
    {lat: 59.16578576850266, lng: 18.135098113924474},
    {lat: 59.34771943894653, lng: 18.11077812742312},
    {lat: 57.167052671413266, lng: 15.373344356188765}            
    ];

    var markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });

}