import React, { useState, useEffect } from 'react';


import * as firebase from "firebase/app";
import "firebase/database";
import AddDevice from './AddDevice';


const DevicesList = () => {
    const [state, setState] = useState(['one', 'two']);
    

    const firebaseConfig = {
        apiKey: "AIzaSyC2Y7QCis_lQ6sLualc4zNLaRnf-ptH2G4",
        authDomain: "iotandroid-7bad6.firebaseapp.com",
        databaseURL: "https://iotandroid-7bad6.firebaseio.com",
        projectId: "iotandroid-7bad6",
        storageBucket: "iotandroid-7bad6.appspot.com",
        messagingSenderId: "990215716852",
        appId: "1:990215716852:web:9253534be1152c71dbc3a1",
        measurementId: "G-NDPNP3L9DB"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const database = firebase.database();

    const ref = database.ref('/devices/');

    

    useEffect(() => {
        ref.on('value', snapshot => {

            const resp = snapshot.val();
            console.log(resp);

            const devs = []
            for(let i in resp) {
                devs.push(resp[i]);
            }
            
            console.log(devs);

            setState(devs);
        });
    }, [])

    function handleDelete(id) {
        console.log(id);
        ref.child(id).remove();
    }

    return (
        <div>
            <h3>Devices List</h3>
            {
                <AddDevice />
            }
            <ol>
                {
                    state.map((device) => {
                        return(
                            <li key={device.id}>
                                {device.label}
                                <button onClick={handleDelete.bind(this, device.id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default DevicesList;