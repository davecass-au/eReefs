import axios from 'axios';

function getTemperature() {
    axios.get('https://localhost:7203/Temperature')
        .then(response => {
            return(response.data);
        })
        .catch(error => {
            console.error(error);
        });
}

getTemperature();