import React from 'react';
import UpdateDevice from './UpdateDevice';
import ControlDevice from './ControlDevice';
import DeleteDevice from './DeleteDevice';

const DeviceListItem = (props) => {

    const {id, label} = props;

    return (
        <>
            <li className='list-group-item'>{ id } - { label } <UpdateDevice /> <ControlDevice /> <DeleteDevice /></li>
        </>
    )
}

export default DeviceListItem;