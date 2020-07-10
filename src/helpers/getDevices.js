const axios = require('axios');

export const getDevices = () => {

    const url = `http://localhost:8080/device`;
    let data = [];

    axios.get(url)
        .then(function (response) {
            data = response.data.devices;
        })
        .catch(function (error) {
            console.log(error);
        });

    return data;
}