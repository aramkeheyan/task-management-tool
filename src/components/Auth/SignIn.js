import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
function signIn({ email, password }) {
    return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((err) => {
            console.log(err.code, err.message)
        });
}

export default signIn