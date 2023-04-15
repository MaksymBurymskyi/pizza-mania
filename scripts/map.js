"use strict";

// Скрипт ініціалізує мапу з маркером за координатами закладу

function initMap() {
  const uluru = { lat: 50.587977, lng: 27.607211 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: uluru,
    mapId: "b3664ef9a16e9b95",
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
