import React from 'react';
import { useDispatch,} from "react-redux"; 
import {  useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";


export default function DeleteBtn(){

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
        <button onClick={handleDelete} >Delete</button>
    )
}

