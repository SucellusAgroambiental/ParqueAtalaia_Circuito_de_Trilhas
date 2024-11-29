var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.900000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LimitesParqueAtalaia_1 = new ol.format.GeoJSON();
var features_LimitesParqueAtalaia_1 = format_LimitesParqueAtalaia_1.readFeatures(json_LimitesParqueAtalaia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesParqueAtalaia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesParqueAtalaia_1.addFeatures(features_LimitesParqueAtalaia_1);
var lyr_LimitesParqueAtalaia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesParqueAtalaia_1, 
                style: style_LimitesParqueAtalaia_1,
                popuplayertitle: "Limites Parque Atalaia",
                interactive: true,
                title: '<img src="styles/legend/LimitesParqueAtalaia_1.png" /> Limites Parque Atalaia'
            });
var format_HidrografiaINEA_2 = new ol.format.GeoJSON();
var features_HidrografiaINEA_2 = format_HidrografiaINEA_2.readFeatures(json_HidrografiaINEA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HidrografiaINEA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HidrografiaINEA_2.addFeatures(features_HidrografiaINEA_2);
var lyr_HidrografiaINEA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HidrografiaINEA_2, 
                style: style_HidrografiaINEA_2,
                popuplayertitle: "Hidrografia - INEA",
                interactive: true,
                title: '<img src="styles/legend/HidrografiaINEA_2.png" /> Hidrografia - INEA'
            });
var format_PossveisCanaisIntermitentes_3 = new ol.format.GeoJSON();
var features_PossveisCanaisIntermitentes_3 = format_PossveisCanaisIntermitentes_3.readFeatures(json_PossveisCanaisIntermitentes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PossveisCanaisIntermitentes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PossveisCanaisIntermitentes_3.addFeatures(features_PossveisCanaisIntermitentes_3);
var lyr_PossveisCanaisIntermitentes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PossveisCanaisIntermitentes_3, 
                style: style_PossveisCanaisIntermitentes_3,
                popuplayertitle: "Possíveis Canais Intermitentes",
                interactive: true,
                title: '<img src="styles/legend/PossveisCanaisIntermitentes_3.png" /> Possíveis Canais Intermitentes'
            });
var format_LadeiraDeusmeLivre_4 = new ol.format.GeoJSON();
var features_LadeiraDeusmeLivre_4 = format_LadeiraDeusmeLivre_4.readFeatures(json_LadeiraDeusmeLivre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LadeiraDeusmeLivre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LadeiraDeusmeLivre_4.addFeatures(features_LadeiraDeusmeLivre_4);
var lyr_LadeiraDeusmeLivre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LadeiraDeusmeLivre_4, 
                style: style_LadeiraDeusmeLivre_4,
                popuplayertitle: "Ladeira Deus-me-Livre",
                interactive: true,
                title: '<img src="styles/legend/LadeiraDeusmeLivre_4.png" /> Ladeira Deus-me-Livre'
            });
var format_TrilhadaCaixadgua_5 = new ol.format.GeoJSON();
var features_TrilhadaCaixadgua_5 = format_TrilhadaCaixadgua_5.readFeatures(json_TrilhadaCaixadgua_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrilhadaCaixadgua_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrilhadaCaixadgua_5.addFeatures(features_TrilhadaCaixadgua_5);
var lyr_TrilhadaCaixadgua_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrilhadaCaixadgua_5, 
                style: style_TrilhadaCaixadgua_5,
                popuplayertitle: "Trilha da Caixa d'Água",
                interactive: true,
                title: '<img src="styles/legend/TrilhadaCaixadgua_5.png" /> Trilha da Caixa d\'Água'
            });
var format_TrilhadasRunas_6 = new ol.format.GeoJSON();
var features_TrilhadasRunas_6 = format_TrilhadasRunas_6.readFeatures(json_TrilhadasRunas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrilhadasRunas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrilhadasRunas_6.addFeatures(features_TrilhadasRunas_6);
var lyr_TrilhadasRunas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrilhadasRunas_6, 
                style: style_TrilhadasRunas_6,
                popuplayertitle: "Trilha das Ruínas",
                interactive: true,
                title: '<img src="styles/legend/TrilhadasRunas_6.png" /> Trilha das Ruínas'
            });
var format_TrilhadoMirante_7 = new ol.format.GeoJSON();
var features_TrilhadoMirante_7 = format_TrilhadoMirante_7.readFeatures(json_TrilhadoMirante_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrilhadoMirante_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrilhadoMirante_7.addFeatures(features_TrilhadoMirante_7);
var lyr_TrilhadoMirante_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrilhadoMirante_7, 
                style: style_TrilhadoMirante_7,
                popuplayertitle: "Trilha do Mirante",
                interactive: true,
                title: '<img src="styles/legend/TrilhadoMirante_7.png" /> Trilha do Mirante'
            });
var format_TrilhadasCachoeiras_8 = new ol.format.GeoJSON();
var features_TrilhadasCachoeiras_8 = format_TrilhadasCachoeiras_8.readFeatures(json_TrilhadasCachoeiras_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrilhadasCachoeiras_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrilhadasCachoeiras_8.addFeatures(features_TrilhadasCachoeiras_8);
var lyr_TrilhadasCachoeiras_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrilhadasCachoeiras_8, 
                style: style_TrilhadasCachoeiras_8,
                popuplayertitle: "Trilha das Cachoeiras",
                interactive: true,
                title: '<img src="styles/legend/TrilhadasCachoeiras_8.png" /> Trilha das Cachoeiras'
            });
var format_TrilhadosSentidos_9 = new ol.format.GeoJSON();
var features_TrilhadosSentidos_9 = format_TrilhadosSentidos_9.readFeatures(json_TrilhadosSentidos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrilhadosSentidos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrilhadosSentidos_9.addFeatures(features_TrilhadosSentidos_9);
var lyr_TrilhadosSentidos_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrilhadosSentidos_9, 
                style: style_TrilhadosSentidos_9,
                popuplayertitle: "Trilha dos Sentidos",
                interactive: true,
                title: '<img src="styles/legend/TrilhadosSentidos_9.png" /> Trilha dos Sentidos'
            });
var format_TrilhadaSede_10 = new ol.format.GeoJSON();
var features_TrilhadaSede_10 = format_TrilhadaSede_10.readFeatures(json_TrilhadaSede_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrilhadaSede_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrilhadaSede_10.addFeatures(features_TrilhadaSede_10);
var lyr_TrilhadaSede_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrilhadaSede_10, 
                style: style_TrilhadaSede_10,
                popuplayertitle: "Trilha da Sede",
                interactive: true,
                title: '<img src="styles/legend/TrilhadaSede_10.png" /> Trilha da Sede'
            });
var format_PontosdeInteresse_11 = new ol.format.GeoJSON();
var features_PontosdeInteresse_11 = format_PontosdeInteresse_11.readFeatures(json_PontosdeInteresse_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosdeInteresse_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosdeInteresse_11.addFeatures(features_PontosdeInteresse_11);
var lyr_PontosdeInteresse_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosdeInteresse_11, 
                style: style_PontosdeInteresse_11,
                popuplayertitle: "Pontos de Interesse",
                interactive: true,
    title: 'Pontos de Interesse<br />\
    <img src="styles/legend/PontosdeInteresse_11_0.png" /> Sede<br />\
    <img src="styles/legend/PontosdeInteresse_11_1.png" /> Infra-estrutura do Parque<br />\
    <img src="styles/legend/PontosdeInteresse_11_2.png" /> Início/Fim de trilha<br />\
    <img src="styles/legend/PontosdeInteresse_11_3.png" /> Ponto de Referência<br />\
    <img src="styles/legend/PontosdeInteresse_11_4.png" /> Ponto de Interesse Histórico Cultural<br />\
    <img src="styles/legend/PontosdeInteresse_11_5.png" /> Ponto de Interesse Natural Aquático<br />\
    <img src="styles/legend/PontosdeInteresse_11_6.png" /> Ponto de Interesse Natural Biológico<br />\
    <img src="styles/legend/PontosdeInteresse_11_7.png" /> Ponto de Interesse Natural Paisagístico<br />\
    <img src="styles/legend/PontosdeInteresse_11_8.png" /> Ponto de Interesse Natural Vegetal<br />\
    <img src="styles/legend/PontosdeInteresse_11_9.png" /> Ponto de Interesse Natural Vegetal<br />\
    <img src="styles/legend/PontosdeInteresse_11_10.png" /> Ponto de Referência:Confluência/divisão de trilhas<br />\
    <img src="styles/legend/PontosdeInteresse_11_11.png" /> Travessia<br />\
    <img src="styles/legend/PontosdeInteresse_11_12.png" /> Cume<br />\
    <img src="styles/legend/PontosdeInteresse_11_13.png" /> Cachoeira<br />'
        });
var group_CircuitodeTrilhas = new ol.layer.Group({
                                layers: [lyr_LadeiraDeusmeLivre_4,lyr_TrilhadaCaixadgua_5,lyr_TrilhadasRunas_6,lyr_TrilhadoMirante_7,lyr_TrilhadasCachoeiras_8,lyr_TrilhadosSentidos_9,lyr_TrilhadaSede_10,],
                                fold: "open",
                                title: "Circuito de Trilhas"});

lyr_GoogleSatellite_0.setVisible(true);lyr_LimitesParqueAtalaia_1.setVisible(true);lyr_HidrografiaINEA_2.setVisible(true);lyr_PossveisCanaisIntermitentes_3.setVisible(true);lyr_LadeiraDeusmeLivre_4.setVisible(true);lyr_TrilhadaCaixadgua_5.setVisible(true);lyr_TrilhadasRunas_6.setVisible(true);lyr_TrilhadoMirante_7.setVisible(true);lyr_TrilhadasCachoeiras_8.setVisible(true);lyr_TrilhadosSentidos_9.setVisible(true);lyr_TrilhadaSede_10.setVisible(true);lyr_PontosdeInteresse_11.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LimitesParqueAtalaia_1,lyr_HidrografiaINEA_2,lyr_PossveisCanaisIntermitentes_3,group_CircuitodeTrilhas,lyr_PontosdeInteresse_11];
lyr_LimitesParqueAtalaia_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____o': 'descri____o', 'fid': 'fid', 'Area_ha_': 'Area_ha_', 'Area_km2_': 'Area_km2_', 'Perimetro__km_': 'Perimetro__km_', });
lyr_HidrografiaINEA_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_PossveisCanaisIntermitentes_3.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'value': 'value', 'label': 'label', });
lyr_LadeiraDeusmeLivre_4.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'comprimento-m': 'comprimento-m', });
lyr_TrilhadaCaixadgua_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_TrilhadasRunas_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_TrilhadoMirante_7.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_TrilhadasCachoeiras_8.set('fieldAliases', {'fid': 'fid', 'fid_1': 'fid_1', 'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'fid_2': 'fid_2', 'Name_2': 'Name_2', });
lyr_TrilhadosSentidos_9.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_TrilhadaSede_10.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_PontosdeInteresse_11.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'descri____o': 'descri____o', 'Trilha': 'Trilha', 'Classe': 'Classe', });
lyr_LimitesParqueAtalaia_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'descri____o': 'TextEdit', 'fid': 'TextEdit', 'Area_ha_': 'TextEdit', 'Area_km2_': 'TextEdit', 'Perimetro__km_': 'TextEdit', });
lyr_HidrografiaINEA_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_PossveisCanaisIntermitentes_3.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'value': 'Range', 'label': 'TextEdit', });
lyr_LadeiraDeusmeLivre_4.set('fieldImages', {'fid': 'TextEdit', 'fid_1': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'comprimento-m': 'Range', });
lyr_TrilhadaCaixadgua_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_TrilhadasRunas_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_TrilhadoMirante_7.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_TrilhadasCachoeiras_8.set('fieldImages', {'fid': 'TextEdit', 'fid_1': 'TextEdit', 'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'fid_2': 'TextEdit', 'Name_2': 'TextEdit', });
lyr_TrilhadosSentidos_9.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_TrilhadaSede_10.set('fieldImages', {'fid': '', 'Name': '', });
lyr_PontosdeInteresse_11.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'descri____o': 'TextEdit', 'Trilha': 'TextEdit', 'Classe': 'TextEdit', });
lyr_LimitesParqueAtalaia_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descri____o': 'no label', 'fid': 'no label', 'Area_ha_': 'no label', 'Area_km2_': 'no label', 'Perimetro__km_': 'no label', });
lyr_HidrografiaINEA_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_PossveisCanaisIntermitentes_3.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'value': 'no label', 'label': 'no label', });
lyr_LadeiraDeusmeLivre_4.set('fieldLabels', {'fid': 'no label', 'fid_1': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'comprimento-m': 'no label', });
lyr_TrilhadaCaixadgua_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_TrilhadasRunas_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_TrilhadoMirante_7.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_TrilhadasCachoeiras_8.set('fieldLabels', {'fid': 'no label', 'fid_1': 'no label', 'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'fid_2': 'no label', 'Name_2': 'no label', });
lyr_TrilhadosSentidos_9.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_TrilhadaSede_10.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', });
lyr_PontosdeInteresse_11.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', 'descri____o': 'no label', 'Trilha': 'no label', 'Classe': 'no label', });
lyr_PontosdeInteresse_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});