
import { setCookie, hasCookie } from "cookies-next";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, } from "firebase/auth"

import dotenv from 'dotenv'
dotenv.config()

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
export const auth : any = getAuth(app);

export async function GoogleLoginAuth(){
    try{
        await signInWithPopup(auth, provider)
        hasCookie('authorized') ? false : setCookie('authorized', JSON.stringify({accessToken: auth.currentUser.accessToken,
        name: auth.currentUser.displayName, picture: auth.currentUser.photoURL})) ;
        
        return window.location.replace('/taskManager')
        
    }catch(e){
        return e
    }
};
