// this file will create user defined hooks that will 
// be reused by components 
// here the aim is to have reusable logic created into a single hook 


import {useState, useEffect} from 'react'
import axios from 'axios'
export const useFetch = (initial, url)=>{
    const [state, setState ] = useState(initial); 

    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setState(response.data);
        })
    },[])

    return state;
}
