import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { setLoggedInUser } from "../../redux/common/auth/actions";

//use thunk here

const auth = getAuth();
async function register({ name, surname, email, password }) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await db.collection("users").add({
            uid: user.uid,
            name,
            surname,
            email,
            authProvider: "local",
        });
        // dispatch(setLoggedInUser(user))
    } catch (err) {
        console.log(err.code, err.message);
    }
}

export default register