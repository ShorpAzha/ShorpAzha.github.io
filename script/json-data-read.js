function readJsonData(jsonFile, num) {
    fetch(jsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log(data[num])
            
        })
        .catch(error => console.error('Erreur:', error));
    }