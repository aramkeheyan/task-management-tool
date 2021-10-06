import setLoggedInUser from "./actions"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const register = ({ name, surname, email, password }) => async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
    } catch (err) {
        console.log(err.code, err.message);
    }
}

const thunk = {
    register
}

export default thunk