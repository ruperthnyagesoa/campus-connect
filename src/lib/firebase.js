import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA6bV2YCIHuYW5EwRJYeumYXLalu-fB8TI",
    authDomain: "campus2-bc36e.firebaseapp.com",
    projectId: "campus2-bc36e",
    storageBucket: "campus2-bc36e.appspot.com",
    messagingSenderId: "862976055817",
    appId: "1:862976055817:web:72d10a508223c3e3a676d8",
    measurementId: "G-8XKP86QRRH"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);