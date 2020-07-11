import React, { useState } from 'react';
import UpdateDeviceForm from './UpdateDeviceForm';

const UpdateDevice = ({ device }) => {

    const [showForm, setShowForm] = useState(false);

    const handleOnClick = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            {
                showForm && <UpdateDeviceForm
                    setShowForm={setShowForm}
                    device={device}
                />
            }
            <button
                onClick={handleOnClick}
                className='btn btn-warning'
            >
                Update
            </button>
        </>
    )
}

export default UpdateDevice;