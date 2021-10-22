import { createUserWithEmailAndPassword } from "firebase/auth";
import { setLoggedInUser } from "../../redux/common/auth/actions";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../../firebase"

//use thunk here

async function register({ firstName, lastName, email, password }, dispatch) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            firstName,
            lastName,
            email,
            authProvider: "local",
        });
        dispatch(setLoggedInUser(user))
    } catch (err) {
        console.log(err.code, err.message)
    }
}

export default register