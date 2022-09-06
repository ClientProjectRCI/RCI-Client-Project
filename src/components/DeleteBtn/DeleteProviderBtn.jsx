import React from 'react';
import { useDispatch,} from "react-redux"; 
import {  useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';


export default function DeleteProviderBtn(){

    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector((store) => store.details);
    console.log('what is in the>>>>>>',details);

    const handleDelete =()=>{
        dispatch({
            type:'DELETE_PROVIDERS',
            payload: details.id,
        })
        console.log('deleteBtn is WHAT??????', details.id);
        history.push('/providers')
    }

    return(
        <Button 
        variant="contained"
        style={{backgroundColor: 'maroon', color: 'white'}}
        // color="success"
        onClick={handleDelete} >Delete</Button>
    )
}

