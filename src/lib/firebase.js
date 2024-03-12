import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCUAUi6ux8ONRBuFZjRehBJPaW8EaWamXI",
    authDomain: "campus-connect-599b4.firebaseapp.com",
    projectId: "campus-connect-599b4",
    storageBucket: "campus-connect-599b4.appspot.com",
    messagingSenderId: "771584459768",
    appId: "1:771584459768:web:305fea358034e0ad540c0d",
    measurementId: "G-D5KDXPTNR5"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);