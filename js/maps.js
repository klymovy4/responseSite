// const API_MAP = "AIzaSyBFg_aHLd3vrUXvLwcVxgmlR1hq3rihqFc"

function initMap() {
    let options = {
        zoom: 8,
        center: { lat: 49.4230, lng: 26.9871 }
    }
    // New map
    let map = new google.maps.Map(document.getElementById("map"), options)

    // Listen for click on map
    google.maps.event.addListener(map, "click", function (event) {
        // Add marker
        addMarker({coords: event.latLng})
    })



    // Add marker
    // let marker = new google.maps.Marker({
    //     position: {lat: 49.422638, lng: 26.988897},
    //     map: map,
    //     icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    // });

    // let infoWindow = new google.maps.InfoWindow({
    //     content: "<h1>Хмельницкий</h1>"
    // })
    // marker.addListener("click", function () {
    //     infoWindow.open(map, marker)    // платный контент
    // })


    // Add marker function


    // Array of markers
    let markers = [
        {
            coords: { lat: 49.4230, lng: 26.9871 },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: "<h1>Хмельницкий</h1>"
        },
        {
            coords: { lat: 49.4230, lng: 26.9871 },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: "<h1>Хмельницкий</h1>"
        },
        {
            coords: { lat: 49.5535, lng: 25.5948 },
            content: "<p>файне мисто тернопиль</p>"
        }
    ];

    //  Loop through markers
    for (let i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }
    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: props.iconImage
        });
        // Check for customicon
        if (props.iconImage) {
            //  Set icon image
            marker.setIcon(props.iconImage)
        }

        // Check content
        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            })
            marker.addListener("click", function () {
                infoWindow.open(map, marker)    // платный контент
            })
        }
    }
}