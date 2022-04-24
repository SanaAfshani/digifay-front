import {
    COLOR,
    SIZE,
    THEME
} from "../Types/toolsType";

const initialState = {
    size: "",
    color: "",
    theme: "light",
}
export default function toolsReducer(state = initialState, action) {
    switch (action.type) {
        case SIZE: {
            return {
                ...state,
                size: action.payload
            }
        }
        case COLOR: {
            return {
                ...state,
                color: action.payload
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
