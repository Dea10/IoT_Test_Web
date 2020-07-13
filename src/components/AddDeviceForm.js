import React, { useState } from 'react'
import Axios from 'axios';

const AddDeviceForm = ({ setShowForm }) => {

    const [addDevice, setAddDevice] = useState({
        type: 'tv',
        label: '',
        manufacturer: '',
        state: {
            turnedOn: ''
        }
    });

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setShowForm(false);

        //console.log(addDevice);

        Axios.post(`https://web-test-back.herokuapp.com/device`, addDevice)
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

    const handleOnStateChange = ({ target }) => {
        setAddDevice({
            ...addDevice,
            state: {
                ...addDevice.state,
                [target.name]: target.value
            }
        })
    }

    return (
        <form>
            <div className="form-group row">
                <label className='col-sm-2 col-form-label'>type</label>
                <div className='col-sm-10'>
                    <select className="form-control"
                        name='type'
                        value={addDevice.type}
                        onChange={handleOnChange}
                    >
                        <option value='tv'>tv</option>
                        <option value='fan'>fan</option>
                        <option value='light'>light</option>
                    </select>
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
            <div className="form-group row">
                <label className='col-sm-2 col-form-label'>manufacturer</label>
                <div className='col-sm-10'>
                    <input
                        name='manufacturer'
                        type="text"
                        className="form-control"
                        onChange={handleOnChange} />
                </div>
            </div>
            {
                addDevice.type !== 'fan' ?
                    <div className="form-group row">
                        <label className='col-sm-2 col-form-label'>state: turnedOn</label>
                        <div className='col-sm-10'>
                            <input
                                name='turnedOn'
                                type="text"
                                className="form-control"
                                onChange={handleOnStateChange} />
                        </div>
                    </div>
                    :
                    <>
                        <div className="form-group row">
                            <label className='col-sm-2 col-form-label'>state: turnedOn</label>
                            <div className='col-sm-10'>
                                <input
                                    name='turnedOn'
                                    type="text"
                                    className="form-control"
                                    onChange={handleOnStateChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className='col-sm-2 col-form-label'>state: speed</label>
                            <div className='col-sm-10'>
                                <input
                                    name='speed'
                                    type="text"
                                    className="form-control"
                                    onChange={handleOnStateChange} />
                            </div>
                        </div>
                    </>
            }

            <button onClick={handleOnSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form >
    )
}

export default AddDeviceForm;

