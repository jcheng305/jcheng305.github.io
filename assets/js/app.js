// sanity check
console.log("app.js linked.");

var data = {
  "first_name": "Jimmy",
  "last_name": "Cheng",
  "age": 26,
  "location": "Miami,FL",
  "occupation": "student at General Assembly",

  "qualities": ["optomistic", "hard working", "loyal", "adventurous"],
  "hobbies": [
    {
    "name": "Motorcycles",
    "category": "Motorsports",
    "instagram_url": "https://www.instagram.com/p/BRM-qMkg4hN/?taken-by=aznboi305"
  }
],
"profile_image": "http://i1085.photobucket.com/albums/j422/aznboi3o5/IMG_7732.jpg?t=1502861737"
}


$(document).on('ready', function() {
  $("body").fadeIn(2000);
  $(".first_name").text(data.first_name);
  $(".occupation").text(data.occupation);
  $(".location").text(data.location);
  $(".age").text(data.age);
  $(".qualities").text(data.qualities);

  //Display hobbies
  for(var i = 0; i< data.hobbies.length; i++) {
    $(".hobby_links").append(`<a href= "${data.hobbies[i].instagram_url}"> ${data.hobbies[i].name}</a>`);
  }
  $(".img-responsive").attr("src",data.profile_image);
});

// //for tab function
// function openCity(evt, cityName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;
//
//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//
//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//
//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(cityName).style.display = "block";
//     evt.currentTarget.className += " active";
// }
