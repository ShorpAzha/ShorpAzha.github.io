const data_url = 'https://ShorpAzha.github.io/script/json/data.json';
const data_max = 14;

function updateCompteurInURL(nouvelleValeur) {
    const url = new URL(window.location);
    url.searchParams.set('train', nouvelleValeur);
    window.history.replaceState({}, '', url);
}


function increase() {
    if ( count == data_max ) { count = 1 } else { count++ }
    readJsonData(data_url, count-1);
    updateCompteurInURL(count);
}

function decrease() {
    if ( count == 1 ) { count = data_max } else { count-- }
    readJsonData(data_url, count-1);
    updateCompteurInURL(count);
}

function readJsonData(jsonFile, nb) {
    fetch(jsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('nom').innerHTML = data.data[nb].nom;
            document.getElementById('nom_').innerHTML = data.data[nb].nom_;
            document.getElementById('description').innerHTML = data.data[nb].description;
            // Images
            document.getElementById('image1').src = data.data[nb].image_url[0];
            document.getElementById('image2').src = data.data[nb].image_url[1];
            document.getElementById('image3').src = data.data[nb].image_url[2];
            document.getElementById('image11').src = data.data[nb].image_url[3];
            document.getElementById('image12').src = data.data[nb].image_url[4];
            document.getElementById('image13').src = data.data[nb].image_url[5];
            document.getElementById('image21').src = data.data[nb].image_url[6];
            document.getElementById('image22').src = data.data[nb].image_url[7];
            document.getElementById('image23').src = data.data[nb].image_url[8];
            // Legende images
            document.getElementById('livree0').innerHTML = data.data[nb].livree[0];
            document.getElementById('livree1').innerHTML = data.data[nb].livree[1];
            document.getElementById('livree2').innerHTML = data.data[nb].livree[2];
            // Caracteristiques
            document.getElementById('epoque').innerHTML = 'Epoque: '+data.data[nb].epoque;
            document.getElementById('type').innerHTML = 'Type: '+data.data[nb].type;
            let constructeurs = data.data[nb].constructeurs[0];
            if (data.data[nb].constructeurs.length > 1) {
                for (let i = 1; i < data.data[nb].constructeurs.length; i++) {
                    constructeurs = constructeurs + ', ' + data.data[nb].constructeurs[i];
                }
            }
            let construction;
            if (data.data[nb].construction.length > 1) {
                construction = 'de ' + data.data[nb].construction[0] + ' à ' + data.data[nb].construction[1];
            } else {
                construction = 'en ' + data.data[nb].construction[0];
            } 
            document.getElementById('construction').innerHTML = 'Construit '+construction+' par '+constructeurs;
            document.getElementById('quantite').innerHTML = 'Quantité: '+data.data[nb].quantite;
            let mise_en_service, retrait;
            if (data.data[nb].mise_en_service.length > 1) {
                mise_en_service = 'de ' + data.data[nb].mise_en_service[0] + ' à ' + data.data[nb].mise_en_service[1];
            } else {
                mise_en_service = 'en ' + data.data[nb].mise_en_service[0];
            }
            if (data.data[nb].retrait.length > 1) {
                retrait = 'de ' + data.data[nb].retrait[0] + ' à ' + data.data[nb].retrait[1];
            } else {
                retrait = 'en ' + data.data[nb].retrait[0];
            }
            document.getElementById('mise_en_service').innerHTML = 'Mise en service '+mise_en_service+' et radié '+retrait;
            document.getElementById('ecartement').innerHTML = 'Ecartement '+data.data[nb].ecartement;
            document.getElementById('motorisation').innerHTML = 'Motorisation '+data.data[nb].motorisation;
            document.getElementById('vitesse_max').innerHTML = 'Vitesse maximale: '+data.data[nb].vitesse_max+' km/h';
            document.getElementById('quantite_transport').innerHTML = 'Capacité: '+data.data[nb].capacite;
        })
        .catch(error => console.error('Erreur:', error));
    }
readJsonData(data_url, count-1);