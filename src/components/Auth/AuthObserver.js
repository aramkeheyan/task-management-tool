import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { setLoggedInUser } from "../../redux/common/auth/actions";
import { MAIN_PAGE } from "../../constants/paths";
import { useHistory } from "react-router";
import { onSnapshot } from "@firebase/firestore";

function AuthObserver() {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                dispatch(setLoggedInUser(user)) // user || auth.currentUser
                history.push(MAIN_PAGE) // potential bug
            }
            return true
        })
    }, [dispatch, history])

}

export default AuthObserver