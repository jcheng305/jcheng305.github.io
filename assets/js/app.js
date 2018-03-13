// sanity check
console.log("app.js linked.");



$(document).on('ready', function() {
  $('body').css('display', 'none');

$('body').fadeIn(1000);



$('#').click(function() {

event.preventDefault();

newLocation = this.href;

$('body').fadeOut(1000, newpage);

});

function newpage() {

window.location = newLocation;

}

})
