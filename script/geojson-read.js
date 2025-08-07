var data = fetchJSON('placesgj.geojson').then(function(data) { 
    // do what you want to do with `data` here...
    data.features.forEach(function(feature) {
        console.log(feature);
        var symbol = feature.properties['icon'];
        console.log(symbol);
    });
});