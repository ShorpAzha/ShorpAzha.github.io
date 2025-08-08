function readJsonData(jsonFile) {
    fetch(jsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            console.log(data.data[0])            
        })
        .catch(error => console.error('Erreur:', error));
    }