// Criar o mapa
var map = L.map('map').setView([-23.50, -45.12], 13);
var base = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bases do mapa basemap  (L.tilelayer))
//var basetopo = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/default/default028mm/{z}/{y}/{x}.png', {});
var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});


var baselayers = {
    'Topográfico': baserelief,
    'OSM - padrão' : base
};

// Criar o pontos
var EcoPonto = [-23.50199102, -45.12337474];

var poligono = L.polygon([
    [-23.52048,-45.09205],
    [-23.56714,-45.09200],
    [-23.56710,-45.06700],
    [-23.54548,-45.03705],
    [-23.54548,-45.03705],
    [-23.52058,-45.03703]    
]).addTo(map);

var AN13 = L.marker([-23.53173, -45.08476]).bindPopup('AN13'),
    AQ13 = L.marker([-23.53173, -45.07000]).bindPopup('AQ13'),
    BM13 = L.marker([-23.52727,-45.04060]).bindPopup('BM13'),
    CS13 = L.marker([-23.55442,-45.05535]).bindPopup('CS13'),
    DM13 = L.marker([-23.56340,-45.08476]).bindPopup('DM13');

var multiparametro = L.layerGroup([AN13, AQ13,BM13,CS13,DM13]);
//var multiparametro  = [-23.53173, -45.07006 ];
//multiparametro.push(-23.50199102, -45.12337474);

//var testepar = [
//    {lat: -23.53173, lon: -45.07006},
//    {lat: -21.53173, lon: -44.07006}
//];

var circleStyle = {
    color: 'black',
    weight: 100,
    height: 200
};

var circle = L.circle(EcoPonto, {
    style: circleStyle}).bindPopup('EcoPonto')
.addTo(map);

//var ponto = L.circle(multiparametro).addTo(map);

//controlador de camadas, overlayer função para incluir sobreposições 
//entendo como que funciona realmente  
var overlays = {
    'EcoPonto': circle,
    'Ponto': multiparametro,
    'Poligono Anchieta' : poligono
};

L.control.layers(baselayers, overlays).addTo(map);



var scale = L.control.scale()
scale.addTo(map)
