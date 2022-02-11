import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB1q-est_g_ORoq3ScZfCQctaGVpRrPODY",
    authDomain: "kekambas-79-auth-bs.firebaseapp.com",
    projectId: "kekambas-79-auth-bs",
    storageBucket: "kekambas-79-auth-bs.appspot.com",
    messagingSenderId: "926926891786",
    appId: "1:926926891786:web:d2e815a0387be9b28ea8f3"
}

const fire = initializeApp(firebaseConfig);
export default fire;