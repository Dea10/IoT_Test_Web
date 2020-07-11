import React, { useState } from 'react'
import Axios from 'axios';

const AddDeviceForm = ({ setShowForm }) => {

    const [addDevice, setAddDevice] = useState({
        id: '',
        type: '',
        label: ''
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setShowForm(false);

        Axios.post(`https://web-test-back.herokuapp.com/device`, {
            id: addDevice.id,
            type: addDevice.type,
            label: addDevice.label
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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

