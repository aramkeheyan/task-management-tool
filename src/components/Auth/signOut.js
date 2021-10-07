import { useDispatch } from "react-redux"
import { getAuth, signOut } from "firebase/auth";
import { setLoggedInUser } from "../../redux/common/auth/actions";

const auth = getAuth()
const logOut = (dispatch) => {
    signOut(auth).then(() => {
        dispatch(setLoggedInUser(null))
    }).catch((err) => {
        console.log(err.message)
    });
}

export default logOut