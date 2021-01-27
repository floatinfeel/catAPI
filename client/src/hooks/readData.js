import {fetchSuccess, errorFetch, reachedEnd} from '../constants/actionType.js'
let url = `https://api.thecatapi.com/v1/breeds`
const apiKey = 'ae5dc580-b37a-4247-aeb0-77410ef2d4f0'

async function readData(){
    let options = {
        method: 'GET',
        headers: {'Accept': 'application/json',
            'Content-Type': 'application/json', 
            'x-api-key': `${apiKey}` 
        }
    }
    try {
      const res = await fetch(`${url}?limit=10&page=${state.pageNumber}`, options) 
    } catch (error) {
      console.log(error);
    }
  }

  export default readData