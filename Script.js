/**
 * Created by chitrakakkar on 2/21/17.
 */
// taken from code-pen
$(function() {
    $('.js-nav a, .js-connect').click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 750);
    });
});
// for making face canvas and other circular canvases
function makeCircle()
{
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.addEventListener('load', function (e) {
        context.drawImage(this, 0, 0, 300, 300);
    }, true);
    img.src = "Images/CK_Face_pic.png";
    img.border= " 10px black"
}
// to display google map with a map which can be clicked to open a google map in your browser
var geocoder;
var map;
function initMap()
{
    geocoder = new google.maps.Geocoder();
    var lat = '';
    var lng = '';
    var city_state_zip = document.getElementById("city_state_zip").innerHTML;
    var street_address = document.getElementById("street_address").innerHTML;
    var address = street_address + " " + city_state_zip;
    geocoder.geocode({'address': address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            lat = results[0].geometry.location.lat(); //getting the lat
            lng = results[0].geometry.location.lng(); //getting the lng
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker
            ({
                url: 'https://www.google.com/maps/place/110+E+18th+St,+Minneapolis,+MN+55403/@44.9656226,-93.2780984,17z/data=!3m1!4b1!4m5!3m4!1s0x52b332b96b8034b5:0xd3fca62300e5e543!8m2!3d44.9656226!4d-93.2759097',
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
        google.maps.event.addListener(marker, 'click', function () {
            window.location.href = marker.url
        });
    });
    var latlng = new google.maps.LatLng(lat, lng);
    var myOptions =
    {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    }

