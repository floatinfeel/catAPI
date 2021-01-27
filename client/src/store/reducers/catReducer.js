import {READ} from '../constants/actionType'

export default (cats = [], action) =>{
    switch (action.type) {
        case READ:
            return action.payload
        default:
            return cats
    }
}