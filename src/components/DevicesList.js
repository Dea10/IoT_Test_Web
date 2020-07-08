import React from 'react';
import DeviceListItem from './DeviceListItem';
import AddDevice from './AddDevice';

import devices from '../db/devices';

const DevicesList = () => {

    return (
        <div>
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