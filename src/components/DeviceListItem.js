import React from 'react';
import UpdateDevice from './UpdateDevice';
import ControlDevice from './ControlDevice';
import DeleteDevice from './DeleteDevice';

const DeviceListItem = (props) => {

    const {_id, label} = props;

    return (
        <>
            <li className='list-group-item'>{ label } <UpdateDevice /> <ControlDevice /> <DeleteDevice _id={_id} /></li>
        </>
    )
}

export default DeviceListItem;