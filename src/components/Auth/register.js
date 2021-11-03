// // import React, {useEffect, useState} from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { setLoggedInUser } from "../../redux/common/auth/actions";
// import { onSnapshot, collection, addDoc } from "firebase/firestore";
// import { auth, db } from "../../firebase";

// async function Register({ firstName, lastName, email, password }, dispatch) {
//    //use thunk here
//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password)
//         const user = userCredential.user
//         await addDoc(collection(db, "users"), {
//             uid: user.uid,
//             firstName,
//             lastName,
//             email,
//             authProvider: "local",
//         });
//         dispatch(setLoggedInUser(user))
//     } catch (err) {
//         console.log(err.code, err.message)
//     }
// }

// export default Register