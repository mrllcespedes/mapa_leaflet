// Criar o mapa
var map = L.map('map').setView([-23.50199102, -45.12337474], 12);

var base = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bases do mapa basemap  (L.tilelayer))
var baserelief = L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {});


var baselayers = {
    'Topográfico': baserelief,
    'OSM - padrão' : base
};



// Criar o ponto referente ao ecoponto
var EcoPonto = [-23.50199102, -45.12337474];
const ecoponto = L.icon({
    className: 'econponto',
    iconUrl: 'container.png',
    iconSize: [40, 40],
    IconAnchor: [15,15] // changed popup position
});

const multi = L.icon({
  className: 'data',
  iconUrl: 'oceano.png',
  iconSize: [35, 35],
  IconAnchor: [15,15] // changed popup position
});

const customPopup =
'<ul class="tabs-example" data-tabs><li><a data-tabby-default href="#Ecoponto">Ecoponto</a></li><li><a href="#Armazenamento">Armazenamento</a></li></ul><div class="customPopup"><figure><img src="ecoponto.jpeg" width = "250" heigth = "250" margin="auto"><figcaption>Fonte: PPAPD</figcaption></figure><div> Apoie a economia azul! Neste ponto de coleta, recolhemos resíduos plásticos da pesca. Contribua com a saúde dos oceanos e ajude pescadores locais a prosperar. Juntos, criamos um futuro sustentável! </div></div>';


var circle = L.marker(EcoPonto, {icon:ecoponto}).bindPopup(customPopup).addTo(map);
//

var data = {
"type": "FeatureCollection",
"features": [
{ "type": "Feature", "properties": { "ID": 2, "LONG": -45.07, "LAT": -23.532, "LONG_GSM": "-45°4′12″", "LAT_GSM": "-23°31′55″", "ID2": "AQ13", "lat2": -23.53173, "lon2": -45.07006 }, "geometry": { "type": "Point", "coordinates": [ -45.07006, -23.53173 ] } },
{ "type": "Feature", "properties": { "ID": 3, "LONG": -45.041, "LAT": -23.527, "LONG_GSM": "-45°2′28″", "LAT_GSM": "-23°31′37″", "ID2": "BM13", "lat2": -23.52727, "lon2": -45.0406 }, "geometry": { "type": "Point", "coordinates": [ -45.0406, -23.52727 ] } },
{ "type": "Feature", "properties": { "ID": 4, "LONG": -45.055, "LAT": -23.554, "LONG_GSM": "-45°3′18″", "LAT_GSM": "-23°33′14″", "ID2": "CS13", "lat2": -23.55442, "lon2": -45.05535 }, "geometry": { "type": "Point", "coordinates": [ -45.05535, -23.55442 ] } },
{ "type": "Feature", "properties": { "ID": 5, "LONG": -45.085, "LAT": -23.563, "LONG_GSM": "-45°5′6″", "LAT_GSM": "-23°33′47″", "ID2": "DM13", "lat2": -23.5634, "lon2": -45.08476 }, "geometry": { "type": "Point", "coordinates": [ -45.08476, -23.5634 ] } },
{ "type": "Feature", "properties": { "ID": 1, "LONG": -45.085, "LAT": -23.532, "LONG_GSM": "-45°5′6″", "LAT_GSM": "-23°31′55″", "ID2": "AN13", "lat2": -23.53173, "lon2": -45.08476 }, "geometry": { "type": "Point", "coordinates": [ -45.08476, -23.53173 ] } }
]
};

var layerGroup = L.geoJSON(data, { 
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng,{icon:multi}).bindPopup('<h1 style = "font-size: 115%">'+feature.properties.ID2+ '</h1>');
  }
}).addTo(map);


const iconcomunidade = L.icon({
  className: 'data',
  iconUrl: 'grupo-de-usuarios.png',
  iconSize: [20, 20],
  IconAnchor: [15,15] // changed popup position
});

var comunidades = {
  "type": "FeatureCollection",
  "features": [
  { "type": "Feature", "properties": { "names": "Pier do Saco da Ribeira", "lat": -23.502167, "lon": -45.123413, "gen": "Mulheres/Homens", "cond_local": "Degradado", "amb": "Degradado", "barcos": 22, "estrutura": "Rancho", "loca_desca": 1, "pres_aus": 1, "Modalidade": "Arrasto de camarão/ Linha", "Tipos de B": "Aluminio/ Bote/ Cabine/ Lancha/ Veleiro" }, "geometry": { "type": "Point", "coordinates": [ -45.123413, -23.502167 ] } },
  { "type": "Feature", "properties": { "names": "Ilha dos Pescadores", "lat": -23.431172, "lon": -45.069804, "gen": "Mulheres/Homens", "cond_local": "Degradado", "amb": "Degradado", "barcos": 35, "estrutura": "Pier", "loca_desca": 1, "pres_aus": 1, "Modalidade": "Arrasto de camarão", "Tipos de B": "Aluminio/ Cabine" }, "geometry": { "type": "Point", "coordinates": [ -45.069804, -23.431172 ] } },
  { "type": "Feature", "properties": { "names": "Pereque Açu", "lat": -23.417669, "lon": -45.058377, "gen": "Homens", "cond_local": "Preservado", "amb": "Degradado", "barcos": 10, "estrutura": "Rancho", "loca_desca": 1, "pres_aus": 1, "Modalidade": "Arrasto de camarão/ Emalhe/ Linha", "Tipos de B": "Aluminio/ Canoa/ Lancha" }, "geometry": { "type": "Point", "coordinates": [ -45.058377, -23.417669 ] } },
  { "type": "Feature", "properties": { "names": "Barra Seca", "lat": -23.417139, "lon": -45.049135, "gen": "Homens", "cond_local": "Preservado", "amb": "Degradado", "barcos": 10, "estrutura": "Rancho", "loca_desca": 1, "pres_aus": 1, "Modalidade": "Emalhe", "Tipos de B": "Aluminio/ Bote/ Canoa" }, "geometry": { "type": "Point", "coordinates": [ -45.049135, -23.417139 ] } },
  { "type": "Feature", "properties": { "names": "Enseada", "lat": -23.493995, "lon": -45.085314, "gen": "Mulheres/Homens", "cond_local": "Preservado", "amb": "Preservado", "barcos": 3, "estrutura": "Sem estrutura", "loca_desca": 1, "pres_aus": 0, "Modalidade": "Emalhe", "Tipos de B": "Veleiro" }, "geometry": { "type": "Point", "coordinates": [ -45.085314, -23.493995 ] } },
  { "type": "Feature", "properties": { "names": "Barra da Maranduba", "lat": -23.549443, "lon": -45.232537, "gen": "Homens", "cond_local": "Degradado", "amb": "Degradado", "barcos": 15, "estrutura": "Pier", "loca_desca": 0, "pres_aus": 1, "Modalidade": "Arrasto de camarão/ Linha", "Tipos de B": "Aluminio/ Cabine" }, "geometry": { "type": "Point", "coordinates": [ -45.232537, -23.549443 ] } },
  { "type": "Feature", "properties": { "names": "Praia da Caçandoca", "lat": -23.564113, "lon": -45.217134, "gen": "Mulheres/Homens", "cond_local": "Preservado", "amb": "Preservado", "barcos": 3, "estrutura": "Rancho", "loca_desca": 0, "pres_aus": 0, "Modalidade": "Arrasto de camarão", "Tipos de B": "Canoa" }, "geometry": { "type": "Point", "coordinates": [ -45.217134, -23.564113 ] } },
  { "type": "Feature", "properties": { "names": "Praia da Fortaleza", "lat": -23.5317, "lon": -45.162942, "gen": "Mulheres/Homens", "cond_local": "Preservado", "amb": "Preservado", "barcos": 8, "estrutura": "Rancho", "loca_desca": 1, "pres_aus": 1, "Modalidade": "Emalhe", "Tipos de B": "Aluminio/ Canoa" }, "geometry": { "type": "Point", "coordinates": [ -45.162942, -23.5317 ] } },
  { "type": "Feature", "properties": { "names": "Cais de Ubatuba", "lat": -23.451418, "lon": -45.046782, "gen": "Mulheres/Homens", "cond_local": "Degradado", "amb": "Degradado", "barcos": 0, "estrutura": "Sem estrutura", "loca_desca": null, "pres_aus": 1, "Modalidade": "Linha", "Tipos de B": "Ausente" }, "geometry": { "type": "Point", "coordinates": [ -45.046782, -23.451418 ] } },
  { "type": "Feature", "properties": { "names": "Itaguá", "lat": -23.4559, "lon": -45.060375, "gen": "Homens", "cond_local": "Preservado", "amb": "Degradado", "barcos": 15, "estrutura": "Rancho", "loca_desca": 1, "pres_aus": 1, "Modalidade": "Emalhe", "Tipos de B": "Aluminio/ Canoa" }, "geometry": { "type": "Point", "coordinates": [ -45.060375, -23.4559 ] } },
  { "type": "Feature", "properties": { "names": "Praia da Tabatinga/Galheta", "lat": -23.578876, "lon": -45.276785, "gen": "Homens", "cond_local": "Preservado", "amb": "Preservado", "barcos": null, "estrutura": "Rancho", "loca_desca": 0, "pres_aus": 1, "Modalidade": "Emalhe", "Tipos de B": "Aluminio/Canoa/Cabine" }, "geometry": { "type": "Point", "coordinates": [ -45.276785, -23.578876 ] } },
  { "type": "Feature", "properties": { "names": "Praia da Lagoinha", "lat": -23.520125, "lon": -45.192704, "gen": "Mulheres/Homens", "cond_local": "Preservado", "amb": "Preservado", "barcos": 15, "estrutura": "Rancho", "loca_desca": 1, "pres_aus": 1, "Modalidade": "Emalhe", "Tipos de B": "Aluminio/Canoa" }, "geometry": { "type": "Point", "coordinates": [ -45.192704, -23.520125 ] } }
  ]
  };

var comunidade_ub = L.geoJSON(comunidades, { 
  pointToLayer: function(feature, latlng) {
    return L.marker(latlng,{icon:iconcomunidade}).bindTooltip ('<h1 style = "font-size: 115%">'+feature.properties.names+ '</h1>');
    
  }
}).addTo(map);

// Carregar o arquivo GeoJSON dos pontos multiparametro
fetch('poligono_anchieta.geojson')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Criar um estilo para o polígono
        var polygonStyle = {
            color: 'black',
            weight: 2,
            fillOpacity: 0.1
        };

        // Criar uma camada do polígono com os dados carregados
        var poligono_anchieta = L.geoJSON(data, {
            style: polygonStyle
        });

        // Adicionar o polígono ao mapa
        poligono_anchieta.addTo(map).bindPopup(PEIA);
        layerControl.addOverlay(poligono_anchieta, 'Polígono Anchieta');
    });


//
fetch('ubatuba.geojson')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Criar um estilo para o polígono
        var polygonStyle = {
            color: 'black',
            weight: 2,
            fillOpacity: 0.1
        };

        // Criar uma camada do polígono com os dados carregados
        var Ub = L.geoJSON(data, {
            style: polygonStyle
        });

        // Adicionar o polígono ao mapa
        Ub.addTo(map);
        });
/////

fetch('100x100.geojson')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // Criar um estilo para o polígono
        var polygonStyle = {
            color: 'black',
            weight: 2,
            fillOpacity: 0.1
        };

        // Criar uma camada do polígono com os dados carregados
        var grade = L.geoJSON(data, {
            style: polygonStyle
        });

        // Adicionar o polígono ao mapa
        grade.addTo(map);
        layerControl.addOverlay(grade, 'Malha amostral');
    });

var overlays = {
  'EcoPonto': circle,
  'Multiparâmetro': layerGroup,
  'Comunidades': comunidade_ub,
  
};

var layerControl = L.control.layers(null, overlays).addTo(map);

L.control.layers(baselayers).addTo(map);

L.control.layers(null, layerControl,baselayers).addTo(map);


L.control.scale().addTo(map);


