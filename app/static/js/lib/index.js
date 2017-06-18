$(document).ready(function() {
	$.backstretch([
                    "static/picture/2.jpg"
	             ], { fade: 600});


});
$(function () {
    $('.tlt').textillate({in: { effect: 'fadeInDown' ,delay:100}});
    $('.tlt2').textillate({in: { effect: 'fadeInDown' ,sync:true }});
});
function asideHeight(){
    $('aside').css('height', $('html').height());
}


