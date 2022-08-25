 

//    var nameHotel = "Miramar";
//    var locationHotel = "Malaga";
   //var imgHotel = "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg";

// document.getElementById("name-hotel").innerHTML = "Hotel " + nameHotel;
// document.getElementById("location-hotel").innerHTML =
//   "Ubicado en " + locationHotel;
//document.getElementById("img-hotel").src = imgHotel;
 


hoteles = {

    Miramar: {
name: "Miramar",
location: "Malaga",
img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
    },

    NH: {
 name: "NH",
 location: "Malaga",
 img: "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
   },
};


var selectedHotel = prompt("Indica el nombre de hotel: Miramar o NH");


document.getElementById("name-hotel").innerHTML = "Hotel " + hoteles[selectedHotel].name;
document.getElementById("location-hotel").innerHTML = "Ubicado en " + hoteles[selectedHotel].location;
document.getElementById("img-hotel").src = hoteles[selectedHotel].img;


var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

  var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");

document.getElementById("rating").innerHTML = stars[rating];



// hotel.location = prompt( 'Introduce la localizacion del hotel');
// document.getElementById("location-hotel").innerHTML = 'Ubicado en ' + hotel.location;

// hotel.rating = prompt('Valora el hotel de una a cinco estrellas');
// document.getElementById("rating").innerHTML = hotel.rating + ' estrellas';

// var ratingAnonymous = confirm('Quieres que tu reseña sea anonima?');
// document.getElementById('anonymous').checked = ratingAnonymous;
