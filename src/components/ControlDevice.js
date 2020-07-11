import React, { useState } from 'react';
import ControlDeviceForm from './ControlDeviceForm';

const ControlDevice = () => {

    const [showForm, setShowForm] = useState(false);

    const handleOnClick = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            {
                showForm && <ControlDeviceForm />
            }
            <button onClick={handleOnClick} className='btn btn-info'>Control</button>
        </>
    )
}

export default ControlDevice;