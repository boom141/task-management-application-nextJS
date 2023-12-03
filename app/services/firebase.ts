import { setCookie } from "cookies-next";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB81orxmCaxTmiwPIYi6lnyd8Ic9g5OJjQ",
    authDomain: "userauth-46e3d.firebaseapp.com",
    projectId: "userauth-46e3d",
    storageBucket: "userauth-46e3d.appspot.com",
    messagingSenderId: "238135021643",
    appId: "1:238135021643:web:643060c5131b247375fdce"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
export const auth : any = getAuth(app);

export async function GoogleLoginAuth(){
    try{
        await signInWithPopup(auth, provider)
        setCookie('authorized', JSON.stringify({accessToken: auth.currentUser.accessToken,
        name: auth.currentUser.displayName, picture: auth.currentUser.photoURL}));
        return window.location.replace('/taskManager')
    }catch(e){
        return e
    }
};
