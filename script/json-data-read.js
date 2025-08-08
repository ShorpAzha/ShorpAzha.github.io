function readJsonData(jsonFile) {
    fetch(jsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            var nom = document.getElementById('nom');
            var nom_ = document.getElementById('nom_');
            var epoque = document.getElementById('epoque');
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
            }      
            nom.innerHTML(data[0].nom);
            nom_.innerHTML(data[0].nom_);
            epoque.innerHTML(data[0].epoque);
        })
        .catch(error => console.error('Erreur:', error));
    }