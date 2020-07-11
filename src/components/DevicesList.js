import React, { useState, useEffect } from 'react';
import DeviceListItem from './DeviceListItem';
import AddDevice from './AddDevice';
import axios from 'axios';

const DevicesList = () => {

    //const url = `http://localhost:8080/device`;
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://web-test-back.herokuapp.com/device`)
        .then(function (response) {
            const data = response.data.devices;
            setDevices(data);
            setLoading(false);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [loading])
    
    
    return (
        <div onClick = {() => {setLoading(true)}}>
            <div className='container'>
                <div className="row">
                    <div className="col-sm">
                        <h2>Devices</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <AddDevice />
                    </div>
                </div>
            </div>

            <ul className='list-group list-group-flush'>
                {
                    devices.map(device =>
                        <DeviceListItem
                            key={device._id}
                            _id={device._id}
                            label={device.label}
                            device={device}
                        />)
                }
            </ul>

        </div>
    )
}

export default DevicesList;