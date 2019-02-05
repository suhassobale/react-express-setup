import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
   
    const res= await axios.get('/express');
    dispatch({type:FETCH_USER,payload:res.data});
    };




/* export const fetchUser = () => {
    return function(dispatch) {
     axios
     .get('/express')
     .then(res=>dispatch({type:FETCH_USER,payload:res}));
    };

}; */
