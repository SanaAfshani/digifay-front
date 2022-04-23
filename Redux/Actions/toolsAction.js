import {
    MOCKDATA,
    THEME
} from "../Types/toolsType";

export const setMockData = (data) => {
    return async (dispatch) => {
        dispatch({
            type: MOCKDATA,
            payload: data,
        })
    };
}
export const setTheme = (data) => {
    return async (dispatch) => {
        dispatch({
            type: THEME,
            payload: data,
        })
    };
}

