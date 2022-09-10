import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';

export default function DeleteGroupBtn() {
    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector((store) => store.details);
    console.log('what is in this?>>>>>>', details);

    // delete function + sweetalert
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'DELETE_GROUPS',
                    payload: details.id,
                });
                console.log('deleteBtn is WHAT??????', details.id);
                history.push('/resources');
                Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            }
        });
    };

    return (
        <Button
            variant="contained"
            style={{ backgroundColor: 'maroon', color: 'white' }}
            // color="success"
            onClick={handleDelete}
        >
            Delete
        </Button>
    );
}
