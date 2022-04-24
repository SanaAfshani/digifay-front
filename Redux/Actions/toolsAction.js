import {
    COLOR,
    MOCKDATA, SIZE,
    THEME
} from "../Types/toolsType";

export const setSize = (data) => {
    return async (dispatch) => {
        dispatch({
            type: SIZE,
            payload: data,
        })
    };
}
export const setColor = (data) => {
    return async (dispatch) => {
        dispatch({
            type: COLOR,
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

