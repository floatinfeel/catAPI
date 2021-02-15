import {READ} from '../constants/actionType'
const initialState = {
    cats: [],
    loading: true,
}
const catReducer = (state = initialState, action) =>{
    switch (action.type) {
        case READ:
            return {...state, cats: action.payload, loading:false}
        default:
            return state
    }
}
export default catReducer