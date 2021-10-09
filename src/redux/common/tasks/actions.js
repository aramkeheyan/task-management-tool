import { createAction } from "redux-actions";
import { SET_TASK } from "../../actionTypes/task";

const setTask = createAction(SET_TASK)

export { setTask }