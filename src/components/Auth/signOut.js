import { getAuth, signOut } from "firebase/auth";
import { setLoggedInUser } from "../../redux/common/auth/actions";
import { auth } from "../../firebase"


const logOut = (dispatch) => {
    signOut(auth).then(() => {
        dispatch(setLoggedInUser(null))
    }).catch((err) => {
        console.log(err.message)
    });
}

export default logOut