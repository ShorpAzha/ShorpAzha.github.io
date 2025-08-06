const map = L.map('map').setView([47, 0], 5);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function onEachFeature(feature, layer) {
	let popupContent = `<p>Ligne n°${feature.properties.code_ligne}<br>${feature.properties.lib_ligne}<br>Statut: ${feature.properties.statut}</p>`;

	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.popupContent;
	}

	layer.bindPopup(popupContent);
}

const trainLinesLayer = L.geoJSON(trainLines, {
	style: function(feature) {
		switch (feature.properties.statut) {
			case 'Exploitée': return {color: "#8a2be2"};
			case 'Fermée': return {color: "#dc143c"};
			case 'Neutralisée': return {color: "#8b0000"};
			case 'Transférée en voie de service': return {color: "#800080"};
			case 'Déclassée vendue': return {color: "#e9967a"};
			case 'Déclassée non vendue': return {color: "#fa8072"};
			case 'Fermée avec maintien en place de la voie': return {color: "#4169e1"};
			case 'Fermée et déposée (Plus utilisable)': return {color: "#008000"};
			case 'Fermée non déposée (Plus utilisable)': return {color: "#32cd32"};
			case 'Fermée et mise à disposition de tiers': return {color: "#90ee90"};
			case 'Neutralisée et conservée pour les besoins de la Défense': return {color: "#d2691e"};
			case 'Retranchée (Plus utilisable)': return {color: "#696969"};
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
