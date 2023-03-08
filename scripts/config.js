// contain api keys here and add config.js to.gitignore to hide keys
let maps;
let url;

var config = {
    maps : 'AIzaSyCJPbRSLKzf9OO8BuhOm2sXl030xmgYJPk',
    url : 'https://maps.googleapis.com/maps/api/js?key=' + maps + '&callback=initMap'
};

var script = document.createElement("script");
script.setAttribute("src", url);
document.getElementById("mapkey")[0].appendChild(script);

// document.getElementById('mapkey').innerHTML = mapkey; 