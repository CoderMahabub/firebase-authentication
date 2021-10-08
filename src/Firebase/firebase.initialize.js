import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initaializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initaializeAuthentication;