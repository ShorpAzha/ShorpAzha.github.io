// Chargement des données GeoJSON à partir d'un fichier externe
fetch('https://ShorpAzha.github.io/script/geojson/l_710.geojson')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors du chargement du fichier GeoJSON');
        }
        return response.json();
    })
    .then(data => {
        // Création de la carte Leaflet
        const map = L.map('map').setView([48.8566, 2.3522], 13); // Exemple pour Paris

        // Ajout d'une couche de tuiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Ajout des données GeoJSON à la carte
        L.geoJSON(data).addTo(map);
    })
    .catch(error => console.error('Erreur:', error));