import React, { useState } from 'react';
import AddDeviceForm from './AddDeviceForm';

const AddDevice = () => {

    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <button onClick={handleShowForm} className='btn btn-success'>Add Device</button>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm">
                        {showForm && <AddDeviceForm />}
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default AddDevice;