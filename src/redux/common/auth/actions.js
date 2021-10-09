import { createAction } from "redux-actions";
import { SET_LOGGED_IN_USER, SIGN_OUT } from "../../actionTypes/auth";

const setLoggedInUser = createAction(SET_LOGGED_IN_USER)
const signOut = createAction(SIGN_OUT)

export { setLoggedInUser, signOut }