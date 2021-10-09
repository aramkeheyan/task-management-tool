import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { reduxFirestore, firestoreReducer, createFirestoreInstance } from 'redux-firestore'
import auth from "./common/auth/reducer"
import data from "./common/tasks/reducer"

const reducer = combineReducers({
    firestore: firestoreReducer,
    auth,
    data,
})

const RootReducer = (state, action) => {
    return reducer(state, action)
}

const store = createStore(RootReducer, applyMiddleware(thunk))

export default store