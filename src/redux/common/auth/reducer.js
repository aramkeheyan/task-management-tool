import { handleActions } from "redux-actions";
import initialState from "../../initialState";
import { SET_LOGGED_IN_USER, SIGN_OUT } from "../../actionTypes/auth";

const reducer = handleActions({
    [SET_LOGGED_IN_USER]: (state, { payload }) => {
        return {
            ...state,
            loggedInUser: payload
        }
    },
    [SIGN_OUT]: (state) => {
        return {
            ...state,
            loggedInUser: null
        }
    }
}, initialState.auth)

export default reducer