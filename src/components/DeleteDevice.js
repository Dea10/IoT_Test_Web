import React from 'react';
import Axios from 'axios';

const DeleteDevice = (props) => {

    const {_id} = props;

    const handleDelete = () => {
        console.log(_id);
        Axios.delete(`https://web-test-back.herokuapp.com/device/${_id}`)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return(
        <>
            <button onClick={handleDelete} className='btn btn-danger float-right'>Delete</button>
        </>
    )
}

export default DeleteDevice;