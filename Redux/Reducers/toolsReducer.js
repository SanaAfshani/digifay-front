import {
    THEME
} from "../Types/toolsType";

const initialState = {
    theme:  "light",
}
export default function toolsReducer(state = initialState, action) {
    switch (action.type) {
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
