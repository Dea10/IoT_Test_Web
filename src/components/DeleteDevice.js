import React from 'react';

import * as firebase from "firebase/app";
import "firebase/database";

const DeleteDevice = (props) => {

    const database = firebase.database();

    const ref = database.ref('/devices/');

    const handleDelete = () => {
        ref.child(props.id).remove();
    }

    return(
        <div>
            <span>{props.id} - {props.label}</span>
            <button className='btn btn-danger ml-3' onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default DeleteDevice;