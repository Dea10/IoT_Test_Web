import React, { useState, useEffect } from 'react';
import DeviceListItem from './DeviceListItem';
import AddDevice from './AddDevice';
import axios from 'axios';

const DevicesList = () => {

    //const url = `http://localhost:8080/device`;
    const [devices, setDevices] = useState([]);
    const [loading, setLoading] = useState(false);
    
    console.log('hey')

    useEffect(() => {
        axios.get(`http://localhost:8080/device`)
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
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-sm">
                        <h2>Devices</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm"
                        onClick = {() => {setLoading(true)}}
                    >
                        <AddDevice />
                    </div>
                </div>
            </div>

            <ul className='list-group list-group-flush'>
                {
                    devices.map(device =>
                        <DeviceListItem
                            key={device.id}
                            _id={device._id}
                            label={device.label}
                        />)
                }
            </ul>

        </div>
    )
}

export default DevicesList;