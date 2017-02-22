/**
 * Created by chitrakakkar on 2/21/17.
 */
$(function() {
    $('.js-nav a, .js-connect').click(function(e)
    {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 750);
    });
});

function makeCircle() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    var img = new Image();
    img.addEventListener('load', function (e) {
        context.drawImage(this, 0, 0, 300, 300);
    }, true);
    img.src = "Images/CK_Face_pic.png";
    img.border= " 10px black"
}