const data_url = 'https://ShorpAzha.github.io/script/json/data.json';
const data_max = 7;

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
            document.getElementById('nom').innerText = data.data[nb].nom;
            document.getElementById('nom_').innerHTML = data.data[nb].nom_;
            document.getElementById('description').innerHTML = data.data[nb].description;
            document.getElementById('image').src = data.data[nb].image_url;
            document.getElementById('epoque').innerHTML = 'Epoque: '+data.data[nb].epoque;
            let constructeurs = data.data[nb].constructeurs[0];
            if (data.data[nb].constructeurs.length > 1) {
                for (let i = 1; i < data.data[nb].constructeurs.length; i++) {
                    constructeurs = constructeurs + ', ' + data.data[nb].constructeurs[i];
                }
            }                
            document.getElementById('construction').innerHTML = 'Construit en '+data.data[nb].construction+' par '+constructeurs;
            document.getElementById('motorisation').innerHTML = 'Motorisation '+data.data[nb].motorisation;
            document.getElementById('vitesse_max').innerHTML = 'Vitesse maximale: '+data.data[nb].vitesse_max+' km/h';
            document.getElementById('ecartement').innerHTML = 'Ecartement '+data.data[nb].ecartement;
            document.getElementById('quantite_transport').innerHTML = 'Caractéristique:<br>Première classe: '+data.data[nb].quantite_transport.pere+' places<br>Seconde classe: '+data.data[nb].quantite_transport.deme+' places<br>Troisième classe: '+data.data[nb].quantite_transport.teme+' places';
        })
        .catch(error => console.error('Erreur:', error));
    }
readJsonData(data_url, count-1);