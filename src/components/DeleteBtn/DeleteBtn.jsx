import React from 'react';
import { useDispatch,} from "react-redux"; 
import {  useSelector } from 'react-redux';


export default function DeleteBtn({provider}){

    const dispatch = useDispatch();


    const handleDelete =()=>{
        dispatch({
            type:'DELETE_PROVIDERS',
            payload: provider,
        })
    }

    return(
        <button onClick={handleDelete} >Delete</button>
    )
}

