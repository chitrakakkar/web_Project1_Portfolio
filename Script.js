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
var geo_coder;
var map;
function initMap()
{
    geo_coder = new google.maps.Geocoder();
    var lat = '';
    var lng = '';
    var city_state_zip = document.getElementById("city_state_zip").innerHTML;
    var street_address = document.getElementById("street_address").innerHTML;
    var address = street_address + " " + city_state_zip;
    geo_coder.geocode({'address': address}, function (results, status) // from stack -overflow
    {
        if (status == google.maps.GeocoderStatus.OK)
        {
            lat = results[0].geometry.location.lat(); //getting the lat
            lng = results[0].geometry.location.lng(); //getting the lng
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker
            ({
                url: 'https://www.google.com/maps/d/viewer?mid=1oLn-MaLCoAhYO4AIJw5GxAjDAD0&hl=en_US&ll=44.980585%2C-93.26637300000004&z=17',
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert("Geocode was not successful for the following reason: " + status);
        }
        // click event for marker
        google.maps.event.addListener(marker, 'click', function ()
        {
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


function myFunction()
{
    var x = document.getElementById("POP-UP");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 30000);
}

function googleTranslateElementInit()
    {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
    }

function modal()
{
    // Get the modal
var modal = document.getElementById('myModal');
var link =  document.getElementById('message_link');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
   link.onclick = function ()
    {
        modal.style.display = "block";
    };

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event)
    {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}