import React from 'react';
import { useDispatch,} from "react-redux"; 
import {  useSelector } from 'react-redux';


export default function deleteBtn(){

    const handleDelete =()=>{
        dispatch({
            type:'DELETE_PROVIDER',
            payload: provider,
        })
    }

    return(
        <button onClick={handleDelete} >Delete</button>
    )
}

