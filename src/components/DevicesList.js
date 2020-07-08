import React from 'react';
import DeviceListItem from './DeviceListItem';
import AddDevice from './AddDevice';

const DevicesList = () => {

    const devices = [
        {
            id: '001',
            type: 'light',
            label: 'label001'
        },
        {
            id: '002',
            type: 'fan',
            label: 'label002'
        },
        {
            id: '003',
            type: 'light',
            label: 'label003'
        }
    ];

    return (
        <div>
            <h2>Devices <AddDevice /></h2>

            <ul className='list-group list-group-flush'>
                {
                    devices.map(device =>
                        <DeviceListItem
                            key={device.id}
                            id={device.id}
                            label={device.label}
                        />)
                }
            </ul>

        </div>
    )
}

export default DevicesList;