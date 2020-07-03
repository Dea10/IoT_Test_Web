import React, { useState, useEffect } from 'react';


import * as firebase from "firebase/app";
import "firebase/database";
import AddDevice from './AddDevice';
import DeleteDevice from './DeleteDevice';
import UpdateDevice from './UpdateDevice';


const DevicesList = () => {
    const [state, setState] = useState([]);


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
            for (let i in resp) {
                devs.push(resp[i]);
            }

            console.log(devs);

            setState(devs);
        });
    }, [])

    return (
        <div>
            <h3>Devices List</h3>
            {
                <AddDevice />
            }
            <ol>
                {
                    state.map((device) => {
                        return (
                            <div key={device.id}>
                                <DeleteDevice
                                    label={device.label}
                                    id={device.id}
                                />
                                <UpdateDevice 
                                    id={device.id}
                                    label={device.label}
                                    manufacturer={device.manufacturer}
                                    type={device.type}
                                    state={device.state}
                                />
                            </div>
                        )
                    })
                }
            </ol>
        </div>
    )
}

export default DevicesList;