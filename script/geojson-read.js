let data = fetch("https://ShorpAzha.github.io/script/geojson/l_600.geojson").then(response => {
        return response.json();
    });

console.log(data)