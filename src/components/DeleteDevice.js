import React, { useState } from 'react';

import * as firebase from "firebase/app";
import "firebase/database";

const DeleteDevice = (props) => {

    const database = firebase.database();

    const ref = database.ref('/devices/');

    const handleDelete = () => {
        //console.log(id);
        ref.child(props.id).remove();
    }

    return(
        <div>
            <span>{props.id} - {props.label}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteDevice;