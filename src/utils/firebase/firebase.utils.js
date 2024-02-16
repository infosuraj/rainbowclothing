import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth"

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDl66ey9H34VkI4w1EP95rQAu6jcU76JHc",
    authDomain: "rainbow-clothing.firebaseapp.com",
    projectId: "rainbow-clothing",
    storageBucket: "rainbow-clothing.appspot.com",
    messagingSenderId: "593101736826",
    appId: "1:593101736826:web:c9d0bd8c316d2c06e9e4c3",
    measurementId: "G-8N3MGVVZD4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            })
        } catch (err) {
            console.log('Error creating user', err.message);
        }
    }
    return userDocRef;
    //if user data doesn't exist
    //create / set the document with the data from userAuth in my collection

    //if user data exists
    //return user data
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

