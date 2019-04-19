var lofotenMapData = [{
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
            "popupContent": "Start og avsluttning på reise. Dag 1: resisen starter fra Svovær. Dag 4: reisen avslutter på Svolvær."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            14.56765651702881,
            68.2321600865177
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "popupContent": "Dag 2: Stopp på Henningsvær, med mulighet for rib-tur eller fisketur i midnattsolen."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            14.208755493164062,
            68.14652071926851
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "popupContent": "Dag 3: Stopp på Å med hvalsafari."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            12.978973388671875,
            67.8792908066858
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
            "popupContent": "Dag 4: Vi drar inn i den vakre Trollfjorden før vi setter snuten hjemover."
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            14.93659973144531,
            68.36351002324014
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              14.566497802734373,
              68.2322396614308
            ],
            [
              14.548645019531248,
              68.20982042840029
            ],
            [
              14.522552490234375,
              68.1894202474079
            ],
            [
              14.482727050781252,
              68.17615038884539
            ],
            [
              14.403076171875,
              68.16338366778501
            ],
            [
              14.31793212890625,
              68.15623120159573
            ],
            [
              14.2108154296875,
              68.14805422620769
            ],
            [
              14.08172607421875,
              68.1071256663432
            ],
            [
              13.8812255859375,
              68.05278304131106
            ],
            [
              13.49945068359375,
              67.98802029075827
            ],
            [
              13.25775146484375,
              67.93546032652277
            ],
            [
              12.980346679687498,
              67.87967864740527
            ],
            [
              13.477478027343748,
              67.91688129785506
            ],
            [
              13.6614990234375,
              67.941650035336
            ],
            [
              13.96636962890625,
              67.98596135891634
            ],
            [
              14.39208984375,
              68.05688884134597
            ],
            [
              14.743652343749998,
              68.13680613169655
            ],
            [
              14.883728027343748,
              68.19503210757499
            ],
            [
              14.95513916015625,
              68.2510752102293
            ],
            [
              14.964752197265625,
              68.27269150068895
            ],
            [
              14.975738525390623,
              68.29149374033034
            ],
            [
              14.966125488281252,
              68.31129555378853
            ],
            [
              14.959945678710936,
              68.32474082158716
            ],
            [
              14.967498779296873,
              68.33386893137417
            ],
            [
              14.979858398437502,
              68.34502054084477
            ],
            [
              14.995651245117188,
              68.35945882038932
            ],
            [
              14.998054504394531,
              68.36351002324014
            ],
            [
              14.99530792236328,
              68.36464929394825
            ],
            [
              14.937286376953125,
              68.36388978648853
            ],
            [
              14.99359130859375,
              68.36439612761531
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              14.99359130859375,
              68.36452271113431
            ],
            [
              14.987411499023436,
              68.35743294817568
            ],
            [
              14.981231689453123,
              68.34958098793473
            ],
            [
              14.969215393066406,
              68.34007902459251
            ],
            [
              14.956855773925781,
              68.33095340522786
            ],
            [
              14.923553466796875,
              68.31865338156409
            ],
            [
              14.882354736328127,
              68.30799644579106
            ],
            [
              14.841156005859373,
              68.28920780882423
            ],
            [
              14.794464111328123,
              68.27396241031346
            ],
            [
              14.756698608398438,
              68.25590886206668
            ],
            [
              14.720306396484373,
              68.24165937506933
            ],
            [
              14.650955200195312,
              68.22154231174606
            ],
            [
              14.595336914062498,
              68.22561808218681
            ],
            [
              14.568557739257814,
              68.23249429929284
            ]
          ]
        }
      }
    ]
  }];

document.body.onload = function() {
    var map = L.map('map-lofoten').setView([68.175040, 14.084761], 8);
    L.tileLayer('https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=norges_grunnkart&zoom={z}&x={x}&y={y}', {
        attribution: '<a href="http://www.kartverket.no/">Kartverket</a>'
        }).addTo(map);
    
    L.geoJSON(lofotenMapData, {
        onEachFeature: function onEachFeature(feature, layer) {
            if(feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent);
            }
        }
    }).addTo(map);

}
