var count = 0;

function increase() {
    if ( count == 3 ) { count = 0 } else { count++ }
    readJsonData(url, count);
}

function decrease() {
    if ( count == 0 ) { count = 3 } else { count-- }
    readJsonData(url, count);
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
            let constructeurs = '';
            for (let i = 0; i < data.data[nb].constructeurs.length; i++) {
                constructeurs = constructeurs + data.data[nb].constructeurs[i];
            }
            document.getElementById('construction').innerHTML = 'Construit en '+data.data[nb].construction+' par '+constructeurs;
            document.getElementById('motorisation').innerHTML = 'Motorisation '+data.data[nb].motorisation;
            document.getElementById('vitesse_max').innerHTML = 'Vitesse maximale: '+data.data[nb].vitesse_max;
            document.getElementById('ecartement').innerHTML = 'Ecartement '+data.data[nb].ecartement;
            document.getElementById('quantite_transport').innerHTML = 'Caractéristique:<br>Fret: '+data.data[nb].quantite_transport.fret+' kg<br>Première classe: '+data.data[nb].quantite_transport.pere+'<br>Seconde classe: '+data.data[nb].quantite_transport.deme+'<br>Troisième classe: '+data.data[nb].quantite_transport.teme
        })
        .catch(error => console.error('Erreur:', error));
    }
readJsonData(url, count);