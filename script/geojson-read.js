async function myFunction() {
    let data = await fetch("https://ShorpAzha.github.io/script/geojson/l_600.geojson").then(response => response.json()); /*console.log(data);*/ return data; data.forEach(); }
myFunction();