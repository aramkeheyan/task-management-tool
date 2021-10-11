import { handleActions } from "redux-actions";
import initialState from "../../initialState";

import { SET_TASK } from "../../actionTypes/task";

const reducer = handleActions({
    [SET_TASK]: (state, { payload }) => {
        return {
            ...state,
            tasks: payload //change?
        }
    },
}, initialState.data)

export default reducer