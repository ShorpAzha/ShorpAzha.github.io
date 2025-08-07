function geoJsonMiniMap(geoJsonFile) {
    // Chargement des données GeoJSON à partir d'un fichier externe
    fetch(geoJsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier GeoJSON');
            }
            return response.json();
        })
        .then(data => {
            // Création de la carte Leaflet
            const map = L.map('map').setView([45.6062, 2.7449], 13);

            // Ajout d'une couche de tuiles
            const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            // Ajout de Pop-Up 
            function onEachFeature(feature, layer) {
                let popupContent = `<p>${feature.properties.name}</p>`;

                if (feature.properties && feature.properties.popupContent) {
                    popupContent += feature.properties.popupContent;
                }
                layer.bindPopup(popupContent);
            }

            // Ajout des données GeoJSON à la carte
            const dataLayer = L.geoJSON(data, {
                style: function(feature) {
                    switch (feature.properties.compagnie) {
                        case 'PO': return {color: "#999"};
                    }
                },

                filter(feature, layer) {
                    if (feature.properties) {
                        // If the property "underConstruction" exists and is true, return false (don't render features under construction)
                        return feature.properties.underConstruction !== undefined ? !feature.properties.underConstruction : true;
                    }
                    return false;
                },
                onEachFeature
            }).addTo(map);
        })
        .catch(error => console.error('Erreur:', error));
    }