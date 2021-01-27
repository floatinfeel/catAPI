import {READ} from '../constants/actionType'
import axios from 'axios'
const url = 'https://api.thecatapi.com/v1/breeds'
const apiKey = 'ae5dc580-b37a-4247-aeb0-77410ef2d4f0'
export const readData = (page) => async (dispatch) =>{
    try {
        //get data from responde fetch api
        const {data} = await axios.get(`${url}?limit=10&page=${page}`, {headers: {'x-api-key': apiKey}})
        //action
        dispatch({type: READ, payload: data})
    } catch (error) {
        console.log(error);
    }
}