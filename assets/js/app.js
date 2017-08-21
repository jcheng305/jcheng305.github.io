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
