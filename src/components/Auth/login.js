import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setLoggedInUser } from "../../redux/common/auth/actions";
import { auth } from "../../firebase"

async function signIn({ email, password }, dispatch) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        dispatch(setLoggedInUser(user))
    } catch (err) {
        console.log(err.code, err.message)
    }
}

export default signIn