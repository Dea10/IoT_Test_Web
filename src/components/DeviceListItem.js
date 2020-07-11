import React from 'react';
import UpdateDevice from './UpdateDevice';
import ControlDevice from './ControlDevice';
import DeleteDevice from './DeleteDevice';

const DeviceListItem = ({ _id, label, device }) => {


    return (
        <>
            <li className='list-group-item'>{ label } <UpdateDevice device={device} /> <ControlDevice /> <DeleteDevice _id={_id} /></li>
        </>
    )
}

export default DeviceListItem;