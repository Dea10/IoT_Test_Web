import React, { useState } from 'react'

import devices from '../db/devices';

const AddDeviceForm = () => {

    const [addDevice, setAddDevice] = useState({
        id: '',
        type: '',
        label: ''
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();

        devices.push(addDevice);
        console.log(devices);
    }

    const handleOnChange = ({ target }) => {
        setAddDevice({
            ...addDevice,
            [target.name]: target.value
        })
    }

    return (
        <form>
            <div className="form-group row">
                <label className='col-sm-2 col-form-label'>id</label>
                <div className='col-sm-10'>
                    <input
                        name='id'
                        type="text"
                        className="form-control"
                        onChange={handleOnChange} />
                </div>
            </div>
            <div className="form-group row">
                <label className='col-sm-2 col-form-label'>type</label>
                <div className='col-sm-10'>
                    <input
                        name='type'
                        type="text"
                        className="form-control"
                        onChange={handleOnChange} />
                </div>
            </div>
            <div className="form-group row">
                <label className='col-sm-2 col-form-label'>label</label>
                <div className='col-sm-10'>
                    <input
                        name='label'
                        type="text"
                        className="form-control"
                        onChange={handleOnChange} />
                </div>
            </div>

            <button onClick={handleOnSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}

export default AddDeviceForm;

