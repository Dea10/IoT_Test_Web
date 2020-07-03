import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/database";

const UpdateDevice = ({ id, label, manufacturer, type, state }) => {

    const [update, setUpdate] = useState(false)

    const handleUpdate = () => {
        console.log('update');
        setUpdate(true);
    }

    const [inputValue, setInputValue] = useState({
        id,
        label,
        manufacturer,
        type,
        state
    });

    const handleInputChange = (event) => {
        const target = event.target;

        setInputValue({
            ...inputValue,
            [target.name]: target.value
        });
    }

    const writeUserData = (device) => {
        firebase.database().ref('/devices/').child(device.id).set({
            id: device.id,
            label: device.label,
            manufacturer: device.manufacturer,
            type: device.type,
            state: device.state
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        writeUserData(inputValue);

        console.log('done!');

        setInputValue({
            id: '',
            label: '',
            manufacturer: '',
            type: '',
            state: ''
        });

        setUpdate(false);
    }

    return (
        <div>
            <button className='btn btn-warning' onClick={handleUpdate}>Update</button>
            {
                update && <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>id:</label>
                        <div className='col-sm-10'>
                            <input
                                name='id'
                                type="text"
                                className='form-control'
                                value={inputValue.id}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>label:</label>
                        <div className='col-sm-10'>
                            <input
                                name='label'
                                type="text"
                                className='form-control'
                                value={inputValue.label}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>manufacturer:</label>
                        <div className='col-sm-10'>
                            <input
                                name='manufacturer'
                                type="text"
                                className='form-control'
                                value={inputValue.manufacturer}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>type:</label>
                        <div className='col-sm-10'>
                            <input
                                name='type'
                                type="text"
                                className='form-control'
                                value={inputValue.type}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div className='form-group row'>
                        <label className='col-sm-2 col-form-label'>state:</label>
                        <div className='col-sm-10'>
                            <input
                                name='state'
                                type="text"
                                className='form-control'
                                value={inputValue.state}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br />
                    <input className='btn btn-primary' type="submit" value="Submit" />
                </form>
            }
        </div>
    )
}

export default UpdateDevice;