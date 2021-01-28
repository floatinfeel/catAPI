import {ADVANCED_PAGE} from '../constants/actionType'
const pageReducer = (state, action) =>{
    switch (action.type) {
        case ADVANCED_PAGE:
            return {...state, page: state.page+1}
        default:
            return page
    }
}
export default pageReducer