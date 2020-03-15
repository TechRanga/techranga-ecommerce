import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD6HOTC3a4nAi5xcZnACzp5XYjCHbvxRPs",
    authDomain: "techranga-ecommerce-db.firebaseapp.com",
    databaseURL: "https://techranga-ecommerce-db.firebaseio.com",
    projectId: "techranga-ecommerce-db",
    storageBucket: "techranga-ecommerce-db.appspot.com",
    messagingSenderId: "933174082974",
    appId: "1:933174082974:web:2d46915a2c7723aea0aa8f",
    measurementId: "G-YLBM04YR05"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//prompt allows you to select any google account available on the machine

export default firebase;

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )
        }catch(error){
            console.log("Error Creating User::",error.message);
        }
    }

    return userRef;
}