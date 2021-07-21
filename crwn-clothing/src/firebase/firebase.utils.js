import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import {firestore} from 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDf0TfFl8i1V3IQzbWtinW6BLPrflHnWbw",
  authDomain: "crw-db-42345.firebaseapp.com",
  projectId: "crw-db-42345",
  storageBucket: "crw-db-42345.appspot.com",
  messagingSenderId: "377722104303",
  appId: "1:377722104303:web:f14740e80d5e8ad969ee1a",
  measurementId: "G-FWRXTVLZV2",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists) {
    const {displayName , email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      // log error on to console
      console.log('Error creating user', error);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
