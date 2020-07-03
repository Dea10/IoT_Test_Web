import React, { useState } from 'react';

import * as firebase from "firebase/app";
import "firebase/database";

const AddDevice = () => {

    const [inputValue, setInputValue] = useState({
        id: '',
        label: '',
        manufacturer: '',
        type: '',
        state: ''
    });

    const handleInputChange = (event) => {
        const target = event.target;

        setInputValue({
            ...inputValue,
            [target.name]: target.value
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

    return (
        <form onSubmit={handleSubmit}>
            <label>
                id:
                    <input
                    name='id'
                    type="text"
                    className = 'form-control'
                    value={inputValue.id}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                label:
                    <input
                    name='label'
                    type="text"
                    className = 'form-control'
                    value={inputValue.label}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                manufacturer:
                    <input
                    name='manufacturer'
                    type="text"
                    className = 'form-control'
                    value={inputValue.manufacturer}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                type:
                    <input
                    name='type'
                    type="text"
                    className = 'form-control'
                    value={inputValue.type}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                state:
                    <input
                    name='state'
                    type="text"
                    className = 'form-control'
                    value={inputValue.state}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <input className='btn btn-primary' type="submit" value="Submit" />
        </form>
    )
}

export default AddDevice;