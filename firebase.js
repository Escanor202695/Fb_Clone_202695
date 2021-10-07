import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCx8brct3anmh0c5vqYOkNmLtY4cdFgro4",
  authDomain: "facebook-clone-202695.firebaseapp.com",
  projectId: "facebook-clone-202695",
  storageBucket: "facebook-clone-202695.appspot.com",
  messagingSenderId: "372270678092",
  appId: "1:372270678092:web:26903c9adce1715c0e34e9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export  {db,storage};
