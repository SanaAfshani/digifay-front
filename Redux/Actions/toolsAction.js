import {
    THEME
} from "../Types/toolsType";

export const setTheme = (data) => {
    return async (dispatch) => {
        dispatch({
            type: THEME,
            payload: data,
        })
    };
}

