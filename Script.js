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

function makeCircle()
{
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 70;
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'green';
    context.fill();
    context.lineWidth = 10;
    context.strokeStyle = '#003300';
    context.stroke();
}