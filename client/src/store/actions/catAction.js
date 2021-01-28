import {ADVANCED_PAGE, READ} from '../constants/actionType'
import axios from 'axios'
import store from '../index'
const url = 'https://api.thecatapi.com/v1/breeds'
const apiKey = 'ae5dc580-b37a-4247-aeb0-77410ef2d4f0'
export const readData = () => async (dispatch) =>{
    const state = store.getState()
    const {page} = state.catReducer
    try {
        //get data from responde fetch api
        const {data} = await axios.get(`${url}?limit=10&page=${page}`, {headers: {'x-api-key': apiKey}})
        //action
        if(data.length <= 0){
            dispatch({type: 'NO_MORE'})
        }else{
            dispatch({type: READ, payload: data, loading: false})
        }
    } catch (error) {
        console.log(error);
    }
}
export const advancedPage = () => async (dispatch) =>{
    try {
        dispatch({type: ADVANCED_PAGE})
    } catch (error) {
        console.log(error);
    }
}
