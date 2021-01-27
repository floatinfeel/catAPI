import {READ} from '../constants/actionType'

const catReducer = (cats = [], action) =>{
    switch (action.type) {
        case READ:
            return action.payload
        default:
            return cats
    }
}
export default catReducer