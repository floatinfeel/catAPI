import {READ, ADVANCED_PAGE} from '../constants/actionType'
const initialState = {
    cats: [],
    page: 0,
    loading: true,
    noMore: false,
}
const catReducer = (state = initialState, action) =>{
    switch (action.type) {
        case READ:
            return {...state, cats: action.payload, loading:false}
        case ADVANCED_PAGE:
            return {...state, page: state.page+1}
        default:
            return state
    }
}
export default catReducer