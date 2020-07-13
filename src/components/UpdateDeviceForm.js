import React, { useState } from 'react';
import Axios from 'axios';

const UpdateDeviceForm = ({ device, setShowForm }) => {

    const [updateDevice, setUpdateDevice] = useState(device);

    const handleOnUpdate = (e) => {
        e.preventDefault();
        
        setShowForm(false);

        Axios.put(`https://web-test-back.herokuapp.com/device/${updateDevice._id}`, updateDevice)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleOnChange = ({ target }) => {
        setUpdateDevice({
            ...updateDevice,
            [target.name]: target.value
        })
    }

    return (
        <>
            <form>
                <div className="form-group row">
                    <label className='col-sm-2 col-form-label'>id</label>
                    <div className='col-sm-10'>
                        <input
                            name='id'
                            type="text"
                            className="form-control"
                            value={updateDevice._id}
                            disabled
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className='col-sm-2 col-form-label'>type</label>
                    <div className='col-sm-10'>
                        <input
                            name='type'
                            type="text"
                            className="form-control"
                            value={updateDevice.type}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className='col-sm-2 col-form-label'>label</label>
                    <div className='col-sm-10'>
                        <input
                            name='label'
                            type="text"
                            className="form-control"
                            value={updateDevice.label}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>

                <button onClick={handleOnUpdate} type="submit" className="btn btn-primary">Submit</button>
            </form>
            <br />
        </>
    )
}

export default UpdateDeviceForm;