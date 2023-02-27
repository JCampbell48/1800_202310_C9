// Initialize and add the map
function initMap() {
    // The location of Downtown Vancouver
    const vancouver = { lat: 49.2820, lng: -123.1171 };
    // The map, centered at Downtown Vancouver
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: vancouver,
    });
    // The marker, positioned at Downtown Vancouver
    const marker = new google.maps.Marker({
      position: vancouver,
      map: map,
    });
  }
  
  window.initMap = initMap;