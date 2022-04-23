import {
    MOCKDATA,
    THEME
} from "../Types/toolsType";

const initialState = {
    MockData: {},
    theme:  "light",
}
export default function toolsReducer(state = initialState, action) {
    switch (action.type) {
        case MOCKDATA: {
            return {
                ...state,
                MockData: action.payload
            }
        }
        case THEME: {
            return {
                ...state,
                theme: action.payload
            }
        }
        default:
            return state
    }
}
